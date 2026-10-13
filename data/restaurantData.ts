export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: string[];
  isSignature?: boolean;
  pairingNote?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: MenuItem[];
}

export interface SpaceOption {
  id: string;
  title: string;
  capacity: string;
  vibe: string;
  description: string;
  features: string[];
  image: string;
}

export interface PressAccolade {
  quote: string;
  source: string;
  award: string;
}

export const RESTAURANT_INFO = {
  name: "Rose's Luxury",
  tagline: "Making people happy since 2013.",
  subheading: "Michelin-Starred Dining on Capitol Hill",
  address: "717 8th Street SE, Washington, DC 20003",
  neighborhood: "Barracks Row, Capitol Hill",
  metro: "Eastern Market Metro Station (Orange / Blue / Silver Lines, 2 blocks)",
  phone: "(202) 742-3570",
  email: "hello@rosesluxury.com",
  michelinRating: "One Michelin Star",
  michelinYears: "2017 – Present",
  bonAppetitRating: "Best New Restaurant in America (2014)",
  hours: [
    { days: "Tuesday – Thursday", seatings: "5:00 PM – 9:30 PM", notes: "Dinner Service" },
    { days: "Friday – Saturday", seatings: "4:45 PM – 10:00 PM", notes: "Dinner & Late Pairings" },
    { days: "Sunday – Monday", seatings: "Closed", notes: "Available for Private Buyouts" }
  ],
  dressCode: "Come as you are. Casual elegance is celebrated.",
  corkageFee: "$45 per 750ml bottle (max 2 bottles per party)"
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "tasting",
    name: "Tasting Experience",
    tagline: "Our Celebrated Multi-Course Journey",
    description: "A playful, soul-warming progression curated nightly by Chef Aaron Silverman and team. Choose your path through contemporary American whimsy.",
    items: [
      {
        id: "t1",
        name: "Warm Potato Bread & Cultured Honey Butter",
        description: "Served warm straight from the hearth with hand-churned salted dairy butter and wild wildflower honey.",
        price: "Included with Experience",
        dietary: ["Vegetarian"],
        isSignature: true,
        pairingNote: "Krug 'Grande Cuvée' 170th Edition Champagne",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "t2",
        name: "Pork Sausage, Habanero & Lychee Salad",
        description: "Crispy grilled pork sausage crumble tossed with sweet fresh lychee, shaved red onion, Thai basil, and habanero-coconut broth.",
        price: "$28",
        dietary: ["Gluten-Free upon request"],
        isSignature: true,
        pairingNote: "Weingut Keller Riesling Trocken, Rheinhessen",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "t3",
        name: "Strawberry Spaghetti & Charred Tomato",
        description: "Hand-extruded chitarra pasta with macerated local strawberries, san marzano reduction, cracked black pepper, and 24-month parmigiano reggiano.",
        price: "$32",
        dietary: ["Vegetarian"],
        isSignature: true,
        pairingNote: "Domaine Tempier Bandol Rosé, Provence",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281292?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "t4",
        name: "Texas-Style Smoked Brisket",
        description: "Slow-smoked over white oak for 14 hours. Served with white bread puree, horseradish pickled slaw, and sweet chili glaze.",
        price: "$38",
        dietary: ["Gluten-Free"],
        isSignature: true,
        pairingNote: "Radio-Coteau Syrah, Sonoma Coast 2019",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "t5",
        name: "Caramelized White Chocolate & Passionfruit Tart",
        description: "Toasted cocoa nib crust, roasted passionfruit curd, salted milk crumb, and roasted banana ice cream.",
        price: "$18",
        dietary: ["Vegetarian"],
        isSignature: false,
        pairingNote: "Château Suduiraut Sauternes 2011",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "family-style",
    name: "Family-Style Classics",
    tagline: "Generous Sharing Plates for the Whole Table",
    description: "Rose’s Luxury was founded on the spirit of an unforgettable dinner party with friends. These plates are crafted to be passed and shared.",
    items: [
      {
        id: "f1",
        name: "Charred Spanish Octopus with Romesco",
        description: "Wood-grilled tentacles, smoked marcona almonds, charred scallion emulsion, fingerling potatoes, and citrus oil.",
        price: "$34",
        dietary: ["Gluten-Free", "Pescatarian"],
        isSignature: true,
        pairingNote: "Albariño 'Leirana' Forjas del Salnés 2022",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "f2",
        name: "Grilled Whole Branzino with Herbs & Lemon",
        description: "Deboned Mediterranean sea bass basted with caper butter, roasted fennel pollen, and pickled sea beans.",
        price: "$56",
        dietary: ["Gluten-Free", "Pescatarian"],
        isSignature: false,
        pairingNote: "Etna Bianco 'Pietramare' Graci 2021",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "f3",
        name: "Cavatelli with Duck Confit & Chanterelles",
        description: "Handmade ricotta cavatelli, slow-rendered duck ragù, preserved lemon zest, crispy sage, and pecorino romano.",
        price: "$36",
        dietary: ["Contains Poultry"],
        isSignature: false,
        pairingNote: "Produttori del Barbaresco Nebbiolo 2018",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "f4",
        name: "Cast Iron Roasted Maitake & Black Garlic",
        description: "Clusters of hen-of-the-woods mushrooms, black garlic sabayon, charred leek ash, and toasted brioche soldiers.",
        price: "$26",
        dietary: ["Vegetarian", "Vegan upon request"],
        isSignature: false,
        pairingNote: "Domaine Dujac Morey-Saint-Denis 2020",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "roof-garden",
    name: "The Roof Garden Fare",
    tagline: "Al Fresco Bites Under the Capitol Hill Skylight",
    description: "Served exclusively on our lush upstairs atrium terrace. Light, herbal, and vibrant compositions that pair effortlessly with sparkling wines and cocktails.",
    items: [
      {
        id: "r1",
        name: "Honeynut Squash & Burrata Flatbread",
        description: "Blistered hearth flatbread topped with Di Stefano burrata, hot honey, pomegranate arils, and crispy rosemary.",
        price: "$24",
        dietary: ["Vegetarian"],
        isSignature: true,
        pairingNote: "Pet-Nat Rosé 'Cirelli' Abruzzo 2022",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "r2",
        name: "Kanpachi Crudo & Green Apple Consommé",
        description: "Pacific yellowtail, thinly sliced radish, serrano chili drops, yuzu kosho vinaigrette, and compressed green apple.",
        price: "$27",
        dietary: ["Gluten-Free", "Raw", "Pescatarian"],
        isSignature: true,
        pairingNote: "Sancerre 'Les Monts Damnés' Cotat 2021",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "r3",
        name: "Crispy Soft Shell Crab Bun",
        description: "Maryland blue soft shell crab, spicy remoulade, pickled green tomatoes, and milk bread bun.",
        price: "$22",
        dietary: ["Shellfish"],
        isSignature: false,
        pairingNote: "Oxbow Brewing 'Farmhouse Pale Ale'",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "wine-pairings",
    name: "Curated Pairings & Cellar",
    tagline: "Natural, Biodynamic & Benchmark Producers",
    description: "Our sommelier team scours small family vineyards across Europe and the Americas to present pairings that elevate every bite.",
    items: [
      {
        id: "w1",
        name: "The Classic Sommelier Pairing",
        description: "Six thoughtful glasses journeying through classic Old World appellations and high-altitude expressions.",
        price: "$95 per guest",
        dietary: ["Curated Pairings"],
        isSignature: true,
        pairingNote: "Includes grower Champagne to cellar-aged Barolo"
      },
      {
        id: "w2",
        name: "The Rare & Benchmark Cellar Flight",
        description: "Exclusive back-vintage selections, Grand Crus, and unicorn bottles from our temperature-controlled cellar.",
        price: "$165 per guest",
        dietary: ["Prestige Pairing"],
        isSignature: true,
        pairingNote: "Featuring Raveneau, DRC, and historic Bordeaux châteaux"
      },
      {
        id: "w3",
        name: "House Spirited & Zero-Proof Pairings",
        description: "Artisanal botanical infusions, cold-drip teas, clarified shrub sodas, and dealcoholized vintage ferments.",
        price: "$65 per guest",
        dietary: ["Non-Alcoholic", "Vegan"],
        isSignature: false,
        pairingNote: "Handcrafted alongside our culinary brigade"
      }
    ]
  }
];

export const SPACE_OPTIONS: SpaceOption[] = [
  {
    id: "roof-garden",
    title: "The Glass Roof Garden",
    capacity: "Up to 32 seated / 45 reception",
    vibe: "Lush greenery, hanging ferns & starry Capitol Hill skylight",
    description: "Our jewel-box atrium sits atop the historic 1890s townhouse. Featuring a climate-controlled glass ceiling, exposed antique brick, and vibrant climbing ivy, it offers the ultimate Washington dinner party ambiance.",
    features: [
      "Dedicated cocktail bar and private sommelier",
      "Custom printed seasonal menus for each attendee",
      "Private audio system with vinyl & tailored playlists",
      "Full climate control with retractable glass panels"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "main-dining",
    title: "The Townhouse Parlor & Bar",
    capacity: "Up to 50 seated / 70 cocktail style",
    vibe: "Intimate, candlelit, mid-century brass & vintage mirrors",
    description: "Step into our warm ground-floor parlor where Rose's Luxury first welcomed the neighborhood in 2013. Surrounded by glowing filament bulbs, cozy banquettes, and an open hearth pass.",
    features: [
      "Open view of the Michelin-starred kitchen line",
      "Full craft cocktail and draft beer stations",
      "Signature family-style multi-course feast",
      "Personalized welcome toasts and hospitality team"
    ],
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "full-buyout",
    title: "Full Townhouse Buyout",
    capacity: "Up to 90 seated across both levels / 120 roaming",
    vibe: "The ultimate private culinary residency",
    description: "Take over the entirety of 717 8th Street SE. From welcome bubbles in the Parlor to dinner under the Roof Garden and dessert by the hearth, the entire restaurant becomes your home for the evening.",
    features: [
      "Complete exclusivity of both floors and private garden",
      "Custom menu development with Executive Chef Aaron Silverman",
      "Tailored wine pairings from our reserve cellar",
      "End-to-end event coordination and floral styling"
    ],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
  }
];

export const ACCOLADES: PressAccolade[] = [
  {
    quote: "Rose’s Luxury isn't just the best new restaurant in America; it is proof that world-class cooking and genuine, joyous hospitality can live in effortless harmony.",
    source: "Andrew Knowlton, Bon Appétit",
    award: "Best New Restaurant in America"
  },
  {
    quote: "An exuberantly original Capitol Hill destination where dishes defy easy categorization and consistently strike the bullseye of delight.",
    source: "The Michelin Guide",
    award: "One Michelin Star (Consecutive since 2017)"
  },
  {
    quote: "Silverman’s cooking creates pure euphoria. The warm potato bread alone will change how you think about comfort dining forever.",
    source: "Tom Sietsema, The Washington Post",
    award: "Four Stars (Highest Rating)"
  }
];

export const GOODWILL_DATA = {
  mealsDonated: "148,000+",
  partner: "DC Central Kitchen & World Food Program",
  pledge: "For every single guest who walks through our doors, Rose’s Luxury funds a nutritious meal for a child in need.",
  establishedYear: 2013,
  impactMessage: "Hospitality shouldn't end at our doorway. From day one, Chef Aaron Silverman committed to feeding our wider community with the exact same passion that fuels our dining room."
};

export const TIME_SLOTS = [
  { time: "5:00 PM", tag: "Early Seating" },
  { time: "5:30 PM", tag: "Golden Hour" },
  { time: "6:15 PM", tag: "Prime Dinner" },
  { time: "7:00 PM", tag: "Peak Candlelight" },
  { time: "7:45 PM", tag: "Peak Candlelight" },
  { time: "8:30 PM", tag: "Late Romance" },
  { time: "9:15 PM", tag: "Night Owl Pairing" }
];
