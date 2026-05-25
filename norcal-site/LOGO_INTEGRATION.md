# NorCal CARB Mobile - Logo Integration Guide

## 📸 Logo Files Provided

You have 3 professional logo variations:

### **Logo 1: Full Stacked Logo (Dark Background)**
- **File:** `logo-stacked-dark.png` (1080x1080px)
- **Usage:** Social media, app icons, square spaces
- **Features:**
  - NCM with road lane markings in the "C"
  - Green "CARB" text
  - Full tagline: "Mobile Smoke & OBD Testing"
  - Coverage area: "Now Serving San Diego County & the Central Valley"
- **Best for:** Instagram posts, Facebook profile, business cards

### **Logo 2: Horizontal Logo with Truck Icon**
- **File:** `logo-horizontal-truck.png` (1920x1080px)
- **Usage:** Website headers, email signatures, wide banners
- **Features:**
  - Truck icon on left
  - "NorCal CARB MOBILE" text
  - Subtitle: "MOBILE SMOKE & OBD TESTING"
- **Best for:** Website header, truck wraps, letterhead

### **Logo 3: Full Horizontal Logo (Light Background)**
- **File:** `logo-full-horizontal.png` (1920x600px)
- **Usage:** Website hero, email headers, presentations
- **Features:**
  - Truck icon on left
  - "NorCal CARB Mobile" (CARB in green)
  - Tagline with green lines: "Mobile Smoke & OBD Testing"
  - Coverage area at bottom
- **Best for:** Website hero section, professional presentations, invoices

---

## 🎨 Brand Colors (Extracted from Logos)

```css
:root {
    --navy-dark: #0a2540;      /* Primary dark navy */
    --navy-medium: #1a365d;    /* Secondary navy */
    --green-primary: #5cb85c;  /* CARB green */
    --green-dark: #4a9c4a;     /* Hover/accent green */
    --white: #ffffff;          /* Text on dark */
    --gray-light: #f8f9fa;     /* Backgrounds */
}
```

---

## 🔧 How to Integrate the Logos

### **Step 1: Save Logo Files**

Save your 3 logo images to the `assets/logos/` folder:

```
norcal-site/
├── assets/
│   └── logos/
│       ├── logo-stacked-dark.png
│       ├── logo-horizontal-truck.png
│       └── logo-full-horizontal.png
├── index-pro.html
└── LOGO_INTEGRATION.md
```

### **Step 2: Update Header Logo**

Replace the text-based logo in `index-pro.html` with the horizontal logo:

**Find this section (around line 500):**
```html
<div class="logo-container">
    <div class="logo-text">
        <div class="logo-main">NorCal <span class="carb">CARB</span> Mobile</div>
        <div class="logo-tagline">Mobile Smoke & OBD Testing</div>
    </div>
</div>
```

**Replace with:**
```html
<div class="logo-container">
    <img src="assets/logos/logo-horizontal-truck.png" 
         alt="NorCal CARB Mobile - Mobile Smoke & OBD Testing" 
         style="height: 60px; width: auto;">
</div>
```

### **Step 3: Update Hero Section (Optional)**

For the hero section, you can add the full horizontal logo above the headline:

**Find the hero section and add:**
```html
<section class="hero">
    <div class="hero-container">
        <!-- Add logo here -->
        <img src="assets/logos/logo-full-horizontal.png" 
             alt="NorCal CARB Mobile" 
             style="max-width: 600px; width: 100%; margin-bottom: 2rem; opacity: 0.9;">
        
        <h1>Professional <span class="highlight">CARB Testing</span><br>When & Where You Need It</h1>
        <!-- rest of hero content -->
    </div>
</section>
```

### **Step 4: Update Footer Logo**

**Find the footer brand section:**
```html
<div class="footer-brand">
    <img src="assets/logos/logo-horizontal-truck.png" 
         alt="NorCal CARB Mobile" 
         style="height: 50px; width: auto; margin-bottom: 1rem; filter: brightness(0) invert(1);">
    <p>Professional mobile CARB emissions testing...</p>
</div>
```

> **Note:** The `filter: brightness(0) invert(1)` makes the logo white for use on the dark footer background.

---

## 📱 Favicon Setup

Create a favicon from the stacked logo:

1. Use the `logo-stacked-dark.png` file
2. Convert to favicon sizes (16x16, 32x32, 180x180)
3. Add to the `<head>` section:

```html
<link rel="icon" type="image/png" sizes="32x32" href="assets/logos/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/logos/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/logos/apple-touch-icon.png">
```

---

## 🎯 Logo Usage Guidelines

### **DO:**
- ✅ Use the truck icon version for horizontal spaces (website header)
- ✅ Use the stacked version for square spaces (social media)
- ✅ Maintain aspect ratio when resizing
- ✅ Use on navy or white backgrounds
- ✅ Keep green "CARB" color intact

### **DON'T:**
- ❌ Stretch or distort the logo
- ❌ Change the green color
- ❌ Remove the tagline without permission
- ❌ Use on busy/patterned backgrounds
- ❌ Place text too close to the logo

---

## 🚀 Quick Deploy Checklist

Before deploying the site:

- [ ] Save all 3 logo files to `assets/logos/`
- [ ] Update header logo (line ~500 in index-pro.html)
- [ ] Add hero logo (optional, but recommended)
- [ ] Update footer logo
- [ ] Create and add favicon files
- [ ] Test on mobile devices
- [ ] Verify logos load correctly
- [ ] Check logo appearance on light/dark backgrounds

---

## 📞 Need Help?

If you need logo files in different formats or sizes:
- **SVG:** Vector format for infinite scaling
- **PNG:** Current format (good for web)
- **PDF:** For print materials
- **ICO:** For favicons

Let me know and I can help convert or optimize!

---

**Created:** May 25, 2026  
**Version:** 1.0  
**Contact:** bryan@norcalcarbmobile.com
