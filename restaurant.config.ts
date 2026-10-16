/**
 * VELORA — Kitchen & Social
 * Universal Hospitality Sales Demo Configuration
 * 
 * Changing this single configuration file personalizes the entire website
 * for any restaurant, lounge, bistro, or hospitality group worldwide.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "starters" | "mains" | "grill" | "desserts" | "drinks";
  dietary?: ("GF" | "V" | "VG" | "DF" | "Signature" | "Seasonal")[];
  image: string;
  pairingNote?: string;
  isFeatured?: boolean;
}

export interface MenuCategory {
  id: "starters" | "mains" | "grill" | "desserts" | "drinks";
  name: string;
  tagline: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "all" | "culinary" | "cocktails" | "atmosphere" | "social";
  image: string;
  caption: string;
  orientation?: "portrait" | "landscape" | "square";
}

export interface DiningExperience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface EventPackage {
  id: string;
  title: string;
  capacity: string;
  vibe: string;
  description: string;
  image: string;
  idealFor: string[];
}

export const RESTAURANT_CONFIG = {
  // Global Sales Demo Flags
  isDemo: true,
  demoNotice: "Universal Hospitality Demo Showcase. Designed for seamless client rebranding.",
  
  // Brand Identity
  brandName: "VELORA",
  subBrand: "Kitchen & Social",
  tagline: "Taste the Moment.",
  positioning: "A contemporary restaurant concept pairing thoughtfully crafted culinary moments, relaxed upscale dining, and warm, magnetic hospitality.",
  
  // Announcement Bar
  announcement: {
    enabled: true,
    text: "Seasonal Tasting Series & Private Social Evenings — Inquire for Group Reservations",
    linkText: "Reserve Early",
    linkHref: "/reservations"
  },

  // Localization & Currency
  currencySymbol: "$",
  currencyCode: "USD",
  locale: "en-US",

  // Business Details (Configurable Placeholders)
  contact: {
    addressLine1: "482 West Highland Avenue",
    suite: "Suite 100",
    neighborhood: "The Arts & Market District",
    cityStateZip: "Metropolitan Area, NY 10014",
    country: "United States",
    phoneDisplay: "+1 (555) 724-8930",
    phoneRaw: "+15557248930",
    email: "inquiries@velora-dining.demo",
    googleMapsSearchUrl: "https://maps.google.com/?q=Modern+Restaurant+District",
  },

  // Operating Hours
  hours: [
    { days: "Tuesday – Thursday", dinner: "5:00 PM – 10:30 PM", note: "Dinner & Hearth Lounge" },
    { days: "Friday – Saturday", dinner: "4:30 PM – Midnight", note: "Dinner, Cocktails & Late Social" },
    { days: "Sunday", dinner: "11:00 AM – 9:00 PM", note: "Brunch & All-Day Hearth Dining" },
    { days: "Monday", dinner: "Private Bookings Only", note: "Available for Venue Buyouts" },
  ],

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },

  // Core Pillars / Philosophy
  philosophy: {
    heading: "Honest Craft, Shared Energy",
    eyebrow: "OUR CULINARY ETHOS",
    lead: "We believe dining is fundamentally about human connection. The crackle of an open flame, the aroma of hand-picked botanicals, and the cadence of laughter across a candlelit table.",
    description: "Every plate at VELORA begins with respectful sourcing—seeking peak seasonal produce, heritage grains, and thoughtfully raised proteins. Our kitchen balances time-honored open-hearth techniques with contemporary lightness, producing dishes that feel both comfortingly familiar and vibrantly fresh.",
    quotes: [
      {
        quote: "Hospitality is not a transaction; it is the art of making someone feel deeply considered from the second they cross the threshold.",
        attribution: "VELORA Hospitality Philosophy"
      }
    ]
  },

  // Dining Experiences
  experiences: [
    {
      id: "hearth-dining",
      title: "Hearth Dining",
      tagline: "Flame, Salt & Seasonal Craft",
      description: "An intimate main room experience surrounded by warm timber, raw linen, and the ambient glow of our live wood-fired hearth.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      features: ["Seasonal multi-course progression", "Heirloom ingredient pairings", "Sommelier-guided cellar list"]
    },
    {
      id: "social-lounge",
      title: "The Social Lounge",
      tagline: "Small Plates & Botanical Mixology",
      description: "Unwind around curved velvet booths and brass low-tables. Enjoy craft libations, savory skewers, and a magnetic, low-tempo soundtrack.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      features: ["Artisanal craft cocktail menu", "High-heat sharing plates", "Walk-in friendly bar seating"]
    },
    {
      id: "private-gatherings",
      title: "Private Celebrations",
      tagline: "Bespoke Evenings for Groups",
      description: "Whether celebrating a milestone birthday, executive retreat, or wedding rehearsal, our private spaces deliver seamless hospitality.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      features: ["Custom tailored tasting menus", "Dedicated captain & bar staff", "Private audio & styling control"]
    }
  ] as DiningExperience[],

  // Menu Categories
  menuCategories: [
    {
      id: "starters",
      name: "Starters & Crudo",
      tagline: "Vibrant Small Plates for the Table",
      description: "Light, textured, and punchy bites to awaken the palate."
    },
    {
      id: "mains",
      name: "Main Courses",
      tagline: "Seasonal Plates & Coastal Catches",
      description: "Balanced compositions showcasing honest culinary technique."
    },
    {
      id: "grill",
      name: "Hearth & Grill",
      tagline: "Flame-Broiled Cuts & Roasts",
      description: "Prime cuts and garden harvests finished over white oak embers."
    },
    {
      id: "desserts",
      name: "Desserts & Cheeses",
      tagline: "Warm Sweet Finishes & Digestifs",
      description: "Subtle, nuanced desserts crafted with restraint and house ferments."
    },
    {
      id: "drinks",
      name: "Cocktails & Cellar",
      tagline: "Botanical Mixology & Low-Intervention Wines",
      description: "Spirited concoctions, zero-proof shrubs, and biodynamic European vintages."
    }
  ] as MenuCategory[],

  // Sample Menu Items (Fully dynamic)
  menuItems: [
    {
      id: "m-1",
      name: "Blistered Sourdough & Cultured Honey Butter",
      description: "Hand-milled stoneground loaf baked on the hearth floor, served with sea salt flakes and whip of wildflower honey butter.",
      price: "$14",
      category: "starters",
      dietary: ["V", "Signature"],
      pairingNote: "Pairs with Blanc de Blancs Champagne",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "m-2",
      name: "Yellowtail Kingfish Crudo",
      description: "Thinly shaved sashimi-grade kingfish, pressed white peach, yuzu kosho vinaigrette, pickled sea fennel, and smoked olive oil.",
      price: "$24",
      category: "starters",
      dietary: ["GF", "DF", "Signature"],
      pairingNote: "Pairs with Sancerre or Coastal Albariño",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "m-3",
      name: "Charred Heirloom Stracciatella",
      description: "Pulled soft mozzarella curd, roasted golden mission figs, aged Modena balsamico, toasted pine nuts, and garden mint.",
      price: "$21",
      category: "starters",
      dietary: ["GF", "V"],
      pairingNote: "Pairs with Etna Bianco",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-4",
      name: "Crispy Hen-of-the-Woods Skewers",
      description: "Maitake clusters caramelized in tare glaze, black garlic emulsion, toasted sesame, and lime leaf powder.",
      price: "$18",
      category: "starters",
      dietary: ["VG", "GF", "DF"],
      pairingNote: "Pairs with Pinot Noir",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-5",
      name: "Pan-Roasted Mediterranean Branzino",
      description: "Crispy-skin sea bass filet over braised baby leeks, saffron-scented clams broth, and charred winter citrus.",
      price: "$38",
      category: "mains",
      dietary: ["GF", "DF", "Signature"],
      pairingNote: "Pairs with Meursault or Chablis Premier Cru",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "m-6",
      name: "Hand-Rolled Agnolotti Del Plin",
      description: "Silky egg pasta parcels filled with slow-braised veal cheek, parmigiano reggiano foam, toasted hazelnuts, and roasting jus.",
      price: "$34",
      category: "mains",
      dietary: ["Signature"],
      pairingNote: "Pairs with Barolo Monforte d'Alba",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-7",
      name: "Dry-Aged Bone-In Ribeye (16oz)",
      description: "45-day Himalayan salt aged prime ribeye charred over oak, rosemary tallow basting, roasted marrow butter, and charred sweet shallots.",
      price: "$68",
      category: "grill",
      dietary: ["GF", "Signature"],
      pairingNote: "Pairs with Napa Valley Cabernet Sauvignon",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "m-8",
      name: "Flame-Kissed Iberico Pork Chop",
      description: "Acorn-fed bellota cut, charred stone fruit salsa, crushed smoked fingerlings, and fermented apple cider reduction.",
      price: "$46",
      category: "grill",
      dietary: ["GF"],
      pairingNote: "Pairs with Rioja Gran Reserva",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-9",
      name: "Charred Spiced Colossal Tiger Prawns",
      description: "Cast-iron blistered prawns with fermented chili glaze, garlic blossom, crushed coriander, and warm hearth roti.",
      price: "$36",
      category: "grill",
      dietary: ["GF", "DF"],
      pairingNote: "Pairs with Dry Riesling",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-10",
      name: "Smoked Vanilla Bean & Olive Oil Tart",
      description: "Flaky rye sablé crust, whipped mascarpone curd, harvest olive oil drizzle, and smoked Maldon salt flakes.",
      price: "$15",
      category: "desserts",
      dietary: ["V", "Signature"],
      pairingNote: "Pairs with Sauternes or Amaro Montenegro",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-11",
      name: "Dark Chocolate & Smoked Hazelnut Ganache",
      description: "70% Single-origin Venezuelan cacao, roasted hazelnut praline, burnt honey caramel, and espresso cream.",
      price: "$16",
      category: "desserts",
      dietary: ["V", "GF"],
      pairingNote: "Pairs with Vintage Tawny Port 20yr",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-12",
      name: "The Velvet Boulevardier",
      description: "Rye whiskey infused with roasted cacao nibs, Campari, sweet vermouth, flamed orange peel, and hand-cut clear ice block.",
      price: "$19",
      category: "drinks",
      dietary: ["Signature"],
      pairingNote: "House Social Signature",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
      isFeatured: true
    },
    {
      id: "m-13",
      name: "Wild Botanist Gimlet",
      description: "Small-batch dry gin, cold-pressed kaffir lime cordial, clarified cucumber water, and elderflower mist.",
      price: "$18",
      category: "drinks",
      dietary: ["Seasonal"],
      pairingNote: "Bright & Herbal Aperitif",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    },
    {
      id: "m-14",
      name: "Smoked Fig & Agave Old Fashioned",
      description: "Bourbon rested on charred figs, raw agave nectar, Angostura & orange bitters, smoked with applewood under a cloche.",
      price: "$20",
      category: "drinks",
      dietary: ["Signature"],
      pairingNote: "Dramatic Tabletop Presentation",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
      isFeatured: false
    }
  ] as MenuItem[],

  // Gallery Photos
  galleryPhotos: [
    {
      id: "g-1",
      title: "Hearth Flame & Table Gathering",
      category: "atmosphere",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Intimate candlelit dining room designed with organic textures and warm amber illumination.",
      orientation: "landscape"
    },
    {
      id: "g-2",
      title: "Oak-Fired Ribeye Cut",
      category: "culinary",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      caption: "Dry-aged prime beef caramelized over glowing oak coals.",
      orientation: "portrait"
    },
    {
      id: "g-3",
      title: "Botanical Cocktail Pour",
      category: "cocktails",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      caption: "Crafted mixology combining clarified extracts and small-batch distillates.",
      orientation: "portrait"
    },
    {
      id: "g-4",
      title: "The Evening Social Lounge",
      category: "social",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      caption: "A magnetic atmosphere where conversations linger late into the evening.",
      orientation: "landscape"
    },
    {
      id: "g-5",
      title: "Yellowtail Kingfish Crudo",
      category: "culinary",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
      caption: "Sashimi-grade fish with pressed peach and citrus oil.",
      orientation: "square"
    },
    {
      id: "g-6",
      title: "Curated Bar & Spirits Display",
      category: "atmosphere",
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
      caption: "Custom brass and dark walnut bar shelving housing rare single malts and biodynamic wines.",
      orientation: "landscape"
    },
    {
      id: "g-7",
      title: "Flame-Broiled Seafood Platter",
      category: "culinary",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
      caption: "Charred prawns and seasonal catches finished with fermented garlic glaze.",
      orientation: "portrait"
    },
    {
      id: "g-8",
      title: "Late Night Libations",
      category: "cocktails",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
      caption: "Smoked fig Old Fashioned served with aromatic herbs.",
      orientation: "square"
    }
  ] as GalleryPhoto[],

  // Private Dining & Event Packages
  eventPackages: [
    {
      id: "the-cellar-room",
      title: "The Cellar Dining Room",
      capacity: "Up to 24 Guests Seated",
      vibe: "Intimate, warm brick, secluded sommelier station",
      description: "Surrounded by our temperature-controlled cellar collection, this enclosed private room provides complete discretion, custom lighting, and dedicated service.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      idealFor: ["Executive Dinners", "Wine Pairings", "Anniversary Milestones"]
    },
    {
      id: "hearth-terrace",
      title: "The Hearth Terrace & Mezzanine",
      capacity: "Up to 50 Guests Seated / 75 Reception",
      vibe: "Lush greenery, high ceiling, panoramic view of the room",
      description: "An airy semi-private mezzanine with direct sightlines to the open hearth pass. Features a private cocktail satellite bar and custom floral installations.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      idealFor: ["Cocktail Receptions", "Brand Launches", "Birthday Celebrations"]
    },
    {
      id: "full-buyout",
      title: "Full Restaurant Residency & Buyout",
      capacity: "Up to 110 Seated / 150 Roaming",
      vibe: "Exclusive takeover of the entire venue",
      description: "Take command of the entire dining room, cocktail lounge, and open kitchen pass for an unforgettable private gala or celebration.",
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
      idealFor: ["Weddings & Rehearsals", "Corporate Galas", "Private Premieres"]
    }
  ] as EventPackage[],

  // Reservation Options
  seatingOptions: [
    { value: "main-hearth", label: "Main Hearth Dining (Full Dinner Experience)" },
    { value: "social-lounge", label: "The Social Lounge (Banquettes & Small Plates)" },
    { value: "chefs-counter", label: "Chef's Pass Counter (Interactive Kitchen View)" },
    { value: "outdoor-terrace", label: "Heated Terrace (Weather Permitting)" }
  ],

  partySizes: [
    "2 Guests",
    "3 Guests",
    "4 Guests",
    "5 Guests",
    "6 Guests",
    "7-8 Guests",
    "9+ Guests (Private Dining Inquiry)"
  ],

  timeSlots: [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM"
  ]
};
