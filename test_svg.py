import math

def make_rotary_wheel(cx, cy, r_outer, r_rim_out, r_rim_in, r_hub, r_hole, color="#D91B5C", has_text=True):
    # 24 teeth
    teeth_pts = []
    for i in range(24):
        deg = i * 15 - 90
        rad = math.radians(deg)
        half_w = math.radians(15)
        # 4 points per tooth
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

    # 6 spokes: 12, 2, 4, 6, 8, 10 o'clock (-90, -30, 30, 90, 150, 210)
    spokes = []
    for deg in [-90, -30, 30, 90, 150, 210]:
        rad = math.radians(deg)
        perp = rad + math.pi / 2
        # Slight taper: thinner at hub, wider at rim
        hw_hub = r_outer * 0.065
        hw_rim = r_outer * 0.088
        
        p1 = (cx + r_hub * math.cos(rad) + hw_hub * math.cos(perp), cy + r_hub * math.sin(rad) + hw_hub * math.sin(perp))
        p2 = (cx + r_rim_in * math.cos(rad) + hw_rim * math.cos(perp), cy + r_rim_in * math.sin(rad) + hw_rim * math.sin(perp))
        p3 = (cx + r_rim_in * math.cos(rad) - hw_rim * math.cos(perp), cy + r_rim_in * math.sin(rad) - hw_rim * math.sin(perp))
        p4 = (cx + r_hub * math.cos(rad) - hw_hub * math.cos(perp), cy + r_hub * math.sin(rad) - hw_hub * math.sin(perp))
        spokes.append(f'<polygon points="{p1[0]:.2f},{p1[1]:.2f} {p2[0]:.2f},{p2[1]:.2f} {p3[0]:.2f},{p3[1]:.2f} {p4[0]:.2f},{p4[1]:.2f}" fill="{color}" />')

    spokes_str = "\n    ".join(spokes)

    text_elements = ""
    if has_text:
        # ROTARY at top
        word_top = "ROTARY"
        angles_top = [-120, -108, -96, -84, -72, -60]
        r_text_top = (r_rim_out + r_rim_in) / 2
        top_txt = []
        for char, deg in zip(word_top, angles_top):
            rad = math.radians(deg)
            x = cx + r_text_top * math.cos(rad)
            y = cy + r_text_top * math.sin(rad)
            rot = deg + 90
            top_txt.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Arial Black\', \'Open Sans\', Arial, sans-serif" font-size="{r_outer*0.14:.1f}" font-weight="900" fill="#FFFFFF">{char}</text>')
        
        # INTERNATIONAL at bottom
        word_bot = "INTERNATIONAL"
        span = 88
        start_deg = 90 - span / 2
        step = span / (len(word_bot) - 1)
        r_text_bot = (r_rim_out + r_rim_in) / 2
        bot_txt = []
        for i, char in enumerate(word_bot):
            deg = start_deg + i * step
            rad = math.radians(deg)
            x = cx + r_text_bot * math.cos(rad)
            y = cy + r_text_bot * math.sin(rad)
            rot = deg - 90
            bot_txt.append(f'<text x="{x:.2f}" y="{y:.2f}" transform="rotate({rot:.1f} {x:.2f} {y:.2f})" text-anchor="middle" dominant-baseline="central" font-family="\'Arial Black\', \'Open Sans\', Arial, sans-serif" font-size="{r_outer*0.092:.1f}" font-weight="900" fill="#FFFFFF">{char}</text>')
        
        text_elements = "\n    " + "\n    ".join(top_txt) + "\n    " + "\n    ".join(bot_txt)

    # Keyway notch in hub
    kw_w = r_hole * 0.42
    kw_h = r_hole * 0.55
    kw_x = cx - kw_w / 2
    kw_y = cy - r_hole - kw_h * 0.7

    return f"""
    <!-- Rotary Wheel -->
    <path d="{teeth_d}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
    {spokes_str}
    <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
    <!-- Axle hole + keyway -->
    <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="#FFFFFF" />
    <rect x="{kw_x:.2f}" y="{kw_y:.2f}" width="{kw_w:.2f}" height="{kw_h:.2f}" rx="0.5" fill="#FFFFFF" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole*0.62:.2f}" fill="{color}" />
    {text_elements}
    """

print("Generator script created")
