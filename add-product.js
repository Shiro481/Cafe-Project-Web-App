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
  displayProductList();

  document.querySelector('.js-product-category').value = '';
  document.querySelector('.js-product-name').value = '';
  document.querySelector('.js-product-price').value = '';
}


function displayProductList(){

  for(let i = 0; i < products.length; i++){
    console.log(products[i]);
  }
}