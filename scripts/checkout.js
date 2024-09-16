import {cart, quantity, updateCartQuantity, deleteCartItem, updateShipping} from "./cart.js";
import {generateCartHTML, add_HTML_to_page, calculateCostBreakdown, generateOrderHTML} from "./checkout_functions.js";
import { addOrder, orders } from "./orders.js";
//import "./backend-practice.js";


let order_summary_html = generateCartHTML(cart);

add_HTML_to_page(order_summary_html);

const order_summary = calculateCostBreakdown(cart);
generateOrderHTML(order_summary, quantity);

// Add the right event listeners to the shipping toggle buttons.
const input_boxes = document.querySelectorAll(".delivery-option-input");

// add event listeners, upon changing sequences, initiate control flow
// of functions to update shipping
input_boxes.forEach((input_box_html) =>{
    input_box_html.addEventListener("click", (event) => {
        //change value in cart
        updateShipping(cart, event);
        // Reload the page
        window.location.reload();
    })
});

// Add event listeners to the update quantity buttons
document.querySelectorAll(".js-delete-link").forEach((updateText) => {
    updateText.addEventListener("click", (event) => {
        deleteCartItem(event.target);
        window.location.reload();
    })
})

// Add code to make place order button interactive
const button = document.querySelector(".js-place-order-button");
/*
I NEED TO ADD CODE that converts the current cart into a format that is readable
by the backend.
*/
button.addEventListener("click", async () => {
    let order;
    try{
    const response = await fetch('https://supersimplebackend.dev/orders',{
        method:"POST", 
        headers:{
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify({
            cart: cart,
        })
    });
    order = await response.json();
}catch(error){
    console.log(error);
    order = "test_order";
}
    addOrder('test');
    window.location.href = "orders.html"
})