/* 
This file creates all the logic needed to properly manage the cart which persists as the user is on the page.
NOTE: I added cart to the global window context, so that I can view the cart directly in my browser.
*/
// Load the cart

let cart;
if (localStorage.getItem("cart") === null){
    cart = [];
}
else{
    cart = JSON.parse(localStorage.getItem("cart"));
}

// Expose cart to the global scope
window.cart = cart;

// Load the quantity variable
let quantity;
if (localStorage.getItem("quantity") === null){
    quantity = 0;
}
else{
    quantity = JSON.parse(localStorage.getItem("quantity"));
}

// Expose quantity to the global scope
window.quantity = quantity;

function addToCart(event){
    //Locate the button that was clicked
    const buttonClicked = event.target;

    // Find the closest parent .product-container div
    const productContainer = buttonClicked.closest('.product-container');
    
    // Call the function to start Item Added animation
    itemAddedAnimation(productContainer.querySelector('.added-to-cart'));

    // Get product Information
    const product_name = productContainer.querySelector('.product-name').innerHTML.trim();

    // Get product_quantity
    let product_quantity = productContainer.querySelector('.product-quantity-container select').value;

    // check if product is already in the cart
    let existingProduct = cart.find(item => item.name === product_name);
    if (existingProduct) {
        existingProduct.quantity = parseInt(existingProduct.quantity) + parseInt(product_quantity);
    }
    else{
        const product_picture = productContainer.querySelector('.product-image').src;
        const product_price = productContainer.querySelector('.product-price').innerHTML;

        // Step 1: Remove price dollar sign
        const priceWithoutDollar = product_price.replace('$', '');

        // Step 2: Convert to a floating-point number
        const priceInDollars = parseFloat(priceWithoutDollar);

        // Step 3: Convert to cents
        const priceInCents = Math.round(priceInDollars * 100);

        //create shipping amount
        let shipping = 0;
        
        // create product
        let product = {
            name: product_name,
            picture: product_picture,
            price: priceInCents,
            quantity: product_quantity,
            shipping_cost: shipping,
        }
        // Add product to cart
        cart.push(product);
    }
    
    // update global quantity variable
    quantity += parseInt(product_quantity);

    // Update the global `window.quantity in addition to the local variable
    window.quantity = quantity;

    //update quantity variable on UI
    renderCart(quantity);

    //save cart
    localStorage.setItem("cart", JSON.stringify(cart));
    // save quantity
    localStorage.setItem("quantity", JSON.stringify(quantity));
}

//function to update cart during checkout
function updateCartQuantity(event){
    
}

//funciton to deletet cart items from order
function deleteCartItem(eventTarget){
    const productName = eventTarget.dataset.item_name;
    // Find the index of the product with the specified name
    const index = cart.findIndex(product => product.name === productName);
    console.log(cart);
    console.log(index);
    quantity -= Number(cart[index].quantity);
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    localStorage.setItem("quantity", JSON.stringify(quantity));

}

//function to change UI cart quantity
function renderCart(new_quantity){
    document.querySelector(".cart-quantity").innerHTML = new_quantity;
}

//function to create Added Animation
function itemAddedAnimation(added_div){
    added_div.style.opacity = 1;
    //pause for a second
    setTimeout(() => {
         //gradually bring opacity back to 0
    const intervalID = setInterval(()=>{
        let currentOpacity = parseFloat(added_div.style.opacity);
        if (currentOpacity <= 0) {
            // Stop the interval when opacity is 0 or less
            clearInterval(intervalID);
            added_div.style.opacity = 0; // Ensure opacity is exactly 0
        }
        else {
            // Decrease opacity
            added_div.style.opacity = (currentOpacity - 0.05).toFixed(2);
        }
    }, 100)
    }
    // this is the code that actually makes it pause
    , 1000);
   
}

export {addToCart, cart, quantity, updateCartQuantity, renderCart, deleteCartItem}


// Product characteristics: image_src. name, unit_cost, quantity_purchased