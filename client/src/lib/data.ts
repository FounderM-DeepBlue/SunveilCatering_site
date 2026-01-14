// Mock Data for the full application
import sabaayadImg from "@assets/generated_images/sabaayad_flatbread.png";
import buskudImg from "@assets/generated_images/buskud_biscuits.png";
import zucchiniImg from "@assets/generated_images/sliced_zucchini_bread.png";
import bananaImg from "@assets/generated_images/golden_banana_nut_bread.png";
import cranberryImg from "@assets/generated_images/cranberry_orange_bread.png";
import lemonImg from "@assets/generated_images/lemon_poppy_seed_bread.png";
import blueberryImg from "@assets/generated_images/blueberry_muffin_with_sugar_crust.png";
import morningGloryImg from "@assets/generated_images/morning_glory_muffin.png";
import cheeseDanishImg from "@assets/generated_images/cheese_danish.png";
import cinnamonRollImg from "@assets/generated_images/cinnamon_roll.png";
import butterCroissantImg from "@assets/generated_images/butter_croissant.png";
import chocCroissantImg from "@assets/generated_images/chocolate_croissant.png";
import malawahImg from "@assets/generated_images/malawah.png";
import cambuuloImg from "@assets/generated_images/cambuulo.png";
import roseDanishImg from "@assets/generated_images/cardamom_rose_danish.png";
import spicedBananaImg from "@assets/generated_images/somali_spiced_banana_bread.png";

export const products = [
  // Breads & Muffins
  { 
    id: "prod_zucchini", 
    name: "Zucchini Bread", 
    somaliName: null, 
    price: 28, 
    category: "Breads", 
    image: zucchiniImg, 
    desc: "Moist loaf with visible zucchini shreds, spiced with cinnamon and nutmeg.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_banana", 
    name: "Banana Nut Bread", 
    somaliName: null, 
    price: 28, 
    category: "Breads", 
    image: bananaImg, 
    desc: "Classic golden brown loaf loaded with walnuts and ripe bananas.",
    tags: ["Vegetarian", "Contains Nuts"]
  },
  { 
    id: "prod_cranberry", 
    name: "Cranberry Orange Bread", 
    somaliName: null, 
    price: 28, 
    category: "Breads", 
    image: cranberryImg, 
    desc: "Vibrant citrus zest meets tart cranberry jewels in this sweet loaf.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_lemon", 
    name: "Lemon Poppy Seed Bread", 
    somaliName: null, 
    price: 28, 
    category: "Breads", 
    image: lemonImg, 
    desc: "Bright, glazed top with poppy seeds throughout. A zesty favorite.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_blueberry", 
    name: "Blueberry Muffin", 
    somaliName: null, 
    price: 32, 
    category: "Muffins", 
    image: blueberryImg, 
    desc: "Bursting with fresh blueberries and topped with a sugar crust.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_morning", 
    name: "Morning Glory Muffin", 
    somaliName: null, 
    price: 32, 
    category: "Muffins", 
    image: morningGloryImg, 
    desc: "Hearty start to the day with carrots, raisins, coconut, and nuts.",
    tags: ["Vegetarian", "Contains Nuts"]
  },

  // Danish & Rolls
  { 
    id: "prod_cheese_danish", 
    name: "Cheese Danish", 
    somaliName: null, 
    price: 35, 
    category: "Pastries", 
    image: cheeseDanishImg, 
    desc: "Flaky pastry layers with a sweet, glistening cream cheese center.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_cinnamon", 
    name: "Cinnamon Roll", 
    somaliName: null, 
    price: 36, 
    category: "Pastries", 
    image: cinnamonRollImg, 
    desc: "Soft dough swirled with cinnamon sugar and topped with cream cheese frosting.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_croissant", 
    name: "Butter Croissant", 
    somaliName: null, 
    price: 30, 
    category: "Pastries", 
    image: butterCroissantImg, 
    desc: "Classic French technique. Golden, shattered flaky layers.",
    tags: ["Vegetarian"]
  },
  { 
    id: "prod_choc_croissant", 
    name: "Chocolate Croissant", 
    somaliName: null, 
    price: 34, 
    category: "Pastries", 
    image: chocCroissantImg, 
    desc: "Dark chocolate batons wrapped in buttery, flaky pastry dough.",
    tags: ["Vegetarian"]
  },

  // Somali Specialties
  { 
    id: "prod_sabaayad", 
    name: "Somali Flatbread", 
    somaliName: "Sabaayad", 
    price: 24, 
    category: "Somali Specialties", 
    image: sabaayadImg, 
    desc: "Flaky, multi-layered flatbread pan-fried to golden perfection.",
    tags: ["Vegetarian", "Halal"]
  },
  { 
    id: "prod_buskud", 
    name: "Cardamom Biscuits", 
    somaliName: "Buskud", 
    price: 24, 
    category: "Somali Specialties", 
    image: buskudImg, 
    desc: "Buttery, crumbly biscuits infused with aromatic cardamom.",
    tags: ["Vegetarian", "Halal"]
  },
  { 
    id: "prod_malawah", 
    name: "Sweet Crepe", 
    somaliName: "Malawah", 
    price: 24, 
    category: "Somali Specialties", 
    image: malawahImg, 
    desc: "Delicate, honeycomb-textured sweet crepe, perfect with tea.",
    tags: ["Vegetarian", "Halal"]
  },
  { 
    id: "prod_cambuulo", 
    name: "Sweet Bean Dish", 
    somaliName: "Cambuulo", 
    price: 20, 
    category: "Somali Specialties", 
    image: cambuuloImg, 
    desc: "Traditional comfort dish of azuki beans and corn with butter and sugar.",
    tags: ["Vegetarian", "Halal", "Gluten-Free"]
  },

  // Fusion
  { 
    id: "prod_rose_danish", 
    name: "Cardamom Rose Danish", 
    somaliName: null, 
    price: 38, 
    category: "Fusion", 
    image: roseDanishImg, 
    desc: "Elegant danish pastry infused with rose water and cardamom.",
    tags: ["Vegetarian", "Halal"]
  },
  { 
    id: "prod_spiced_banana", 
    name: "Somali Spiced Banana Bread", 
    somaliName: null, 
    price: 30, 
    category: "Fusion", 
    image: spicedBananaImg, 
    desc: "Our classic banana bread spiced with Xawaash blend.",
    tags: ["Vegetarian", "Halal"]
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
    products: ["prod_sabaayad", "prod_buskud", "prod_blueberry", "prod_zucchini"],
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
    products: ["prod_banana", "prod_buskud", "prod_cinnamon"],
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
    products: ["prod_sabaayad", "prod_croissant", "prod_malawah"],
    lat: 33.8095,
    lng: -84.2428
  }
];
