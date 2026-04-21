# Knowledge Base 3 — Volume Calculator

**KB Name:** Oil City Ready Mix — Volume Calculator
**Description:** Formulas, tables, and worked examples for calculating concrete volume in m³ for flat slabs and pile/cylinder pours, with 10% waste.

---

## CONTENT BLOCK 1 — Rich Text: Calculator Overview

Oil City Ready Mix Ltd. provides a volume calculator to help customers estimate how much concrete they need. The bot must be able to run these calculations in conversation when a customer provides measurements.

**Always:**
- Include a 10% waste factor in every result
- Return results in cubic metres (m³)
- Round to 2 decimal places
- State the result is an estimate and recommend a formal quote

---

## CONTENT BLOCK 2 — Rich Text: Flat Area Calculator (Slab, Driveway, Patio, Floor)

**Inputs needed from customer:**
- Length in feet (ft)
- Width in feet (ft)
- Thickness in inches (in)

**Formula:**
```
Final m³ = Length(ft) × Width(ft) × (Thickness(in) ÷ 12) × 0.0283168 × 1.10
```

**Step by step:**
1. Divide thickness by 12 to convert inches to feet
2. Multiply length × width × thickness(ft) to get cubic feet
3. Multiply by 0.0283168 to convert to cubic metres
4. Multiply by 1.10 to add 10% waste factor
5. Round to 2 decimal places

---

## CONTENT BLOCK 3 — Rich Text: Pile / Cylinder Calculator (Footings, Columns, Piles)

**Inputs needed from customer:**
- Radius in inches (in)
- Height / depth in feet (ft)
- Number of piles (count)

**Formula:**
```
Final m³ = π × (Radius(in) ÷ 12)² × Height(ft) × Count × 0.0283168 × 1.10
```

**Step by step:**
1. Divide radius by 12 to convert inches to feet
2. Calculate: π × radius(ft)² × height(ft) = volume of one pile in ft³
3. Multiply by number of piles
4. Multiply by 0.0283168 to convert to cubic metres
5. Multiply by 1.10 to add 10% waste factor
6. Round to 2 decimal places

---

## CONTENT BLOCK 4 — Table: Worked Examples

| Scenario | Inputs | Result |
|---|---|---|
| Driveway slab | 20 ft long, 15 ft wide, 4 in thick | 3.11 m³ |
| Garage floor | 24 ft long, 22 ft wide, 4 in thick | 4.49 m³ |
| Sidewalk | 50 ft long, 4 ft wide, 4 in thick | 1.86 m³ |
| 4 concrete piles | Radius 6 in, 8 ft deep, 4 piles | 0.78 m³ |
| 8 concrete piles | Radius 4 in, 10 ft deep, 8 piles | 0.69 m³ |

---

## CONTENT BLOCK 5 — Table: Key Conversion Values

| Conversion | Value |
|---|---|
| 1 cubic foot to cubic metres | × 0.0283168 |
| Inches to feet | ÷ 12 |
| Waste factor | × 1.10 (10% added) |
| Pi (π) | 3.14159265 |

---

## CONTENT BLOCK 6 — FAQ: Calculator Questions

**Q: How do I know how much concrete I need?**
A: Tell me the type of pour (flat slab or piles), and give me the measurements. I'll calculate the volume in m³ for you, including a 10% waste factor.

**Q: What is the 10% waste factor?**
A: It accounts for spillage, uneven ground, over-pour, and formwork variations. It's standard practice and ensures you don't run short on-site.

**Q: The calculator says I need less than 1 m³ — what do I do?**
A: Our minimum order is 1 m³, so you'll order at least that amount regardless of the calculated volume.

**Q: Can you calculate in metres instead of feet?**
A: Our calculator uses feet and inches. If you have measurements in metres, multiply by 3.28084 to convert to feet, and centimetres by 0.3937 to convert to inches. Or share your measurements and I'll handle the conversion.

**Q: Is the calculator result accurate?**
A: It's a good estimate for planning purposes. For a precise volume based on your specific mix design and site conditions, we recommend requesting a formal quote. Contact us at 780-318-4949 or accounts@oilcityreadymix.net.
