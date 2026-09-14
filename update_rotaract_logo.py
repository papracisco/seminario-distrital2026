import math

def generate_rotaract_logo_svg():
    color = "#D91B5C"
    
    # Rotary Wheel parameters
    cx, cy = 328, 55
    r_outer = 48
    r_rim_out = 41
    r_rim_in = 29
    r_hub = 14
    r_hole = 7.2
    
    # 24 teeth
    teeth_pts = []
    for i in range(24):
        deg = i * 15 - 90
        rad = math.radians(deg)
        half_w = math.radians(15)
        a1 = rad - half_w * 0.32
        a2 = rad - half_w * 0.20
        a3 = rad + half_w * 0.20
        a4 = rad + half_w * 0.32
        
        p1 = (cx + r_rim_out * math.cos(a1), cy + r_rim_out * math.sin(a1))
        p2 = (cx + r_outer * math.cos(a2), cy + r_outer * math.sin(a2))
        p3 = (cx + r_outer * math.cos(a3), cy + r_outer * math.sin(a3))
        p4 = (cx + r_rim_out * math.cos(a4), cy + r_rim_out * math.sin(a4))
        
        if i == 0:
            teeth_pts.append(f"M {p1[0]:.2f},{p1[1]:.2f}")
        else:
            teeth_pts.append(f"L {p1[0]:.2f},{p1[1]:.2f}")
        teeth_pts.append(f"L {p2[0]:.2f},{p2[1]:.2f} L {p3[0]:.2f},{p3[1]:.2f} L {p4[0]:.2f},{p4[1]:.2f}")
    teeth_pts.append("Z")
    teeth_d = " ".join(teeth_pts)

    # 6 spokes: 12, 2, 4, 6, 8, 10 o'clock (-90, -30, 30, 90, 150, 210)
    spokes = []
    for deg in [-90, -30, 30, 90, 150, 210]:
        rad = math.radians(deg)
        perp = rad + math.pi / 2
        hw1 = 3.3
        hw2 = 4.4
        p_in1 = (cx + r_hub * math.cos(rad) + hw1 * math.cos(perp), cy + r_hub * math.sin(rad) + hw1 * math.sin(perp))
        p_in2 = (cx + r_hub * math.cos(rad) - hw1 * math.cos(perp), cy + r_hub * math.sin(rad) - hw1 * math.sin(perp))
        p_out1 = (cx + r_rim_in * math.cos(rad) + hw2 * math.cos(perp), cy + r_rim_in * math.sin(rad) + hw2 * math.sin(perp))
        p_out2 = (cx + r_rim_in * math.cos(rad) - hw2 * math.cos(perp), cy + r_rim_in * math.sin(rad) - hw2 * math.sin(perp))
        spokes.append(f'<polygon points="{p_in1[0]:.2f},{p_in1[1]:.2f} {p_out1[0]:.2f},{p_out1[1]:.2f} {p_out2[0]:.2f},{p_out2[1]:.2f} {p_in2[0]:.2f},{p_in2[1]:.2f}" fill="{color}" />')
    spokes_str = "\n    ".join(spokes)

    # White text on rim: ROTARY & INTERNATIONAL
    top_letters = []
    word_top = "ROTARY"
    angles_top = [-118, -107, -96, -84, -73, -62]
    r_text_top = 34.8
    for char, deg in zip(word_top, angles_top):
        rad = math.radians(deg)
        x = cx + r_text_top * math.cos(rad)
        y = cy + r_text_top * math.sin(rad)
        rot = deg + 90
        top_letters.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Open Sans\', Arial, sans-serif" font-size="6.8" font-weight="800" fill="#FFFFFF">{char}</text>')
    top_letters_str = "\n    ".join(top_letters)

    bot_letters = []
    word_bot = "INTERNATIONAL"
    span = 92
    start_deg = 90 - span / 2
    step = span / (len(word_bot) - 1)
    r_text_bot = 35.0
    for i, char in enumerate(word_bot):
        deg = start_deg + i * step
        rad = math.radians(deg)
        x = cx + r_text_bot * math.cos(rad)
        y = cy + r_text_bot * math.sin(rad)
        rot = deg - 90
        bot_letters.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Open Sans\', Arial, sans-serif" font-size="4.4" font-weight="800" fill="#FFFFFF">{char}</text>')
    bot_letters_str = "\n    ".join(bot_letters)

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 110" width="100%" height="100%" aria-label="Rotaract Distrito 4370">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&amp;family=Open+Sans:wght@300;400&amp;display=swap');
      .rotaract-title {{
        font-family: 'Quicksand', 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 64px;
        font-weight: 700;
        fill: {color};
        letter-spacing: -0.015em;
      }}
      .distrito-sub {{
        font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 28px;
        font-weight: 300;
        fill: {color};
        letter-spacing: 0.035em;
      }}
    </style>
  </defs>

  <!-- 1. ROTARACT Wordmark (Official single-story 'a' & soft rounded geometry matching Logotipos.png) -->
  <text x="4" y="66" class="rotaract-title">Rotaract</text>
  
  <!-- 2. DISTRITO 4370 Subtitle (Clean, light typography matching Logotipos.png) -->
  <text x="6" y="99" class="distrito-sub">Distrito 4370</text>

  <!-- 3. ROTARY WHEEL (Official Rotary International cogwheel in matching Cranberry) -->
  <g id="rotaryWheelOfficial">
    <!-- Gear teeth base -->
    <path d="{teeth_d}" fill="{color}" />
    <!-- Solid rim -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
    <!-- Inner cutout opening -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
    <!-- 6 Spokes -->
    {spokes_str}
    <!-- Center Hub -->
    <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
    <!-- Axle hole & keyway slot at 12 o'clock -->
    <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="#FFFFFF" />
    <rect x="{cx - 1.2:.2f}" y="{cy - r_hole - 2.4:.2f}" width="2.40" height="3.20" fill="#FFFFFF" />
    <!-- Solid axle center pin -->
    <circle cx="{cx}" cy="{cy}" r="{r_hole * 0.6:.2f}" fill="{color}" />
    <!-- ROTARY & INTERNATIONAL white letters on rim -->
    {top_letters_str}
    {bot_letters_str}
  </g>
</svg>"""
    return svg

with open("public/rotaract-distrito-4370.svg", "w") as f:
    f.write(generate_rotaract_logo_svg())
print("public/rotaract-distrito-4370.svg successfully updated")
