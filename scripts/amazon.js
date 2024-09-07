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

// add each product to our array
products.push(black_and_gray_socks);
products.push(basketball);
products.push(t_shirts_teal);
products.push(toaster);
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
