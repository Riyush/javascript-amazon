
// Function to generate the cart html using the cart array defined in cart.js
function generateCartHTML(user_cart){
    let cartHTML = "";
    user_cart.forEach((product_obj, index) => {
        let product_section = `<div class="cart-item-container">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="${product_obj.picture}">

              <div class="cart-item-details">
                <div class="product-name">${product_obj.name}</div>
                <div class="product-price">$${(product_obj.price / 100).toFixed(2)}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${product_obj.quantity}</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked="" class="delivery-option-input" data-index="${index}" data-shipping_option = "1" name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" data-index="${index}" data-shipping_option = "2" name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" data-index="${index}" data-shipping_option = "3" name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        cartHTML += product_section;
    }
);
return cartHTML;
}

// Function to add cart cartHTML to page
function add_HTML_to_page(carthtml){
const summary_container = document.querySelector(".order-summary");
summary_container.innerHTML = carthtml;
}

// Function to calculate total cart price
// NOTE: Everything is in cents, will format when generating HTML
function calculateCostBreakdown(user_cart){
    let cost_breakdown = {
        gross_cost: 0,
        shipping_cost: 0,
        total_before_tax: 0,
        tax: 0,
        order_total: 0,
    }
    user_cart.forEach((product) => {
        cost_breakdown.gross_cost += product.price * product.quantity;
        cost_breakdown.shipping_cost += product.shipping_cost;
    });
    cost_breakdown.total_before_tax = cost_breakdown.gross_cost + cost_breakdown.shipping_cost;
    cost_breakdown.tax = Math.round(0.1 * cost_breakdown.total_before_tax);
    cost_breakdown.order_total = cost_breakdown.total_before_tax + cost_breakdown.tax;

    return cost_breakdown;
}

// Function to generate HTML for order breakdown
function generateOrderHTML(cost_breakdown, quantity_purchased) {
    const Order_HTML = `<div class="js-payment-info">
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${quantity_purchased}):</div>
        <div class="payment-summary-money" data-testid="product-cost">
          $${(cost_breakdown.gross_cost / 100).toFixed(2)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money" data-testid="shipping-cost">
          $${(cost_breakdown.shipping_cost/100).toFixed(2)}
        </div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money" data-testid="sub-total">
          $${(cost_breakdown.total_before_tax /100).toFixed(2)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money" data-testid="tax-cost">
          $${(cost_breakdown.tax / 100).toFixed(2)}
        </div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money" data-testid="total-cost">
          $${(cost_breakdown.order_total/100).toFixed(2)}
        </div>
      </div>
    </div>

      <div class="paypal-toggle">
        Use PayPal <input type="checkbox" class="js-paypal-toggle" false="">
      </div>

      <div class="js-payment-buttons-container false" data-testid="payment-buttons-container">

        <div class="js-paypal-button-container paypal-button-container" data-testid="paypal-button-container"></div>

        <button class="js-place-order-button place-order-button button-primary" data-testid="place-order-button">
          Place your order
        </button>
      </div>`;

    document.querySelector(".payment-summary").innerHTML = Order_HTML;
}


// Function to handle toggleing of shipping cost.
// This will change the shipping atttribute in cart and recalculate order breakdown
function updateShipping(user_cart, event) {
    // Get the clicked element
    const clickedElement = event.target;

    // Extract the data attributes
    const index = clickedElement.dataset.index; // Gets the value of data-index
    const shippingOption = clickedElement.dataset.shipping_option; // Gets the value of data-shipping_option

    // Update shipping value in cart
    console.log(typeof shippingOption);
    console.log(index);
    switch (shippingOption){
        case '1':
            user_cart[index].shipping_cost = 0;
            break;
        case '2':
            console.log("here");
            user_cart[index].shipping_cost = 499;
            break;
        case '3':
            user_cart[index].shipping_cost = 999;
            break;
    };
    console.log(user_cart);
}
export {generateCartHTML, add_HTML_to_page, calculateCostBreakdown, generateOrderHTML, updateShipping}