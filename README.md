# VELORA — Kitchen & Social

A bespoke, production-quality, multi-page demo restaurant website designed to showcase a modern, customizable hospitality brand for restaurant owners in the US, UK, Canada, and global markets.

Built with an upscale editorial aesthetic: Warm Cream (`#F7F3EC`), Deep Espresso (`#1B1714`), Dark Olive (`#414B39`), Restrained Copper (`#B88960`), and Charcoal (`#141210`), pairing `Playfair Display` and `Inter`.

---

## 🌟 The Vision

VELORA represents a **$5,000–$10,000 bespoke agency website** engineered as a universal sales showcase. It is crafted so any restaurateur can immediately envision their own concept, menu, and photography brought to life.

- **Brand:** VELORA — Kitchen & Social
- **Tagline:** Taste the Moment.
- **Positioning:** Modern restaurant featuring thoughtfully prepared food, relaxed upscale dining, social moments, and warm hospitality.
- **Universal & Adaptable:** Copy avoids tying the brand to one narrow cuisine or location, making it ideal for bistros, lounges, steakhouses, or contemporary dining venues.

---

## ⚡ Global 1-File Customization

Every aspect of this site is configured through **[`restaurant.config.ts`](file:///c:/Users/PCC/Desktop/luxury-roses/restaurant.config.ts)**:

```typescript
export const RESTAURANT_CONFIG = {
  isDemo: true, // Toggles the top sales demo notice
  brandName: "VELORA",
  subBrand: "Kitchen & Social",
  tagline: "Taste the Moment.",
  currencySymbol: "$",
  locale: "en-US",
  contact: {
    addressLine1: "482 West Highland Avenue",
    suite: "Suite 100",
    cityStateZip: "Metropolitan Area, NY 10014",
    phoneDisplay: "+1 (555) 724-8930",
    email: "inquiries@velora-dining.demo",
  },
  // Menu items, categories, hours, gallery, and event packages...
};
```

Updating this single file customizes brand titles, contact numbers, address, currency, menu items, prices, dietary tags, gallery images, and event spaces without touching React components.

---

## 📄 Site Pages

1. **Home (`/`)**:
   - Refined promotion / sales demo banner
   - Transparent to sticky dark espresso navigation
   - Full-screen cinematic hero ("Taste the Moment") with subtle scroll cue
   - Asymmetrical introduction with layered photography
   - Interactive featured dishes grid
   - Atmospheric storytelling section
   - Three dining experience tiles (Hearth Dining, Social Lounge, Private Celebrations)
   - Chef's culinary ethos (respectful sourcing, open flame, no fake biography)
   - Category previews, visual gallery preview, and booking CTA
   - Visit/contact block with map integration point
   - Footer with dynamic copyright and working newsletter subscription

2. **About Us (`/about`)**:
   - Immersive hero, culinary philosophy, atmosphere, and hospitality commitments.

3. **Menu (`/menu`)**:
   - Interactive categories: Starters, Mains, Grill & Hearth, Desserts, Cocktails & Cellar.
   - Search bar and dietary filtering (`GF`, `V`, `VG`, `DF`, `Signature`, `Seasonal`).
   - Mobile-responsive category switcher.

4. **Gallery (`/gallery`)**:
   - Editorial masonry grid with category filters (All, Culinary, Cocktails, Atmosphere, Social).
   - Accessible keyboard-controlled lightbox modal (ESC, Arrow Left, Arrow Right).

5. **Reservations (`/reservations`)**:
   - Modern table booking UI: party size, date (past dates disabled), time, seating preference, special requests.
   - Server-side validation via `/api/reservations` and transparent demo feedback.

6. **Events & Private Dining (`/events`)**:
   - Event room cards with capacities and vibes (The Cellar Room, Hearth Terrace, Venue Buyout).
   - Group event inquiry form with server validation.

7. **Contact (`/contact`)**:
   - Contact cards with click-to-call (`tel:`) and email (`mailto:`).
   - Weekly dinner & lounge hours.
   - Map component integration point and validated contact form.

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router) & React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Validation:** Client-side & Server API route validation

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🚢 Deployment (Vercel Ready)

This application follows standard Next.js conventions and deploys to **Vercel** with zero extra configuration:
1. Push repository to GitHub.
2. Import project into Vercel.
3. Deploy!
