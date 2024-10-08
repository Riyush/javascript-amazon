/*
This file contains all the code to create products, generate their corresponding html, and add them to the page.
NOTE: This produce is not he same product object used to add items to the cart.
This is only for displaying products to page html. product objects are described
differently in the cart.
All the data is created and manipulated with these functions in the amazon.js file. 
*/

class Product{
    name;
    img_src;
    rating;
    numRatings;
    priceCents;

    constructor(name, img_src, rating, numRatings, priceCents){
        this.name = name;
        this.img_src = img_src;
        this.rating = rating;
        this.numRatings = numRatings;
        this.priceCents = priceCents;
    }
    generateHTML(){
        const final_div = `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${this.img_src}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${this.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${this.rating * 10}.png"
            />
            <div class="product-rating-count link-primary">${this.numRatings}</div>
          </div>

          <div class="product-price">$${(this.priceCents / 100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${this.extraInfoHTML()}
          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>
          
          <button class="add-to-cart-button button-primary js-add-to-cart">Add to Cart</button>
          
        </div>
          `
        return final_div

    }
    extraInfoHTML() {
        return ""
    }
}
function add_div_to_page(div_content){
    let grid_element = document.querySelector(".products-grid");
    grid_element.innerHTML += div_content;
}

class Clothing extends Product{   
    sizeChartLink;
    constructor(name, img_src, rating, numRatings, priceCents, sizeChartLink) {
        // Call the parent constructor with the necessary properties
        super(name, img_src, rating, numRatings, priceCents);
        
        // Initialize additional properties
        this.sizeChartLink = sizeChartLink;
    };
    extraInfoHTML () {
        return `
        <a href = "${this.sizeChartLink}" target = "_blank">Size</a>`;
    }
}
// Example usage
const productDetails = {
    name: "T-Shirt",
    img_src: "tshirt.jpg",
    rating: 4.5,
    numRatings: 200,
    priceCents: 1999,
    sizeChartLink: "sizechart.com/tshirt"
};

const example = new Clothing(productDetails);

console.log(example);
// Export the Product class
export {Product, Clothing, add_div_to_page}