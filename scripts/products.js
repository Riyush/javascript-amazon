/*
This file contains all the code to create products, generate their corresponding html, and add them to the page.
All the data is created and manipulated with these functions in the amazon.js file. 
*/

class Product{
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

          <div class="product-price">${(this.priceCents / 100).toFixed(2)}</div>

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

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary">Add to Cart</button>
        </div>
          `
        return final_div

    }
}
function add_div_to_page(div_content){
    let grid_element = document.querySelector(".products-grid");
    grid_element.innerHTML += div_content;
}

// Export the Product class
export {Product, add_div_to_page}