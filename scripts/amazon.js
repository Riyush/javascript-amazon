import {Product, add_div_to_page} from "./products.js";
// Javacript will inherit the entire context of the cart.js file including
// The cart variable, other helper ffunction, etc. Therefore, I only have to
// directly import the addtoCart ufnction which must be called by this file.
// All of its dependencies are already handled.
import {addToCart, renderCart} from "./cart.js";
// Initialize list of products
let products = [];

// create all products using constructor call to Product class
const black_and_gray_socks = new Product("Black and Gray Athletic Cotton Socks - 6 Pairs", 
    "images/products/athletic-cotton-socks-6-pairs.jpg", 4.5, 87, 1090);

const basketball = new Product("Intermediate Size Basketball", 
    "images/products/intermediate-composite-basketball.jpg", 4, 127, 2095);

const t_shirts_teal = new Product ("Adults Plain Cotton T-Shirt - 2 Pack", "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg", 4.5, 56, 799);

const toaster = new Product ("2 Slot Toaster - Black", "images/products/black-2-slot-toaster.jpg", 5, 2197, 1899 );

const plates = new Product("6 Piece White Dinner Plate Set", "images/products/6-piece-white-dinner-plate-set.jpg", 4, 37, 2067);
const baking_set = new Product("6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set", "images/products/6-piece-non-stick-baking-set.webp", 4.5, 175, 3499);
const sweat = new Product("Plain Hooded Fleece Sweatshirt", "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg", 4.5, 317, 2400);
const lux_towel = new Product("Luxury Towel Set - Graphite Gray", "images/products/variations/luxury-tower-set-4-piece.jpg", 4.5, 144, 3599);
const detergent = new Product("Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz", "images/products/variations/liquid-laundry-detergent-lavender.jpg", 4.5, 305, 2899);
const gray_sneaks = new Product("Waterproof Knit Athletic Sneakers - Gray", "images/products/knit-athletic-sneakers-gray.jpg", 4, 89, 3390);
const cotton_beachware = new Product("Women's Chiffon Beachwear Cover Up - Black", "images/products/women-chiffon-beachwear-coverup-black.jpg", 4.5, 235, 2070);
const sunglasses = new Product("Round Sunglasses", "images/products/variations/round-sunglasses-black.jpg", 4.5, 30, 1560);
/*
const tan_sandals = new Product("", "", , , );
const curtains = new Product("", "", , , );
const summ_shorts = new Product("", "", , , );
const water_kettle = new Product("", "", , , );
const tissue_box = new Product("", "", , , );
const sun_hat = new Product("", "", , , );
const earrings = new Product("", "", , , );
const hoodie = new Product("", "", , , );
const rug_mat = new Product("", "", , , );
const ballet_flat = new Product("", "", , , );
const polo_t = new Product("", "", , , );
const trash_can = new Product("", "", , , );
const zipper_closure = new Product("", "", , , );
const beanie_hat = new Product("", "", , , );
const pleated_pants = new Product("", "", , , );
const sneakers = new Product("", "", , , );
const nav_sunglasses = new Product("", "", , , );
const kitchen_utensils = new Product("", "", , , );
const chrome_mirror = new Product("", "", , , );
const sweatpants = new Product("", "", , , );
const gold_earrings = new Product("", "", , , );
const food_containers = new Product("", "", , , );
const coffeemaker = new Product("", "", , , );
const black_curtains = new Product("", "", , , );
const bath_towels = new Product("", "", , , );
const pink_sneaks = new Product("", "", , , );
const blender = new Product("", "", , , );
const bowl_set = new Product("", "", , , );
const paper_towels = new Product("", "", , , );
const red_sweatshirt = new Product("", "", , , );
*/
// add each product to our array
products.push(black_and_gray_socks);
products.push(basketball);
products.push(t_shirts_teal);
products.push(toaster);
products.push(plates);
products.push(baking_set);
products.push(sweat);
products.push(lux_towel);
products.push(gray_sneaks);
products.push(detergent);
products.push(cotton_beachware);
products.push(sunglasses);
// Generate the HTML for each product and add it to the page
products.forEach((product) => {
    const product_div = product.generateHTML();
    add_div_to_page(product_div);
});

// Add event listeners to each product that call the addtoCart function upon click
document.querySelectorAll(".js-add-to-cart").forEach((buttonElem)=>{
    buttonElem.addEventListener("click", addToCart);
    });

// Initially set cartQuantity in UI
renderCart(quantity);
