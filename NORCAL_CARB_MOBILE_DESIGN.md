# NorCal CARB Mobile Website Design Specification

**Project:** NORCALCARBMOBILE.COM  
**Created:** May 25, 2026  
**Version:** 1.0  
**Owner:** Bryan Gillis

---

## 🎯 Business Overview

**NorCal CARB Mobile** is a mobile CARB (California Air Resources Board) emissions testing service covering Northern California. We provide on-site OBD (On-Board Diagnostics) and OVI (Smoke Opacity) testing for commercial trucks, fleets, and motorhomes.

### Key Differentiators
- ✅ **Mobile Service** - We come to you
- ✅ **Same-Day Testing** - Fast turnaround
- ✅ **Expert Service** - BAR certified
- ✅ **Coverage** - Sacramento, Stockton, Woodland, Concord, and surrounding areas

---

## 🎨 Visual Design & Brand Identity

### Color Palette
```
Primary Blue:    #2563eb (Professional, trustworthy)
Success Green:   #16a34a (Compliance, passing tests)
Warning Orange:  #ea580c (Attention, deadlines)
Dark Gray:       #1f2937 (Text, headers)
Light Gray:      #f3f4f6 (Backgrounds)
White:           #ffffff (Clean, spacious)
```

### Typography
- **Headings:** Inter, -apple-system, sans-serif (Bold, 600-700 weight)
- **Body:** Inter, -apple-system, sans-serif (Regular, 400 weight)
- **Accent:** Monospace for VINs, license plates, technical specs

### Design Style
- **Modern & Clean:** Minimalist design with plenty of white space
- **Professional:** Business-focused, no gimmicks
- **Mobile-First:** Responsive design, most customers on phones
- **Fast Loading:** Optimized for quick access on job sites

---

## 📐 Site Structure

```
NORCALCARBMOBILE.COM
│
├── Home (/)
│   ├── Hero Section
│   ├── Services Overview
│   ├── Coverage Map
│   ├── Why Choose Us
│   ├── Recent Tests / Social Proof
│   └── Contact CTA
│
├── Services (/services)
│   ├── OBD Testing
│   ├── OVI Testing
│   ├── Fleet Services
│   └── Pricing
│
├── Coverage Area (/coverage)
│   ├── Interactive Map
│   └── City List
│
├── Schedule (/schedule)
│   ├── Contact Form
│   └── Phone/Email
│
└── Blog (/blog)
    ├── CARB Compliance Tips
    ├── Testing Requirements
    └── Industry Updates
```

---

## 🖼️ Page-by-Page Design

### 🏠 **HOME PAGE**

#### **Section 1: Hero**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│            [LOGO: NorCal CARB Mobile]               │
│                                                     │
│         Mobile CARB Testing Across                  │
│           Northern California                       │
│                                                     │
│    On-Site OBD & OVI Testing for Trucks,           │
│         Fleets, and Motorhomes                      │
│                                                     │
│     [Call (916) 555-0199]  [Schedule Online]       │
│                                                     │
│         📍 Sacramento • Stockton • Woodland          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design Details:**
- Clean, bold headline
- Subtle background: gradient from blue to white
- Primary CTA buttons: phone (tap to call) and schedule
- Truck icon or subtle line-art background

---

#### **Section 2: Services at a Glance**
```
┌─────────────────────────────────────────────────────┐
│                What We Test                         │
│                                                     │
│  [Icon: Computer]    [Icon: Smoke]    [Icon: Fleet]│
│   OBD Testing       OVI Testing      Fleet Services│
│                                                     │
│  2013+ Diesel      Pre-2013 Diesel    5+ Vehicles  │
│  Electronic Test   Smoke Opacity     Volume Pricing│
│  $150-$219        $150-$219         Custom Quotes  │
│                                                     │
│  [Learn More]      [Learn More]      [Learn More]  │
└─────────────────────────────────────────────────────┘
```

**Design Details:**
- 3-column grid (stacks on mobile)
- Icon + Title + Description + Price
- Hover effect: subtle lift/shadow

---

#### **Section 3: Coverage Map**
```
┌─────────────────────────────────────────────────────┐
│              We Come to You                         │
│                                                     │
│    [Simple map showing Northern CA coverage]        │
│                                                     │
│  ✓ Sacramento Valley    ✓ Stockton                 │
│  ✓ Woodland            ✓ Concord                   │
│  ✓ Marysville          ✓ Davis                     │
│                                                     │
│  Not sure if we cover your area? Call us!          │
│             (916) 555-0199                          │
└─────────────────────────────────────────────────────┘
```

**Design Details:**
- Stylized map with pins/markers
- Or simple list with checkmarks
- "Call us" CTA for edge cases

---

#### **Section 4: Why Choose NorCal CARB Mobile**
```
┌─────────────────────────────────────────────────────┐
│         Why Customers Choose Us                     │
│                                                     │
│  [✓] MOBILE SERVICE                                 │
│      No trip to the test station - we come to you  │
│                                                     │
│  [✓] SAME-DAY TESTING                              │
│      Fast turnaround, get your results today       │
│                                                     │
│  [✓] BAR CERTIFIED                                 │
│      Fully licensed and compliant with CA regs     │
│                                                     │
│  [✓] TRANSPARENT PRICING                           │
│      No hidden fees, clear upfront quotes          │
└─────────────────────────────────────────────────────┘
```

**Design Details:**
- Alternating layout (icon left, text right)
- Green checkmarks
- Brief, benefit-focused copy

---

#### **Section 5: Recent Tests / Social Proof**
```
┌─────────────────────────────────────────────────────┐
│           Recent Tests & Happy Customers            │
│                                                     │
│  "Bryan came to our Woodland location and tested   │
│   our fleet of 3 trucks in one visit. Professional │
│   and efficient!" - TS&L Seed, Woodland            │
│                                                     │
│  "Saved me hours driving to Sacramento. Tested my  │
│   motorhome at R-Ranch at the Lake in Napa."       │
│   - Nick Conti, Concord                            │
│                                                     │
│  [View More Reviews]                                │
└─────────────────────────────────────────────────────┘
```

**Design Details:**
- Testimonial cards
- Customer name + location
- 5-star rating display (optional)
- Carousel or static grid

---

#### **Section 6: Contact CTA**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│         Ready to Schedule Your Test?                │
│                                                     │
│    Call (916) 555-0199 or email us today           │
│       bryan@norcalcarbmobile.com                    │
│                                                     │
│           [Schedule Appointment]                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design Details:**
- Blue background section
- White text
- Large, prominent contact info
- Final CTA before footer

---

### 📋 **SERVICES PAGE**

```
┌─────────────────────────────────────────────────────┐
│                Our Services                         │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                     │
│  🖥️ OBD TESTING (2013+ DIESEL ENGINES)             │
│                                                     │
│  What it is:                                        │
│  Electronic on-board diagnostics test for modern    │
│  diesel engines (2013 model year and newer).       │
│                                                     │
│  Required for:                                      │
│  • Commercial trucks with 2013+ diesel engines      │
│  • Testing every 180 days (semi-annual)            │
│  • GVWR 14,001+ lbs                                │
│                                                     │
│  Price: $150-$219 per test                         │
│  Time: ~20-30 minutes                              │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                     │
│  💨 OVI TESTING (PRE-2013 DIESEL ENGINES)          │
│                                                     │
│  What it is:                                        │
│  Smoke opacity + visual inspection for older        │
│  diesel engines (2012 model year and older).       │
│                                                     │
│  Required for:                                      │
│  • Commercial trucks with pre-2013 diesel engines   │
│  • Testing every 180 days (semi-annual)            │
│  • Snap-acceleration smoke test                    │
│                                                     │
│  Example: 2012 International DuraStar, MaxxForce DT│
│  Engine Family: BNAVH07.6DHA                       │
│                                                     │
│  Price: $150-$219 per test                         │
│  Time: ~30-45 minutes                              │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                     │
│  🚛 FLEET SERVICES (5+ VEHICLES)                   │
│                                                     │
│  What we offer:                                     │
│  • Volume discounts for 5+ trucks                   │
│  • On-site testing at your facility                │
│  • Scheduled recurring tests (90-day windows)      │
│  • Digital records and compliance tracking         │
│                                                     │
│  Ideal for:                                         │
│  • Trucking companies                              │
│  • Construction fleets                             │
│  • Agriculture operations                          │
│                                                     │
│  Price: Custom quotes - contact for pricing        │
│                                                     │
│  [Contact for Fleet Quote]                         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### 🗺️ **COVERAGE AREA PAGE**

```
┌─────────────────────────────────────────────────────┐
│            Where We Serve                           │
│                                                     │
│  We provide mobile CARB testing across Northern     │
│  California, with primary coverage in:              │
│                                                     │
│  ✓ Sacramento (primary base)                       │
│  ✓ Stockton                                        │
│  ✓ Woodland                                        │
│  ✓ Concord                                         │
│  ✓ Davis                                           │
│  ✓ Marysville                                      │
│  ✓ Vacaville                                       │
│  ✓ Fairfield                                       │
│  ✓ Napa (special requests)                         │
│                                                     │
│  Outside our primary area?                          │
│  Call us - we may be able to accommodate special    │
│  trips for fleet services or multiple vehicles.     │
│                                                     │
│  (916) 555-0199                                    │
│  bryan@norcalcarbmobile.com                        │
└─────────────────────────────────────────────────────┘
```

---

### 📅 **SCHEDULE PAGE**

```
┌─────────────────────────────────────────────────────┐
│          Schedule Your CARB Test                    │
│                                                     │
│  ═══════════════════════════════════════════════   │
│  📞 FASTEST: Call Us                                │
│  (916) 555-0199                                    │
│  ═══════════════════════════════════════════════   │
│                                                     │
│  Or fill out this form and we'll call you:         │
│                                                     │
│  Name: [________________]                          │
│  Phone: [________________]                         │
│  Email: [________________]                         │
│                                                     │
│  Vehicle Type:                                      │
│  ( ) Commercial Truck                              │
│  ( ) Motorhome                                     │
│  ( ) Fleet (5+ vehicles)                           │
│                                                     │
│  Year: [____]  Make: [__________]                  │
│  VIN (last 8): [________]                          │
│                                                     │
│  Test Location:                                     │
│  [_____________________________________]           │
│  (Street address or business name)                  │
│                                                     │
│  Preferred Date/Time:                               │
│  [________________]                                │
│                                                     │
│  Additional Notes:                                  │
│  [_____________________________________]           │
│  [_____________________________________]           │
│                                                     │
│  [Submit Request]                                   │
│                                                     │
│  We typically respond within 2 hours during         │
│  business hours (7am-6pm Mon-Sat).                 │
└─────────────────────────────────────────────────────┘
```

---

### 📝 **BLOG SECTION**

**Sample Posts:**
1. "Understanding CARB Testing: OBD vs OVI"
2. "When is Your Next Test Due? A Guide to CARB Compliance"
3. "How to Read Your Engine Family Code"
4. "Fleet Managers: 5 Tips to Stay CARB Compliant"
5. "What Happens if Your Truck Fails a CARB Test?"

**Blog Post Template:**
```
┌─────────────────────────────────────────────────────┐
│  [Featured Image]                                   │
│                                                     │
│  ARTICLE TITLE                                      │
│  By Bryan Gillis | May 25, 2026 | CARB Compliance  │
│                                                     │
│  [Article content with headings, lists, images]    │
│                                                     │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  Need CARB testing? Schedule your appointment:      │
│  [Schedule Now]   [Call (916) 555-0199]            │
│                                                     │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  Related Articles:                                  │
│  • [Link to related post 1]                        │
│  • [Link to related post 2]                        │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### Tech Stack
- **Frontend:** React + TypeScript (or vanilla HTML/CSS/JS)
- **Styling:** Tailwind CSS
- **Hosting:** Cloudflare Workers + Pages
- **Forms:** Cloudflare Workers (backend) or Formspree
- **Analytics:** Google Analytics or Cloudflare Web Analytics

### Performance Targets
- ⚡ **Load Time:** < 2 seconds (mobile 3G)
- 📱 **Mobile Score:** 95+ (Google PageSpeed)
- ♿ **Accessibility:** WCAG 2.1 AA compliant
- 🔍 **SEO:** Structured data, meta tags, sitemap

### Key Features
1. **Click-to-Call:** Phone numbers tap-to-call on mobile
2. **Contact Form:** Simple, 5-field form
3. **Responsive Design:** Mobile-first, works on all devices
4. **Fast Loading:** Optimized images, minimal JavaScript
5. **SEO Optimized:** Schema.org markup, meta tags

---

## 📊 Conversion Goals

1. **Primary:** Phone calls (tracked via Google Analytics)
2. **Secondary:** Form submissions
3. **Tertiary:** Email clicks

### Tracking Setup
- Google Analytics 4
- Call tracking (optional: CallRail)
- Form submission events
- Button click tracking

---

## 📋 Content Checklist

### Pages to Build
- [x] Home page design
- [x] Services page design
- [x] Coverage area page design
- [x] Schedule/contact page design
- [x] Blog structure design

### Assets Needed
- [ ] Logo (NorCal CARB Mobile)
- [ ] Truck icons/illustrations
- [ ] Map graphic (Northern CA)
- [ ] Testimonial photos (optional)
- [ ] Blog post images

### Copy to Write
- [ ] Homepage hero copy
- [ ] Service descriptions
- [ ] About/bio section
- [ ] FAQ section (optional)
- [ ] Initial blog posts (3-5)

---

## 🚀 Next Steps

1. **Review this design** with Bryan
2. **Create logo/branding** (or use existing)
3. **Build HTML/CSS/React components**
4. **Write content** for all pages
5. **Set up Cloudflare Workers** deployment
6. **Configure DNS** on Squarespace
7. **Launch!**

---

## 📞 Contact

**Bryan Gillis**  
bryan@norcalcarbmobile.com  
(916) 555-0199  
Sacramento, CA

---

**Design Version:** 1.0  
**Last Updated:** May 25, 2026  
**Status:** Ready for Implementation ✅
