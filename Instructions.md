# PROJECT INSTRUCTIONS (STRICT)

This file defines NON-NEGOTIABLE rules for all UI and code generation.

AI must follow these rules strictly. No assumptions. No improvisation.

---

## 1. CORE PRINCIPLE

Always extend the existing system.  
Never create a new design system.

Before writing any code:
- Analyze existing components (Hero, Navbar, Categories, Products)
- Reuse their spacing, typography, and layout patterns

---

## 2. COLORS

- Use ONLY colors defined in globals.css
- Do NOT hardcode colors
- Do NOT use opacity variants like /20, /10
- If a new color is needed → update globals.css, not components

---

## 3. TYPOGRAPHY

- Use the existing font (Articulat CF or fallback)
- Maintain consistent text sizes across all sections
- Do NOT introduce new font sizes randomly
- Maintain hierarchy:
  - Heading
  - Subheading
  - Body text

---

## 4. SPACING & ALIGNMENT

- Use the same container width across all sections
- Maintain consistent horizontal padding
- Maintain consistent vertical spacing between sections
- No random margins or padding

All elements must:
- align properly
- follow the same grid
- not feel “floating”

---

## 5. COMPONENT DESIGN

- Keep components minimal and clean
- Avoid overdesign
- No unnecessary shadows, gradients, or decorations
- Design must feel modern and product-focused

---

## 6. IMAGES

- Use high-quality, relevant images
- Avoid stretched or distorted images
- Prefer clean backgrounds
- Image must feel intentional, not pasted

---

## 7. INTERACTIONS

- Keep animations subtle
- No aggressive or flashy effects
- Follow same interaction style across site

---

## 8. RESPONSIVENESS

- Mobile-first approach
- Ensure clean layout on:
  - mobile
  - tablet
  - desktop

No broken spacing or alignment on smaller screens.

---

## 9. CODE STRUCTURE

- Follow module-based architecture
- Keep components reusable
- Avoid unnecessary logic
- Avoid excessive comments

---

## 10. BEFORE WRITING CODE (MANDATORY)

AI MUST:

1. Check existing components
2. Match spacing and layout
3. Match typography
4. Use globals.css tokens
5. Ensure consistency

If unsure → copy existing patterns

---

## 11. WHAT NOT TO DO

- Do NOT create new design systems
- Do NOT use random spacing or font sizes
- Do NOT introduce inconsistent UI
- Do NOT over-engineer
- Do NOT ignore this file

---

## 12. DESIGN PHILOSOPHY

- Minimal > flashy
- Consistency > creativity
- Readability > decoration
- Product-first > UI-first

---

## GOAL

Build a clean, consistent, scalable, and premium UI system  
where every section feels part of the same product.