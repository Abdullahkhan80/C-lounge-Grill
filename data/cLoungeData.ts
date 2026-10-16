export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  dietary?: string[];
  isSignature?: boolean;
  pairingNote?: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "all" | "dining" | "cocktails" | "lounge";
  image: string;
  alt: string;
  caption: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  description: string;
  category: string;
  image: string;
  isSamplePreview: boolean;
}

export const C_LOUNGE_INFO = {
  name: "C Lounge & Grill",
  shortName: "C Lounge",
  category: "Restaurant, Lounge & Grill",
  tagline: "Good Food. Great Vibes. Unforgettable Nights.",
  subtitle: "Discover dining, drinks, and an inviting lounge experience in the heart of the Bronx.",
  address: "1735 E 172nd St, Bronx, NY 10472, United States",
  streetAddress: "1735 E 172nd St",
  city: "Bronx",
  state: "NY",
  zip: "10472",
  country: "United States",
  phone: "+1 (646) 785-5832",
  phoneRaw: "+16467855832",
  email: "info@cloungeandgrill.com", // owner configurable
  googleMapsUrl: "https://maps.app.goo.gl/J9ZkXP2xK1b3EAqD6",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.529841804705!2d-73.8767784!3d40.8327429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f501a1c97a89%3A0x7dcb8ff8fef2d2d9!2s1735%20E%20172nd%20St%2C%20Bronx%2C%20NY%2010472!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  locationBadge: "1735 E 172ND ST · BRONX, NY",
  atmosphereNotes: "Upscale New York lounge aesthetic, vibrant grill cuisine, and intimate social ambiance.",
  
  // Real-world compliance disclaimer
  disclaimer: "C Lounge & Grill is a real-world dining establishment in the Bronx, NY. Sample menu items, pricing, and event calendars shown on this development preview can be updated by the owner through this centralized data configuration.",

  // Hours: Clear editable sample schedule
  hoursNotice: "Sample Lounge & Dining Hours (Configurable by Owner)",
  hours: [
    { days: "Monday – Wednesday", hours: "4:00 PM – 12:00 AM", service: "Dinner & Evening Lounge" },
    { days: "Thursday – Friday", hours: "4:00 PM – 2:00 AM", service: "Dinner, Late Night Grill & Cocktails" },
    { days: "Saturday", hours: "2:00 PM – 2:00 AM", service: "Afternoon Dining, Grill & Nightlife" },
    { days: "Sunday", hours: "2:00 PM – 11:00 PM", service: "Sunday Social, Grill & Drinks" }
  ],

  // Social Links (editable placeholder slots)
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  }
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "appetizers",
    name: "Appetizers & Starters",
    tagline: "Vibrant Small Bites Crafted for Sharing",
    description: "Bold flavors and crispy, savory textures designed to begin your evening on a high note."
  },
  {
    id: "grill-favorites",
    name: "Grill Favorites",
    tagline: "Flame-Kissed Cuts & Charred Delicacies",
    description: "Prime meats and signature cuts seasoned with house spice rubs and grilled over high heat."
  },
  {
    id: "main-courses",
    name: "Main Courses",
    tagline: "Hearty, Elevated Bronx Dining",
    description: "Plentiful chef specialties pairing savory proteins with flavorful sides and scratch sauces."
  },
  {
    id: "cocktails",
    name: "Cocktails & Beverages",
    tagline: "Mixology & Top-Shelf Lounge Pours",
    description: "Curated tropical, classic, and smoked cocktail creations crafted for vibrant New York nights."
  },
  {
    id: "desserts",
    name: "Desserts & After Dinner",
    tagline: "Sweet Finishes for Late Evenings",
    description: "Indulgent treats and artisanal coffee pairings to conclude an unforgettable dining experience."
  }
];

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: "app-1",
    name: "Charred Garlic Herb Chicken Skewers",
    description: "Tender flame-grilled chicken thighs marinated in chimichurri, lime zest, and smoked paprika, served with cilantro garlic dip.",
    price: "$16.00",
    category: "appetizers",
    dietary: ["Gluten-Free"],
    isSignature: true,
    pairingNote: "Pairs with Smoked Passionfruit Mezcalita",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "app-2",
    name: "Crispy Calamari & Sweet Pepper Glaze",
    description: "Golden wild-caught calamari rings tossed with blistered cherry peppers, scallions, and roasted spicy remoulade.",
    price: "$18.00",
    category: "appetizers",
    dietary: ["Pescatarian"],
    isSignature: false,
    pairingNote: "Pairs with Crisp Prosecco or Citrus Spritz",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "app-3",
    name: "C Lounge Signature Loaded Tostones",
    description: "Twice-fried green plantains crowned with mojo pulled beef, melted white queso, pickled red onion, and avocado crema.",
    price: "$17.00",
    category: "appetizers",
    dietary: ["Gluten-Free"],
    isSignature: true,
    pairingNote: "Pairs with Bronx Mule",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "app-4",
    name: "Smoked Island Wings",
    description: "Jumbo wings slow-smoked and flash-crisped, glazed in choice of Mango Habanero, Guava BBQ, or Garlic Parmesan.",
    price: "$16.50",
    category: "appetizers",
    dietary: [],
    isSignature: false,
    pairingNote: "Pairs with Draft Lager or Rum Punch",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80"
  },

  // Grill Favorites
  {
    id: "grill-1",
    name: "Flame-Broiled Churrasco Steak",
    description: "Marinated 12oz skirt steak char-broiled to preference, served with house chimichurri, grilled asparagus, and garlic yuca mash.",
    price: "$34.00",
    category: "grill-favorites",
    dietary: ["Gluten-Free"],
    isSignature: true,
    pairingNote: "Pairs with Cabernet Sauvignon or Old Fashioned",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grill-2",
    name: "Jumbo Grilled Red Snapper Filet",
    description: "Whole or filet fresh red snapper grilled over open embers with sweet bell pepper escovitch, thyme butter, and coconut rice.",
    price: "$32.00",
    category: "grill-favorites",
    dietary: ["Gluten-Free", "Pescatarian"],
    isSignature: true,
    pairingNote: "Pairs with Sauvignon Blanc",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grill-3",
    name: "Smoked Lamb Chops with Rosemary Butter",
    description: "Four tender rack chops seared with cracked pink peppercorn crust, roasted garlic demi-glace, and truffle roasted potatoes.",
    price: "$38.00",
    category: "grill-favorites",
    dietary: ["Gluten-Free"],
    isSignature: true,
    pairingNote: "Pairs with Pinot Noir or Smoked Manhattan",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grill-4",
    name: "Charred Tiger Prawns Skewers",
    description: "Colossal tiger shrimp basted with citrus scotch bonnet garlic butter, served over sweet corn succotash.",
    price: "$28.00",
    category: "grill-favorites",
    dietary: ["Pescatarian", "Gluten-Free"],
    isSignature: false,
    pairingNote: "Pairs with Frozen Passionfruit Daiquiri",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
  },

  // Main Courses
  {
    id: "main-1",
    name: "Creamy Cajun Seafood Penne",
    description: "Sautéed jumbo shrimp, sea scallops, and smoked sausage in a rich roasted red pepper Cajun cream sauce with shaved parmesan.",
    price: "$29.00",
    category: "main-courses",
    dietary: [],
    isSignature: true,
    pairingNote: "Pairs with Chardonnay",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-2",
    name: "C Lounge Prime Tavern Burger",
    description: "Half-pound Angus beef blend, smoked gouda, caramelized shallots, crisp pork belly, secret lounge sauce on a toasted brioche with truffle fries.",
    price: "$21.00",
    category: "main-courses",
    dietary: [],
    isSignature: false,
    pairingNote: "Pairs with Local Craft IPA",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-3",
    name: "Pan-Roasted Herb Salmon",
    description: "Crispy-skin Atlantic salmon over creamy sweet corn puree, sautéed baby spinach, and charred lemon vinaigrette.",
    price: "$27.50",
    category: "main-courses",
    dietary: ["Gluten-Free", "Pescatarian"],
    isSignature: false,
    pairingNote: "Pairs with Dry Rosé",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
  },

  // Cocktails
  {
    id: "cocktail-1",
    name: "The 172nd Boulevardier",
    description: "Small-batch rye whiskey, sweet vermouth, Campari, infused with roasted cacao nibs and flamed orange peel.",
    price: "$17.00",
    category: "cocktails",
    dietary: ["Handcrafted"],
    isSignature: true,
    pairingNote: "Signature Lounge Classic",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cocktail-2",
    name: "Bronx Sunset Passion",
    description: "Silver rum, passion fruit purée, fresh lime juice, agave nectar, topped with ginger beer and aromatic bitters.",
    price: "$16.00",
    category: "cocktails",
    dietary: ["Tropical"],
    isSignature: true,
    pairingNote: "Lounge Favorite",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cocktail-3",
    name: "Gold Velvet Espresso Martini",
    description: "Vanilla vodka, freshly pulled espresso, coffee liqueur, touch of salted caramel, dusted with edible gold shimmer.",
    price: "$18.00",
    category: "cocktails",
    dietary: ["Dessert Cocktail"],
    isSignature: true,
    pairingNote: "Perfect After Dinner",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cocktail-4",
    name: "Smoked Hibiscus Margarita",
    description: "Reposado tequila, artisanal mezcal float, house hibiscus cordial, fresh lime, black lava salt rim.",
    price: "$17.00",
    category: "cocktails",
    dietary: ["Craft Agave"],
    isSignature: false,
    pairingNote: "Pairs with Churrasco Steak",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80"
  },

  // Desserts
  {
    id: "dessert-1",
    name: "Warm Dulce de Leche Lava Cake",
    description: "Molten caramel center, dark chocolate crust, served with artisanal Madagascar vanilla bean ice cream.",
    price: "$12.00",
    category: "desserts",
    dietary: ["Vegetarian"],
    isSignature: true,
    pairingNote: "Pairs with Gold Velvet Espresso Martini",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dessert-2",
    name: "Crispy Cinnamon Churro Bites",
    description: "Golden fried churros dusted in spiced sugar, served with warm Belgian chocolate ganache and condensed milk dip.",
    price: "$10.50",
    category: "desserts",
    dietary: ["Vegetarian"],
    isSignature: false,
    pairingNote: "Great for table sharing",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80"
  }
];

export const EXPERIENCES = [
  {
    id: "dining",
    title: "Delicious Dining",
    eyebrow: "CULINARY MASTERY",
    desc: "From savory sizzled steaks and seasoned seafood to bold shareable starters, every dish is prepared with fresh ingredients and authentic passion.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    features: ["Flame-Grilled Specialties", "Generous Sharing Plates", "Fresh Seafood & Cuts"]
  },
  {
    id: "cocktails",
    title: "Crafted Cocktails",
    eyebrow: "MIXOLOGY EXCELLENCE",
    desc: "Expertly shaken signature cocktails, top-shelf spirits, premium wines, and celebratory bottle service to elevate your evening from first pour to last toast.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    features: ["Handcrafted Signature Drinks", "Top-Shelf Spirits & Wine", "Bespoke Nightly Specials"]
  },
  {
    id: "lounge",
    title: "Lounge Atmosphere",
    eyebrow: "BRONX NIGHTLIFE & VIBES",
    desc: "An inviting, sophisticated sanctuary where smooth ambient lighting, modern music, and warm hospitality come together for memorable nights with friends and loved ones.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    features: ["Intimate Ambient Lighting", "Plush Seating & Booths", "Energetic & Welcoming Crowd"]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Intimate Candlelit Dining",
    category: "dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm ambient candlelit table setting at C Lounge & Grill",
    caption: "Intimate dining arrangements ideal for date nights, anniversaries, and evenings out in the Bronx."
  },
  {
    id: "gal-2",
    title: "Flame-Broiled Churrasco & Chimichurri",
    category: "dining",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    alt: "Flame-broiled steak platter with herbs and sides",
    caption: "Sizzling grill creations seasoned to perfection over high heat."
  },
  {
    id: "gal-3",
    title: "Artisanal Crafted Cocktails",
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    alt: "Handcrafted cocktail with citrus garnish at the lounge bar",
    caption: "Signature mixology combining fresh juices, infusions, and top-shelf liquors."
  },
  {
    id: "gal-4",
    title: "Vibrant Evening Lounge Ambience",
    category: "lounge",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Lounge bar area with warm golden illumination and patrons",
    caption: "Where modern New York lounge energy meets welcoming neighborhood warmth."
  },
  {
    id: "gal-5",
    title: "Seafood & Grill Platter",
    category: "dining",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    alt: "Charred prawns and seafood delicacy",
    caption: "Succulent seafood selections prepared daily."
  },
  {
    id: "gal-6",
    title: "Golden Hour Libations",
    category: "cocktails",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    alt: "Refreshing passion cocktail in ambient lighting",
    caption: "Unwind after work or kickstart the weekend with handcrafted libations."
  },
  {
    id: "gal-7",
    title: "Private Booth & Group Celebrations",
    category: "lounge",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80",
    alt: "Velvet lounge seating area for groups and friends",
    caption: "Spacious booths tailored for birthday milestones, gatherings, and celebrations."
  },
  {
    id: "gal-8",
    title: "Crispy Starters & Sharing Bites",
    category: "dining",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    alt: "Gourmet grilled chicken skewers with dip",
    caption: "Savory sharing appetizers designed for social tables."
  }
];

export const SAMPLE_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    title: "Acoustic Evenings & Live Melodies",
    subtitle: "Soulful sounds and intimate dinner dining",
    date: "Every Thursday",
    time: "7:00 PM – 10:30 PM",
    category: "Live Music",
    description: "Enjoy a relaxed dining soundtrack featuring talented local musicians and acoustic duos while savoring our grill favorites and wine pairings.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    isSamplePreview: true
  },
  {
    id: "evt-2",
    title: "Bronx Weekend Lounge Sessions",
    subtitle: "Rhythms, Cocktails & Late-Night Vibes",
    date: "Friday & Saturday Nights",
    time: "9:00 PM – 2:00 AM",
    category: "Lounge Nightlife",
    description: "The atmosphere turns up with curated DJ sets, crafted mixology specials, and vibrant energy for groups looking to celebrate the weekend.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    isSamplePreview: true
  },
  {
    id: "evt-3",
    title: "Sunday Social & Grill Gathering",
    subtitle: "Relaxed dining and cocktail pitchers",
    date: "Every Sunday",
    time: "3:00 PM – 9:00 PM",
    category: "Social Dining",
    description: "Gather with family and close friends for hearty grilled feasts, sangria pitchers, and a warm Sunday atmosphere in the heart of the Bronx.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    isSamplePreview: true
  }
];

export const SEATING_OPTIONS = [
  { value: "dining", label: "Main Dining Room (Full Dinner Service)" },
  { value: "lounge", label: "Lounge Booths & Low Seating (Drinks & Bites)" },
  { value: "bar", label: "Bar Area / High-Tops (Casual & Energetic)" },
  { value: "outdoor", label: "Patio / Outdoor Seating (When Available)" }
];

export const PARTY_SIZES = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 Guests",
  "6 Guests",
  "7-8 Guests",
  "9+ Guests (Large Group / Event Inquiry)"
];

export const TIME_SLOTS = [
  "4:00 PM",
  "4:30 PM",
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
  "10:00 PM",
  "10:30 PM"
];
