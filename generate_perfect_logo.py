import math

def generate_logo(filename="public/rotaract-distrito-4370.svg"):
    color = "#D91B5C"
    cx, cy = 325, 55
    r_outer = 48
    r_rim_out = 40.5
    r_rim_in = 29
    r_hub = 14
    r_hole = 7.5
    
    # 24 gear teeth
    teeth_pts = []
    for i in range(24):
        deg = i * 15 - 90
        rad = math.radians(deg)
        half_w = math.radians(15)
        a1 = rad - half_w * 0.28
        a2 = rad - half_w * 0.17
        a3 = rad + half_w * 0.17
        a4 = rad + half_w * 0.28
        
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
    
    # 6 spokes at angles -90, -30, 30, 90, 150, 210 deg
    spokes_svg = []
    for deg in [-90, -30, 30, 90, 150, 210]:
        rad = math.radians(deg)
        perp = rad + math.pi / 2
        hw1 = 3.2
        hw2 = 4.2
        p_in1 = (cx + r_hub * math.cos(rad) + hw1 * math.cos(perp), cy + r_hub * math.sin(rad) + hw1 * math.sin(perp))
        p_in2 = (cx + r_hub * math.cos(rad) - hw1 * math.cos(perp), cy + r_hub * math.sin(rad) - hw1 * math.sin(perp))
        p_out1 = (cx + r_rim_in * math.cos(rad) + hw2 * math.cos(perp), cy + r_rim_in * math.sin(rad) + hw2 * math.sin(perp))
        p_out2 = (cx + r_rim_in * math.cos(rad) - hw2 * math.cos(perp), cy + r_rim_in * math.sin(rad) - hw2 * math.sin(perp))
        spokes_svg.append(f'<polygon points="{p_in1[0]:.2f},{p_in1[1]:.2f} {p_out1[0]:.2f},{p_out1[1]:.2f} {p_out2[0]:.2f},{p_out2[1]:.2f} {p_in2[0]:.2f},{p_in2[1]:.2f}" fill="{color}" />')
    spokes_str = "\n    ".join(spokes_svg)

    # Top arc letters (ROTARY)
    top_letters = []
    word_top = "ROTARY"
    angles_top = [-115, -105, -95, -85, -75, -65]
    r_text_top = 34.5
    for char, deg in zip(word_top, angles_top):
        rad = math.radians(deg)
        x = cx + r_text_top * math.cos(rad)
        y = cy + r_text_top * math.sin(rad)
        rot = deg + 90
        top_letters.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Open Sans\', Arial, sans-serif" font-size="7.5" font-weight="800" fill="{color}">{char}</text>')
    top_letters_str = "\n    ".join(top_letters)

    # Bottom arc letters (INTERNATIONAL)
    bot_letters = []
    word_bot = "INTERNATIONAL"
    span = 84
    start_deg = 90 - span / 2
    step = span / (len(word_bot) - 1)
    r_text_bot = 34.5
    for i, char in enumerate(word_bot):
        deg = start_deg + i * step
        rad = math.radians(deg)
        x = cx + r_text_bot * math.cos(rad)
        y = cy + r_text_bot * math.sin(rad)
        rot = deg - 90
        bot_letters.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Open Sans\', Arial, sans-serif" font-size="4.8" font-weight="800" fill="{color}">{char}</text>')
    bot_letters_str = "\n    ".join(bot_letters)

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 110" width="100%" height="100%" aria-label="Rotaract Distrito 4370">
  <!-- ROTARACT Wordmark -->
  <text x="4" y="66" font-family="'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="{color}" letter-spacing="-0.02em">Rotaract</text>
  
  <!-- DISTRITO 4370 Subtitle -->
  <text x="6" y="98" font-family="'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="300" fill="{color}" letter-spacing="0.04em">Distrito 4370</text>

  <!-- ROTARY WHEEL -->
  <g id="rotaryWheel">
    <!-- Gear teeth solid base -->
    <path d="{teeth_d}" fill="{color}" />
    
    <!-- Outer rim filled circle -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
    
    <!-- Cut inner ring area (transparent/white space between rim and hub) -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
    
    <!-- 6 Spokes connecting hub to rim -->
    {spokes_str}
    
    <!-- Center Hub -->
    <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole + 1.8}" fill="#FFFFFF" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole - 1.6}" fill="#FFFFFF" />
    <!-- Keyway notch at 12 o'clock -->
    <rect x="{cx - 1.1}" y="{cy - r_hole - 1.5}" width="2.2" height="3" fill="#FFFFFF" />
    
    <!-- Top banner background (White) -->
    <path d="M {cx - 35:.2f},{cy - 20:.2f} A {r_rim_out - 1} {r_rim_out - 1} 0 0,1 {cx + 35:.2f},{cy - 20:.2f} L {cx + 25.5:.2f},{cy - 14.5:.2f} A {r_rim_in + 1} {r_rim_in + 1} 0 0,0 {cx - 25.5:.2f},{cy - 14.5:.2f} Z" fill="#FFFFFF" stroke="{color}" stroke-width="1.2" stroke-linejoin="round" />
    
    <!-- Bottom banner background (White) -->
    <path d="M {cx - 36:.2f},{cy + 18:.2f} A {r_rim_out - 1} {r_rim_out - 1} 0 0,0 {cx + 36:.2f},{cy + 18:.2f} L {cx + 26.5:.2f},{cy + 13:.2f} A {r_rim_in + 1} {r_rim_in + 1} 0 0,1 {cx - 26.5:.2f},{cy + 13:.2f} Z" fill="#FFFFFF" stroke="{color}" stroke-width="1.2" stroke-linejoin="round" />
    
    <!-- Top banner letters: ROTARY -->
    {top_letters_str}
    
    <!-- Bottom banner letters: INTERNATIONAL -->
    {bot_letters_str}
  </g>
</svg>"""

    with open(filename, "w") as f:
        f.write(svg)
    print("Perfect logo generated successfully")

generate_logo()
