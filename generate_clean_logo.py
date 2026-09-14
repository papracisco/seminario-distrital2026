import math

def generate_clean_rotaract_logo(filename="public/rotaract-distrito-4370.svg"):
    color = "#D91B5C"
    cx, cy = 325, 55
    r_outer = 48
    r_rim_out = 41
    r_rim_in = 29
    r_hub = 14
    r_hole = 7.2
    
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
    
    # 6 spokes at -90, -30, 30, 90, 150, 210 deg
    spokes_svg = []
    for deg in [-90, -30, 30, 90, 150, 210]:
        rad = math.radians(deg)
        perp = rad + math.pi / 2
        hw1 = 3.3
        hw2 = 4.4
        p_in1 = (cx + r_hub * math.cos(rad) + hw1 * math.cos(perp), cy + r_hub * math.sin(rad) + hw1 * math.sin(perp))
        p_in2 = (cx + r_hub * math.cos(rad) - hw1 * math.cos(perp), cy + r_hub * math.sin(rad) - hw1 * math.sin(perp))
        p_out1 = (cx + r_rim_in * math.cos(rad) + hw2 * math.cos(perp), cy + r_rim_in * math.sin(rad) + hw2 * math.sin(perp))
        p_out2 = (cx + r_rim_in * math.cos(rad) - hw2 * math.cos(perp), cy + r_rim_in * math.sin(rad) - hw2 * math.sin(perp))
        spokes_svg.append(f'<polygon points="{p_in1[0]:.2f},{p_in1[1]:.2f} {p_out1[0]:.2f},{p_out1[1]:.2f} {p_out2[0]:.2f},{p_out2[1]:.2f} {p_in2[0]:.2f},{p_in2[1]:.2f}" fill="{color}" />')
    spokes_str = "\n    ".join(spokes_svg)

    # Top arc letters (ROTARY) - crisp white letters directly on the solid magenta rim!
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

    # Bottom arc letters (INTERNATIONAL) - crisp white letters directly on the solid magenta rim!
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

    # Keyway notch in hub
    keyway_w = 2.4
    keyway_h = 3.2
    
    # Notice: The gear base and rim are 100% solid magenta (#D91B5C)!
    # There are NO white banners or white cuts ruining the rim.
    # The inside cutout between rim and hub is transparent/white, spokes connect hub to rim,
    # hub has center hole + keyway.
    
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 110" width="100%" height="100%" aria-label="Rotaract Distrito 4370">
  <!-- ROTARACT Wordmark -->
  <text x="4" y="66" font-family="'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="{color}" letter-spacing="-0.02em">Rotaract</text>
  
  <!-- DISTRITO 4370 Subtitle -->
  <text x="6" y="98" font-family="'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="300" fill="{color}" letter-spacing="0.04em">Distrito 4370</text>

  <!-- ROTARY WHEEL (Solid Magenta with pure reversed-out white details) -->
  <g id="rotaryWheel">
    <!-- 1. Gear teeth solid path -->
    <path d="{teeth_d}" fill="{color}" />
    
    <!-- 2. Solid rim filled disc (No white patches!) -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
    
    <!-- 3. Inner cutout (the negative space inside the rim) -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
    
    <!-- 4. 6 Solid spokes connecting hub to rim -->
    {spokes_str}
    
    <!-- 5. Center Hub solid disc -->
    <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
    
    <!-- 6. Center Hub axle hole and keyway notch -->
    <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="#FFFFFF" />
    <rect x="{cx - keyway_w/2:.2f}" y="{cy - r_hole - keyway_h + 1:.2f}" width="{keyway_w:.2f}" height="{keyway_h:.2f}" fill="#FFFFFF" />
    
    <!-- 7. Hub inner axle pin -->
    <circle cx="{cx}" cy="{cy}" r="{r_hole * 0.6:.2f}" fill="{color}" />
    
    <!-- 8. White text on solid magenta rim: ROTARY & INTERNATIONAL -->
    {top_letters_str}
    {bot_letters_str}
  </g>
</svg>"""

    with open(filename, "w") as f:
        f.write(svg)
    print("Saved clean, fully-colored logo to", filename)

generate_clean_rotaract_logo()
