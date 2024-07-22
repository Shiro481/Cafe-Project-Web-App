
let products = [{
  image: 'Images/burger.jpg',
  category: 'Snacks',
  name: 'Burger',
  price: 1.89
},
{
  image: 'Images/fries.jpg',
  category: 'Snacks',
  name: 'Fries',
  price: 1.55
},
{
  image: 'Images/iced choco.jpg',
  category:'Drinks',
  name: 'Iced Choco',
  price: 1.75
},
{
  image: 'Images/iced coffee.jpg',
  category:'Drinks',
  name: 'Iced Coffee',
  price: 1.99
},
{
  image: 'Images/siomai.jpg',
  category:'Meals',
  name: 'Siomai  w/ Rice',
  price: 1.89
}];

let productHTML = '';
products.forEach((product) => {

  productHTML += `
    <div class="food-card-interior">
        <img src="${product.image}" class="food-image">
        <p class="js-food-name">${product.name}</p>
        <p class="js-food-price">$${product.price}</p>
        <div class="add-button-container">
          <button class="js-add-button">Add</button>
        </div>
      </div>
  `;
});

document.querySelector('.js-food-card-container').innerHTML = productHTML;
