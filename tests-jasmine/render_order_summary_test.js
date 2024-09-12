import { generateCartHTML, add_HTML_to_page } from "../scripts/checkout_functions.js";
import { addToCart, cart } from "../scripts/cart.js";
/* This doesn't work because it is too convoluted
describe("generate_an_order_summary", () => {
    it("displays item after adding to cart", () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            //ensure local storage is empty
            return JSON.stringify([])
        });
        // ensure cart is empty
        cart.length = 0;

        // add event listener to button and add to the cart
        const button = document.querySelector(".js-add-to-cart");
        button.addEventListener("click", addToCart);
        // product should be added to cart after clicking the button right here
        button.click();

        // add a test div to display order summary results, addHTML_to_Page will
        // look for an order-summary div
        document.querySelector(".test-container").innerHTML = `<div class = "order-summary"></div>`

        const order_text = generateCartHTML(cart);
        add_HTML_to_page(order_text);

         // Ensure an item was added
        expect(cart.length).toBe(1);

        const expected_HTML = `<div class="cart-item-container">
            <div class="delivery-date">Delivery date: Wednesday, September 18</div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="http://127.0.0.1:5500/images/products/intermediate-composite-basketball.jpg">

              <div class="cart-item-details">
                <div class="product-name">Intermediate Size Basketball</div>
                <div class="product-price">$20.95</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">1</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-item_name="Intermediate Size Basketball">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked="" class="delivery-option-input" data-index="0" data-shipping_option="1" name="delivery-option-0">
                  <div>
                    <div class="delivery-option-date">Wednesday, September 18</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" data-index="0" data-shipping_option="2" name="delivery-option-0">
                  <div>
                    <div class="delivery-option-date">Saturday, September 14</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" data-index="0" data-shipping_option="3" name="delivery-option-0">
                  <div>
                    <div class="delivery-option-date">Thursday, September 12</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        // Ensure that the correct html was added to the page
        expect(document.querySelector(".order-summary").textContent).toContain(expected_HTML);

        //call fake version of local storage setItem
        spyOn(localStorage, 'setItem').and.callFake(() => {});
    });
});
*/