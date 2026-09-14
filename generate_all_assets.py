import math

# 1. GENERATE FAVICON SVG (Exact match to favicon.png)
def generate_favicon_svg():
    color = "#D91B5C"
    cx, cy = 64, 64
    r_outer = 60
    r_rim_out = 51
    r_rim_in = 37
    r_hub = 18
    r_hole = 9.5
    
    # 24 teeth (one tooth pointing directly up at 12 o'clock, angle -90 deg)
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
        hw_hub = 4.2
        hw_rim = 5.8
        
        p1 = (cx + r_hub * math.cos(rad) + hw_hub * math.cos(perp), cy + r_hub * math.sin(rad) + hw_hub * math.sin(perp))
        p2 = (cx + r_rim_in * math.cos(rad) + hw_rim * math.cos(perp), cy + r_rim_in * math.sin(rad) + hw_rim * math.sin(perp))
        p3 = (cx + r_rim_in * math.cos(rad) - hw_rim * math.cos(perp), cy + r_rim_in * math.sin(rad) - hw_rim * math.sin(perp))
        p4 = (cx + r_hub * math.cos(rad) - hw_hub * math.cos(perp), cy + r_hub * math.sin(rad) - hw_hub * math.sin(perp))
        spokes.append(f'<polygon points="{p1[0]:.2f},{p1[1]:.2f} {p2[0]:.2f},{p2[1]:.2f} {p3[0]:.2f},{p3[1]:.2f} {p4[0]:.2f},{p4[1]:.2f}" fill="{color}" />')
    spokes_str = "\n    ".join(spokes)

    # Keyway notch at 12 o'clock pointing upwards
    kw_w = 3.6
    kw_h = 4.8
    kw_x = cx - kw_w / 2
    kw_y = cy - r_hole - kw_h * 0.75

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <!-- Rotary / Rotaract Gear Favicon (Matching user favicon.png exactly) -->
  <path d="{teeth_d}" fill="{color}" />
  <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
  <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
  {spokes_str}
  <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
  <!-- Center axle hole with keyway notch -->
  <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="#FFFFFF" />
  <rect x="{kw_x:.2f}" y="{kw_y:.2f}" width="{kw_w:.2f}" height="{kw_h:.2f}" rx="0.6" fill="#FFFFFF" />
  <!-- Center solid hub pin -->
  <circle cx="{cx}" cy="{cy}" r="{r_hole * 0.62:.2f}" fill="{color}" />
</svg>"""
    return svg

favicon_svg = generate_favicon_svg()
with open("public/favicon.svg", "w") as f:
    f.write(favicon_svg)
print("public/favicon.svg written successfully")

