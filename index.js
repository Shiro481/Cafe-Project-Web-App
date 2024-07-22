
import { products } from "./products.js";
import {orders} from "./orders.js";

let productHTML = '';
products.forEach((product) => {

  productHTML += `
    <div class="food-card-interior">
        <img src="${product.image}" class="food-image">
        <p class="js-food-name">${product.name}</p>
        <p type="number" class="js-food-price">$${product.price}</p>
        <div class="add-button-container">
          <button class="js-add-button" data-product-name="${product.name}" data-product-price="${product.price}">Add</button>
        </div>
      </div>
  `;
});

document.querySelector('.js-food-card-container').innerHTML = productHTML;

document.querySelectorAll('.js-add-button').forEach((button) => {
  button.addEventListener('click', ()=>{
    let productName = button.dataset.productName;
    let productPrice = button.dataset.productPrice;

    let sameProduct;

    orders.forEach((product) =>{
      if (productName === product.productName){
        sameProduct = product;
      };
    });

    if (sameProduct){

      sameProduct.quantity ++;
    }
    else{
      orders.push({
        productName: productName,
        productPrice: Number(productPrice),
        quantity: 1
      });
    };

    let ordersHTML = '';

    orders.forEach((item)=> {
    
      ordersHTML += `<div class="food-order-container">
              <div class="food-order-container-interior">
                <p class="js-food-name">${item.productName}</p>
                <div class="food-quantifier">
                  <i class="fa-solid fa-circle-minus"></i>
                  <p class="js-counter">${item.quantity}</p>
                  <i class="fa-solid fa-circle-plus"></i>
                </div>
                <p class="js-food-price">$${item.productPrice}</p>
              </div>
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
    `;
    });
    
    document.querySelector('.js-order-container').innerHTML = ordersHTML;


  });
});

function addQuantity(orders){
  orders.forEach()
}
