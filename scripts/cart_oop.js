
let cart = {
    cartItems: undefined,
    quantity: undefined,
    loadFromStorage() {
        if (localStorage.getItem("cart-oop") === null) {
            this.cartItems = [];
        }
        else {
            this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));
        }
        if (localStorage.getItem("quantity-oop") === null) {
            this.quantity = 0;
        }
        else {
            this.quantity = JSON.parse(localStorage.getItem("quantity-oop"));
        }
        // Expose cart to the global scope
        window.cart = this.cartItems;
        window.quantity = this.quantity;

    },
    saveToStorage () {
        localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
        localStorage.setItem("quantity-oop", JSON.stringify("quantity-oop", this.quantity));
    },
    addtoCart(event) {
        //Locate the button that was clicked
        const buttonClicked = event.target;

        // Find the closest parent .product-container div
        const productContainer = buttonClicked.closest('.product-container');
        
        // Call the function to start Item Added animation
        this.itemAddedAnimation(productContainer.querySelector('.added-to-cart'));

        // Get product Information
        const product_name = productContainer.querySelector('.product-name').innerHTML.trim();

        // Get product_quantity
        let product_quantity = productContainer.querySelector('.product-quantity-container select').value;

        // check if product is already in the cart
        let existingProduct = this.cartItems.find(item => item.name === product_name);
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
            this.cartItems.push(product);
        }
        
        // update global quantity variable
        this.quantity += parseInt(product_quantity);

        // Update the global `window.quantity in addition to the local variable
        window.quantity = this.quantity;

        //update quantity variable on UI
        this.renderCart(this.quantity);
    },
    renderCart(quantity){
        document.querySelector(".cart-quantity").innerHTML = quantity;
    },
    updateShipping(event){
        // Get the clicked element
    const clickedElement = event.target;

    // Extract the data attributes
    const index = clickedElement.dataset.index; // Gets the value of data-index
    const shippingOption = clickedElement.dataset.shipping_option; // Gets the value of data-shipping_option

    // Update shipping value in cart
    switch (shippingOption){
        case '1':
            this.cartItems[index].shipping_cost = 0;
            break;
        case '2':
            this.cartItems[index].shipping_cost = 499;
            break;
        case '3':
            this.cartItems[index].shipping_cost = 999;
            break;
    };
    },
    deleteCartItem(eventTarget) {
        const productName = eventTarget.dataset.item_name;
        // Find the index of the product with the specified name
        const index = this.cartItems.findIndex(product => product.name === productName);
        this.quantity -= Number(cart[index].quantity);
        this.cartItems.splice(index, 1);
    },
    renderCart(new_quantity){
        document.querySelector(".cart-quantity").innerHTML = new_quantity;
    },
    itemAddedAnimation(added_div) {
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
    },
}


export {cart}