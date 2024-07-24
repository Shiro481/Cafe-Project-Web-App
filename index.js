import { products } from "./products.js";

let orders = [];
let snacksCategory = [];
let drinksCategory = [];
let mealsCategory = [];
let desertCategory = [];

function displayAll(products) {
  let productHTML = '';

  snacksCategory.length = 0;
  drinksCategory.length = 0;
  mealsCategory.length = 0;
  desertCategory.length = 0;
  
  products.forEach((product) => {
    productHTML += `
      <div class="food-card-interior">
        <img src="${product.image}" class="food-image">
        <p class="js-food-name">${product.name}</p>
        <p class="js-food-price">$${product.price}</p>
        <div class="add-button-container">
          <button class="js-add-button" data-product-name="${product.name}" data-product-price="${product.price}">Add</button>
        </div>
      </div>
    `;
    switch (product.category) {
      case 'Snacks':
        snacksCategory.push(product);
        break;
      case 'Drinks':
        drinksCategory.push(product);
        break;
      case 'Meals':
        mealsCategory.push(product);
        break;
      case 'Deserts':
        desertCategory.push(product);
        break;
    }
  });
  document.querySelector('.js-food-card-container').innerHTML = productHTML;
  addButton();  // Add event listeners to buttons
}

function addButton() {
  document.querySelectorAll('.js-add-button').forEach((button) => {
    button.addEventListener('click', () => {
      let productName = button.dataset.productName;
      let productPrice = Number(button.dataset.productPrice);  // Convert to number
      let sameProduct = orders.find(product => product.productName === productName);

      if (sameProduct) {
        sameProduct.quantity++;
      } else {
        orders.push({
          productName: productName,
          productPrice: productPrice,
          quantity: 1
        });
      }
      displayOrder();
        // Update the displayed order
    });
  });
}

function displayOrder() {
  let itemQuantity = 0;
  let ordersHTML = '';
  let orderContainer = document.querySelector('.js-order-container');

  orders.forEach((item) => {
    ordersHTML += `
      <div class="food-order-container">
        <div class="food-order-container-interior">
          <p class="js-food-order-name">${item.productName}</p>
          <div class="food-quantifier">
            <i class="fa-solid fa-circle-minus"></i>
            <p class="js-counter">${item.quantity}</p>
            <i class="fa-solid fa-circle-plus"></i>
          </div>
          <p class="js-food-order-price">$${item.productPrice}</p>
        </div>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
    `;
  });
  orderContainer.innerHTML = ordersHTML;
  countItems(itemQuantity);
}

function displayCategory(category) {
  let categoryHTML = '';
  category.forEach((product) => {
    categoryHTML += `
      <div class="food-card-interior">
        <img src="${product.image}" class="food-image">
        <p class="js-food-name">${product.name}</p>
        <p class="js-food-price">$${product.price}</p>
        <div class="add-button-container">
          <button class="js-add-button" data-product-name="${product.name}" data-product-price="${product.price}">Add</button>
        </div>
      </div>
    `;
  });
  document.querySelector('.js-food-card-container').innerHTML = categoryHTML;
  addButton();  // Add event listeners to buttons
}

document.querySelector('.js-all-button').addEventListener('click', () => displayAll(products));
document.querySelector('.js-snacks-button').addEventListener('click', () => displayCategory(snacksCategory));
document.querySelector('.js-drinks-button').addEventListener('click', () => displayCategory(drinksCategory));
document.querySelector('.js-meals-button').addEventListener('click', () => displayCategory(mealsCategory));
document.querySelector('.js-deserts-button').addEventListener('click', () => displayCategory(desertCategory));

// Initialize display
displayAll(products);

/*function addToOrderQuantity(){
  document.querySelectorAll('.fa-circle-plus').forEach((item)=>{
    item.addEventListener('click', ()=>{
    let productName = item.product
    });
  })
}*/

function countItems(itemQuantity,){
  orders.forEach((item) =>{
    itemQuantity += item.quantity;
  });
  
  document.querySelector('.js-items').innerHTML = `items: ${itemQuantity}`;
}

