import math

def generate_logo():
    color = "#D91B5C"
    
    # Rotary Wheel parameters
    cx, cy = 330, 55
    r_outer = 48
    r_rim_out = 41
    r_rim_in = 29
    r_hub = 14
    r_hole = 7.4
    
    # 24 gear teeth
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
        hw_hub = 3.3
        hw_rim = 4.5
        p1 = (cx + r_hub * math.cos(rad) + hw_hub * math.cos(perp), cy + r_hub * math.sin(rad) + hw_hub * math.sin(perp))
        p2 = (cx + r_rim_in * math.cos(rad) + hw_rim * math.cos(perp), cy + r_rim_in * math.sin(rad) + hw_rim * math.sin(perp))
        p3 = (cx + r_rim_in * math.cos(rad) - hw_rim * math.cos(perp), cy + r_rim_in * math.sin(rad) - hw_rim * math.sin(perp))
        p4 = (cx + r_hub * math.cos(rad) - hw_hub * math.cos(perp), cy + r_hub * math.sin(rad) - hw_hub * math.sin(perp))
        spokes.append(f'<polygon points="{p1[0]:.2f},{p1[1]:.2f} {p2[0]:.2f},{p2[1]:.2f} {p3[0]:.2f},{p3[1]:.2f} {p4[0]:.2f},{p4[1]:.2f}" fill="{color}" />')
    spokes_str = "\n      ".join(spokes)

    # White text on rim: ROTARY & INTERNATIONAL
    top_txt = []
    word_top = "ROTARY"
    angles_top = [-118, -107, -96, -84, -73, -62]
    r_text_top = 34.8
    for char, deg in zip(word_top, angles_top):
        rad = math.radians(deg)
        x = cx + r_text_top * math.cos(rad)
        y = cy + r_text_top * math.sin(rad)
        rot = deg + 90
        top_txt.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Arial Black\', \'Open Sans\', sans-serif" font-size="6.8" font-weight="900" fill="#FFFFFF">{char}</text>')
    top_txt_str = "\n      ".join(top_txt)

    bot_txt = []
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
        bot_txt.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Arial Black\', \'Open Sans\', sans-serif" font-size="4.4" font-weight="900" fill="#FFFFFF">{char}</text>')
    bot_txt_str = "\n      ".join(bot_txt)

    kw_w = 2.4
    kw_h = 3.2
    kw_x = cx - kw_w / 2
    kw_y = cy - r_hole - kw_h * 0.75

    # ROTARACT letter paths - exact match to official brand mark
    # Stroke properties: fill="none" stroke="{color}" stroke-width="7.8" stroke-linecap="round" stroke-linejoin="round"
    # Notice: Single-story 'a' for both letters!
    
    # Distrito 4370 text
    # Clean, elegant font
    
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395 110" width="100%" height="100%" aria-label="Rotaract Distrito 4370">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&amp;family=Outfit:wght@700;800&amp;family=Montserrat:wght@300;400;600;800&amp;display=swap');
      .rotaract-wordmark-path {{
        fill: none;
        stroke: {color};
        stroke-width: 7.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }}
      .distrito-text {{
        font-family: 'Montserrat', 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 27px;
        font-weight: 300;
        fill: {color};
        letter-spacing: 0.035em;
      }}
    </style>
  </defs>

  <!-- 1. WORDMARK "Rotaract" (Vector paths matching official geometry with single-story 'a' and rounded caps) -->
  <g id="wordmarkRotaract" class="rotaract-wordmark-path">
    <!-- R (x: 10 to 45) -->
    <path d="M 14 18 L 14 62" />
    <path d="M 14 18 L 33 18 C 43 18 45 28 45 33 C 45 38 42 45 31 45 L 14 45" />
    <path d="M 28 45 C 33 47 38 53 44 62" />

    <!-- o (x: 52 to 80) -->
    <path d="M 66 30 C 74 30 79 36 79 46 C 79 56 74 62 66 62 C 58 62 53 56 53 46 C 53 36 58 30 66 30 Z" />

    <!-- t (x: 88 to 104) -->
    <path d="M 94 22 L 94 54 C 94 59 97 62 103 62" />
    <path d="M 87 31 L 102 31" />

    <!-- a (SINGLE STORY! Circular bowl + right stem) (x: 111 to 139) -->
    <path d="M 125 30 C 133 30 137 36 137 46 C 137 56 133 62 125 62 C 117 62 113 56 113 46 C 113 36 117 30 125 30 Z" />
    <path d="M 137 30 L 137 62" />

    <!-- r (x: 147 to 169) -->
    <path d="M 151 30 L 151 62" />
    <path d="M 151 40 C 154 33 161 30 168 31" />

    <!-- a (SINGLE STORY! Circular bowl + right stem) (x: 177 to 205) -->
    <path d="M 191 30 C 199 30 203 36 203 46 C 203 56 199 62 191 62 C 183 62 179 56 179 46 C 179 36 183 30 191 30 Z" />
    <path d="M 203 30 L 203 62" />

    <!-- c (x: 213 to 239) -->
    <path d="M 238 37 C 233 31 224 29 220 36 C 215 44 215 49 220 56 C 224 62 233 61 238 55" />

    <!-- t (x: 247 to 263) -->
    <path d="M 253 22 L 253 54 C 253 59 256 62 262 62" />
    <path d="M 246 31 L 261 31" />
  </g>

  <!-- 2. SUBTITLE "Distrito 4370" -->
  <text x="12" y="96" class="distrito-text">Distrito 4370</text>

  <!-- 3. ROTARY WHEEL (Matching official Rotaract specifications) -->
  <g id="rotaryWheel">
    <path d="{teeth_d}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
    {spokes_str}
    <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="#FFFFFF" />
    <rect x="{kw_x:.2f}" y="{kw_y:.2f}" width="{kw_w:.2f}" height="{kw_h:.2f}" rx="0.5" fill="#FFFFFF" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole * 0.62:.2f}" fill="{color}" />
    {top_txt_str}
    {bot_txt_str}
  </g>
</svg>"""
    return svg

with open("public/rotaract-distrito-4370.svg", "w") as f:
    f.write(generate_logo())
print("Generated public/rotaract-distrito-4370.svg")
