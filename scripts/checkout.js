import {cart, quantity, updateCartQuantity, deleteCartItem, updateShipping} from "./cart.js";
import {generateCartHTML, add_HTML_to_page, calculateCostBreakdown, generateOrderHTML} from "./checkout_functions.js";


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
