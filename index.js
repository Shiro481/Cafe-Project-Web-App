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
      console.log(orders);
        // Update the displayed orde
    });
  });

}

function displayOrder() {
  let ordersQuantity = 0;
  let ordersHTML = '';
  let orderContainer = document.querySelector('.js-order-container');

  orders.forEach((item) => {
    let totalItemPrice = (item.productPrice * item.quantity).toFixed(2);
    ordersHTML += `
      <div class="food-order-container">
        <div class="food-order-container-interior">
          <p class="js-food-order-name">${item.productName}</p>
          <div class="food-quantifier">
            <button class="minus-quantity js-minus-quantity" data-order-name="${item.productName}"><i class="fa-solid fa-circle-minus"></i></button>
            <p class="js-counter">${item.quantity}</p>
            <button class="add-quantity js-add-quantity" data-order-name="${item.productName}"><i class="fa-solid fa-circle-plus" ></i></button>
          </div>
          <p class="js-food-order-price">$${totalItemPrice}</p>
        </div>
        <button class="js-remove-button" data-order-name="${item.productName}"><i class="fa-solid fa-circle-xmark" ></i></button>
      </div>
    `;
    
  });
  orderContainer.innerHTML = ordersHTML;
  displayTotalCost();
  countItems(ordersQuantity);
  addQuantity();
  minusQuantity();
  removeOrder();
  

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

function addQuantity(){
  document.querySelectorAll('.js-add-quantity').forEach((item)=>{
    item.addEventListener('click' , ()=>{
      let productName = item.dataset.orderName;
      let targetItem = orders.find(product => product.productName === productName);

      if (targetItem){

        targetItem.quantity++;
        console.log(orders);
        displayOrder();
       
      };
     
    })
  });

}

function minusQuantity(){
  document.querySelectorAll('.js-minus-quantity').forEach((item)=>{
    item.addEventListener('click' , ()=>{
      let productName = item.dataset.orderName;
      let targetItem = orders.find(order => order.productName === productName);
    
      if (targetItem){
        if (targetItem.quantity  > 1){
          targetItem.quantity-=1;
          console.log(orders);
          displayOrder();
          
          
          };
      };
    })
 
  });
}
  

function countItems(itemQuantity,){
  orders.forEach((item) =>{
    itemQuantity += item.quantity;
  });
  
  document.querySelector('.js-items').innerHTML = `items: ${itemQuantity}`;
}


function displayTotalCost(){
  let totalCost = 0;

  orders.forEach((item)=>{
    totalCost += item.quantity * item.productPrice;

    return totalCost.toFixed(2);
  });

  document.querySelector('.js-total-cost').innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;
}

function removeOrder(){
  document.querySelectorAll('.js-remove-button').forEach((removeButton)=>{
    removeButton.addEventListener('click', ()=>{
      let productName = removeButton.dataset.orderName;
      let targetOrder = orders.find(order => order.productName === productName);

      if(targetOrder){
       console.log('hello');
      }
    })

  })
}


