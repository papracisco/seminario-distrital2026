import math

def create_rotaract_logo(filename="public/rotaract-distrito-4370.svg"):
    # Official Rotaract color: #C8102E or #D91B5C. User's image is Rotaract Cranberry / Vibrant Magenta #D91B5C
    color = "#D91B5C"
    
    # Gear parameters
    # Wheel center: cx=325, cy=55, radius ~ 50
    cx, cy = 325, 55
    r_outer = 48
    r_rim_out = 40.5
    r_rim_in = 29
    r_hub = 14
    r_hole = 7.5
    
    # 24 gear teeth
    teeth_pts = []
    for i in range(24):
        deg = i * 15 - 90  # Start at top
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
    
    # 6 spokes at 0, 60, 120, 180, 240, 300 deg (vertical spoke at -90/top)
    spokes_svg = []
    for i in range(6):
        deg = i * 60 - 90
        rad = math.radians(deg)
        perp = rad + math.pi / 2
        hw = 3.6  # half width of spoke
        
        # inner pts
        p_in1 = (cx + r_hub * math.cos(rad) + hw * math.cos(perp), cy + r_hub * math.sin(rad) + hw * math.sin(perp))
        p_in2 = (cx + r_hub * math.cos(rad) - hw * math.cos(perp), cy + r_hub * math.sin(rad) - hw * math.sin(perp))
        # outer pts
        p_out1 = (cx + r_rim_in * math.cos(rad) + (hw + 0.6) * math.cos(perp), cy + r_rim_in * math.sin(rad) + (hw + 0.6) * math.sin(perp))
        p_out2 = (cx + r_rim_in * math.cos(rad) - (hw + 0.6) * math.cos(perp), cy + r_rim_in * math.sin(rad) - (hw + 0.6) * math.sin(perp))
        
        spokes_svg.append(f'<polygon points="{p_in1[0]:.2f},{p_in1[1]:.2f} {p_out1[0]:.2f},{p_out1[1]:.2f} {p_out2[0]:.2f},{p_out2[1]:.2f} {p_in2[0]:.2f},{p_in2[1]:.2f}" fill="{color}" />')
        
    spokes_str = "\n    ".join(spokes_svg)
    
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 110" width="100%" height="100%" aria-label="Rotaract Distrito 4370">
  <defs>
    <!-- Text paths for Rotary wheel banners -->
    <path id="rotaryTextArc" d="M {cx - 35:.2f},{cy:.2f} A 35 35 0 0,1 {cx + 35:.2f},{cy:.2f}" fill="none" />
    <path id="intlTextArc" d="M {cx + 35:.2f},{cy:.2f} A 35 35 0 0,1 {cx - 35:.2f},{cy:.2f}" fill="none" />
  </defs>

  <!-- ROTARACT Wordmark -->
  <text x="4" y="66" font-family="'Open Sans', 'Helvetica Neue', Arial, sans-serif" font-size="62" font-weight="800" fill="{color}" letter-spacing="-0.02em">Rotaract</text>
  
  <!-- DISTRITO 4370 Subtitle -->
  <text x="6" y="98" font-family="'Open Sans', 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="300" fill="{color}" letter-spacing="0.04em">Distrito 4370</text>

  <!-- ROTARY WHEEL -->
  <g id="rotaryWheel">
    <!-- Gear teeth solid base -->
    <path d="{teeth_d}" fill="{color}" />
    
    <!-- Outer rim filled -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_out}" fill="{color}" />
    
    <!-- Top banner background (White) -->
    <path d="M {cx - 38.5:.2f},{cy - 12:.2f} A 40.5 40.5 0 0,1 {cx + 38.5:.2f},{cy - 12:.2f} L {cx + 27.5:.2f},{cy - 8:.2f} A 29 29 0 0,0 {cx - 27.5:.2f},{cy - 8:.2f} Z" fill="#FFFFFF" stroke="{color}" stroke-width="1.2" />
    
    <!-- Bottom banner background (White) -->
    <path d="M {cx - 39:.2f},{cy + 10:.2f} A 40.5 40.5 0 0,0 {cx + 39:.2f},{cy + 10:.2f} L {cx + 28:.2f},{cy + 7:.2f} A 29 29 0 0,1 {cx - 28:.2f},{cy + 7:.2f} Z" fill="#FFFFFF" stroke="{color}" stroke-width="1.2" />
    
    <!-- Words: ROTARY and INTERNATIONAL -->
    <text font-family="'Open Sans', Arial, sans-serif" font-size="7.5" font-weight="700" fill="{color}" letter-spacing="0.14em">
      <textPath href="#rotaryTextArc" startOffset="50%" text-anchor="middle">ROTARY</textPath>
    </text>
    <text font-family="'Open Sans', Arial, sans-serif" font-size="5.2" font-weight="700" fill="{color}" letter-spacing="0.06em">
      <textPath href="#intlTextArc" startOffset="50%" text-anchor="middle">INTERNATIONAL</textPath>
    </text>
    
    <!-- Inner cut opening (White ring between rim and hub) -->
    <circle cx="{cx}" cy="{cy}" r="{r_rim_in}" fill="#FFFFFF" />
    
    <!-- 6 Spokes -->
    {spokes_str}
    
    <!-- Center Hub -->
    <circle cx="{cx}" cy="{cy}" r="{r_hub}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole + 2}" fill="#FFFFFF" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole}" fill="{color}" />
    <circle cx="{cx}" cy="{cy}" r="{r_hole - 1.8}" fill="#FFFFFF" />
    <!-- Keyway notch at top of hub -->
    <rect x="{cx - 1.2}" y="{cy - r_hole - 1.8}" width="2.4" height="3" fill="#FFFFFF" />
  </g>
</svg>"""
    
    with open(filename, "w") as f:
        f.write(svg)
    print(f"Saved {filename}")

create_rotaract_logo()
