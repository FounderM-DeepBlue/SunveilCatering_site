// Mock Data for the full application
import appleCheeseDanishImg from "@assets/generated_images/apple_cheese_danish.png";
import classicCheeseDanishImg from "@assets/generated_images/classic_cheese_danish.png";
import strawberryCheeseDanishImg from "@assets/generated_images/strawberry_cheese_danish.png";
import peachCobblerRollImg from "@assets/generated_images/peach_cobbler_cinnamon_rolls.png";
import zucchiniBreadImg from "@assets/generated_images/zucchini_bread.png";
import lemonPoppyImg from "@assets/generated_images/lemon_poppy_seed_bread.png";
import blueberryMuffinImg from "@assets/generated_images/blueberry_lavender_muffin.png";
import appleCupcakeImg from "@assets/generated_images/apple_upside_down_cupcakes.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unitType: 'dozen' | 'loaf';
  unitLabel: string;
  category: 'Danish' | 'Rolls' | 'Breads' | 'Muffins' | 'Cupcakes';
  tags: string[];
  isFeatured: boolean;
  image: string;
  cateringMinimum: number;
  cateringUnit: string;
}

export const products: Product[] = [
  {
    id: "apple-cheese-danish",
    name: "Apple Cheese Danish",
    description: "Flaky pastry layered with creamy cheese filling and cinnamon-spiced apple compote",
    price: 36,
    unitType: "dozen",
    unitLabel: "per dozen",
    category: "Danish",
    tags: ["Vegetarian"],
    isFeatured: false,
    image: appleCheeseDanishImg,
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  {
    id: "classic-cheese-danish",
    name: "Classic Cheese Danish",
    description: "Traditional Danish pastry with rich, sweet cream cheese center and light glaze",
    price: 32,
    unitType: "dozen",
    unitLabel: "per dozen",
    category: "Danish",
    tags: ["Vegetarian"],
    isFeatured: false,
    image: classicCheeseDanishImg,
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  {
    id: "strawberry-cheese-danish",
    name: "Strawberry Cheese Danish",
    description: "Buttery Danish swirled with cream cheese and topped with fresh strawberry preserves",
    price: 36,
    unitType: "dozen",
    unitLabel: "per dozen",
    category: "Danish",
    tags: ["Vegetarian"],
    isFeatured: false,
    image: strawberryCheeseDanishImg,
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  {
    id: "peach-cobbler-cinnamon-rolls",
    name: "Peach Cobbler Cinnamon Rolls",
    description: "Soft, pillowy cinnamon rolls loaded with Georgia peach filling and vanilla bean glaze",
    price: 42,
    unitType: "dozen",
    unitLabel: "per dozen",
    category: "Rolls",
    tags: ["Vegetarian", "Signature"],
    isFeatured: true,
    image: peachCobblerRollImg,
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  {
    id: "zucchini-bread",
    name: "Zucchini Bread",
    description: "Moist, tender loaf with fresh-grated zucchini, warm spices, and a hint of vanilla",
    price: 12,
    unitType: "loaf",
    unitLabel: "per loaf",
    category: "Breads",
    tags: ["Vegetarian", "Nut-Free Available"],
    isFeatured: true,
    image: zucchiniBreadImg,
    cateringMinimum: 3,
    cateringUnit: "loaves"
  },
  {
    id: "lemon-poppy-seed-bread",
    name: "Lemon Poppy Seed Bread",
    description: "Bright, citrus-forward loaf studded with poppy seeds and finished with lemon glaze",
    price: 12,
    unitType: "loaf",
    unitLabel: "per loaf",
    category: "Breads",
    tags: ["Vegetarian"],
    isFeatured: false,
    image: lemonPoppyImg,
    cateringMinimum: 3,
    cateringUnit: "loaves"
  },
  {
    id: "blueberry-lavender-muffin",
    name: "Blueberry Lavender Muffin",
    description: "Tender muffin bursting with fresh blueberries and subtle culinary lavender, topped with sugar crystals",
    price: 36,
    unitType: "dozen",
    unitLabel: "per dozen",
    category: "Muffins",
    tags: ["Vegetarian", "Signature"],
    isFeatured: true,
    image: blueberryMuffinImg,
    cateringMinimum: 2,
    cateringUnit: "dozen"
  },
  {
    id: "apple-upside-down-cupcakes",
    name: "Apple Upside Down Cupcakes",
    description: "Caramelized apple topping over spiced cupcake with brown butter frosting",
    price: 42,
    unitType: "dozen",
    unitLabel: "per dozen",
    category: "Cupcakes",
    tags: ["Vegetarian"],
    isFeatured: false,
    image: appleCupcakeImg,
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
    products: ["peach-cobbler-cinnamon-rolls", "zucchini-bread", "blueberry-lavender-muffin"],
    coords: [33.7077, -84.3640] as [number, number]
  },
  {
    id: "loc_east_lake",
    name: "East Lake Farmers Market",
    type: "Market",
    address: "2nd & Hosea, Atlanta, GA",
    hours: "Saturdays 8am-12pm",
    phone: "",
    products: ["apple-cheese-danish", "classic-cheese-danish", "zucchini-bread"],
    coords: [33.7487, -84.3129] as [number, number]
  },
  {
    id: "loc_grant_park",
    name: "Grant Park Market",
    type: "Grocery",
    address: "519 Memorial Dr SE, Atlanta, GA 30312",
    hours: "Daily 8am-9pm",
    phone: "(555) 987-6543",
    products: ["zucchini-bread", "lemon-poppy-seed-bread"],
    coords: [33.7466, -84.3725] as [number, number]
  }
];
