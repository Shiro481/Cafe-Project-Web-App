let products = [];

function handleSavedProduct(){
  let foodCategory = document.querySelector('.js-product-category').value;
  let foodName =document.querySelector('.js-product-name').value;
  let foodPrice = parseFloat(document.querySelector('.js-product-price').value);

  const foodDetails = {
    category: foodCategory,
    name: foodName,
    price:foodPrice
  }

  products.push(foodDetails);
  
  document.querySelector('.js-product-category').value = '';
  document.querySelector('.js-product-name').value = '';
  document.querySelector('.js-product-price').value = '';
}

let productHTML = '';
products.forEach((product) => {

  productHTML += `
    <div class="food-card-interior">
        <img src="Images/burger.jpg" class="food-image">
        <p class="js-food-name">${product.name}</p>
        <p class="js-food-price">$${product.price}</p>
        <div class="add-button-container">
          <button class="js-add-button">Add</button>
        </div>
      </div>
  `;
});

document.querySelector('.js-food-card-container').innerHTML = productHTML;