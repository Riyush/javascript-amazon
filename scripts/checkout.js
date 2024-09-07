import {cart, quantity, updateCartQuantity} from "./cart.js";
import {generateCartHTML, add_HTML_to_page, calculateCostBreakdown, generateOrderHTML, updateShipping} from "./checkout_functions.js";

const order_summary_html = generateCartHTML(cart);

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
        // Recalculate the cost breakdown, and reload the order summary on the page.
        const order_summary = calculateCostBreakdown(cart);
        //display new order summary to page.
        generateOrderHTML(order_summary, quantity);
    })
});
