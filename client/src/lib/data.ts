// Mock Data for the full application
import appleCheeseDanishImg from "@assets/stock_images/apple_cheese_danish__a562590c.jpg";
import classicCheeseDanishImg from "@assets/stock_images/classic_cheese_danis_a21a4764.jpg";
import strawberryCheeseDanishImg from "@assets/stock_images/strawberry_cheese_da_2e7f0a23.jpg";
import peachCobblerRollImg from "@assets/stock_images/peach_cobbler_cinnam_9a211a17.jpg";
import zucchiniImg from "@assets/stock_images/sliced_zucchini_brea_15863cce.jpg";
import lemonPoppyImg from "@assets/stock_images/lemon_poppy_seed_loa_e95dbf7e.jpg";
import blueberryMuffinImg from "@assets/stock_images/blueberry_lavender_m_c119bcb4.jpg";
import appleCupcakeImg from "@assets/stock_images/apple_upside_down_cu_a937e3ed.jpg";

export const products = [
  // Breads (Loaves)
  { 
    id: "prod_zucchini", 
    name: "Zucchini Bread", 
    somaliName: null, 
    price: 18, 
    category: "Breads", 
    image: zucchiniImg, 
    desc: "Moist loaf with visible zucchini shreds, spiced with cinnamon and nutmeg.",
    tags: ["Vegetarian", "Loaf Only"],
    unit: "loaf",
    cateringMinimum: 3,
    cateringUnit: "loaves"
  },
  { 
    id: "prod_lemon", 
    name: "Lemon Poppy Seed Bread", 
    somaliName: null, 
    price: 18, 
    category: "Breads", 
    image: lemonPoppyImg, 
    desc: "Bright, glazed top with poppy seeds throughout. A zesty favorite.",
    tags: ["Vegetarian", "Loaf Only"],
    unit: "loaf",
    cateringMinimum: 3,
    cateringUnit: "loaves"
  },

  // Muffins & Cupcakes
  { 
    id: "prod_blueberry", 
    name: "Blueberry Lavender Muffin", 
    somaliName: null, 
    price: 32, 
    category: "Muffins", 
    image: blueberryMuffinImg, 
    desc: "Bursting with fresh blueberries and infused with delicate lavender.",
    tags: ["Vegetarian"],
    unit: "dozen",
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  { 
    id: "prod_apple_cupcake", 
    name: "Apple Upside Down Cupcakes", 
    somaliName: null, 
    price: 30, 
    category: "Cupcakes", 
    image: appleCupcakeImg, 
    desc: "Caramelized apple topping on a moist spiced cake base.",
    tags: ["Vegetarian"],
    unit: "dozen",
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },

  // Danish & Rolls
  { 
    id: "prod_apple_danish", 
    name: "Apple Cheese Danish", 
    somaliName: null, 
    price: 35, 
    category: "Danish", 
    image: appleCheeseDanishImg, 
    desc: "Flaky pastry filled with sweet cream cheese and spiced apples.",
    tags: ["Vegetarian"],
    unit: "dozen",
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  { 
    id: "prod_classic_danish", 
    name: "Classic Cheese Danish", 
    somaliName: null, 
    price: 35, 
    category: "Danish", 
    image: classicCheeseDanishImg, 
    desc: "Traditional flaky pastry with a rich, smooth cream cheese center.",
    tags: ["Vegetarian"],
    unit: "dozen",
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  { 
    id: "prod_strawberry_danish", 
    name: "Strawberry Cheese Danish", 
    somaliName: null, 
    price: 35, 
    category: "Danish", 
    image: strawberryCheeseDanishImg, 
    desc: "Our classic cheese danish topped with fresh strawberry glaze.",
    tags: ["Vegetarian"],
    unit: "dozen",
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  { 
    id: "prod_peach_roll", 
    name: "Peach Cobbler Cinnamon Rolls", 
    somaliName: null, 
    price: 36, 
    category: "Rolls", 
    image: peachCobblerRollImg, 
    desc: "Soft cinnamon rolls topped with peaches and cobbler crumble.",
    tags: ["Vegetarian"],
    unit: "dozen",
    cateringMinimum: 2,
    cateringUnit: "dozen"
  }
];

export const locations = [
  {
    id: "loc_black_coffee",
    name: "Black Coffee Company",
    type: "Coffee Shop",
    address: "1800 Jonesboro Rd SE, Atlanta, GA 30315",
    hours: "Mon-Sat 7am-4pm",
    phone: "(555) 123-4567",
    products: ["prod_apple_danish", "prod_blueberry", "prod_zucchini"],
    lat: 33.7083,
    lng: -84.3733
  },
  {
    id: "loc_east_lake",
    name: "East Lake Farmers Market",
    type: "Market",
    address: "2nd & Hosea, Atlanta, GA",
    hours: "Saturdays 8am-12pm",
    phone: "",
    products: products.map(p => p.id), // All products
    lat: 33.7486,
    lng: -84.3094
  },
  {
    id: "loc_grant_park",
    name: "Grant Park Market",
    type: "Grocery",
    address: "519 Memorial Dr SE, Atlanta, GA 30312",
    hours: "Daily 8am-9pm",
    phone: "(555) 987-6543",
    products: ["prod_peach_roll", "prod_lemon", "prod_classic_danish"],
    lat: 33.7466,
    lng: -84.3734
  },
  {
    id: "loc_refuge",
    name: "Refuge Coffee Co.",
    type: "Coffee Shop",
    address: "4170 E Ponce de Leon Ave, Clarkston, GA 30021",
    hours: "Mon-Sat 7am-6pm",
    phone: "(404) 555-0123",
    products: ["prod_strawberry_danish", "prod_apple_cupcake"],
    lat: 33.8095,
    lng: -84.2428
  }
];

