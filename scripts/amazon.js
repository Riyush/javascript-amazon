import {Product, add_div_to_page} from "./products.js";

// Initialize list of products
let products = [];

// create all products using constructor call to Product class
const black_and_gray_socks = new Product("Black and Gray Athletic Cotton Socks - 6 Pairs", 
    "images/products/athletic-cotton-socks-6-pairs.jpg", 4.5, 87, 1090);

const basketball = new Product("Intermediate Size Basketball", 
    "images/products/intermediate-composite-basketball.jpg", 4, 127, 2095);

const t_shirts_teal = new Product ("Adults Plain Cotton T-Shirt - 2 PackAdults Plain Cotton T-Shirt - 2 Pack", "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg", 4.5, 56, 799);

// add each product to our array
products.push(black_and_gray_socks);
products.push(basketball);
products.push(t_shirts_teal);

// Generate the HTML for each product and add it to the page
products.forEach((product) => {
    const product_div = product.generateHTML();
    add_div_to_page(product_div);
});

