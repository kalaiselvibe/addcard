var discountTableData = [
  { vendor: 'Vendor A', discount: 00 },
  { vendor: 'Vendor B', discount: 03 },
  { vendor: 'Vendor C', discount: 05 },
  { vendor: 'Vendor D', discount: 06 },
  { vendor: 'Vendor E', discount: 08 },
  { vendor: 'Vendor F', discount: 11 },
  { vendor: 'Vendor G', discount: 12},
  { vendor: 'Vendor H', discount: 16},
  { vendor: 'Vendor I', discount: 20},
  { vendor: 'Vendor J', discount: 30 } 
];
var discountTableBody = document.querySelector('#discount-table tbody');
discountTableData.forEach(function(data) {
  var row = document.createElement('tr');
  row.innerHTML = '<td>' + data.vendor + '</td><td>' + data.discount + '%</td>';
  discountTableBody.appendChild(row);
});
function populateProductTable(products) {
var productTableBody = document.querySelector('#product-table tbody');
productTableBody.innerHTML = '';
products.forEach(function(product) {
var row = document.createElement('tr');
var discount = getDiscountByVendor(product.vendor); 
var discountAmount = (product.price * discount) / 100;
var totalPrice = product.price - discountAmount;
row.innerHTML = '<td>' + product.id + '</td><td>' + product.name + '</td><td>' + product.vendor + '</td><td>' + product.price.toFixed(2) + '</td><td><button class="add-to-cart-btn" data-product-id="' + product.id + '" data-product-name="' + product.name + '" data-product-price="' + product.price.toFixed(2) + '" data-product-vendor="' + product.vendor + '" data-product-discount="' + discount + '" data-product-discount-amount="' + discountAmount.toFixed(2) + '" data-product-total-price="' + totalPrice.toFixed(2) + '">Add to Cart</button></td>';
productTableBody.appendChild(row);
});
}
function getDiscountByVendor(vendor) {
for (var i = 0; i < discountTableData.length; i++) {
if (discountTableData[i].vendor === vendor) {
return discountTableData[i].discount;
}
}
return 0;
}
function addToCart(event) {
var product = event.target.dataset;
var cartTableBody = document.querySelector('#shopping-cart tbody');
var row = document.createElement('tr');
row.innerHTML = '<td>' + product.productId + '</td><td>' + product.productName + '</td><td>' + product.productVendor + '</td><td>' + product.productPrice + '</td><td>' + product.productDiscount + '%</td><td>' + product.productDiscountAmount + '</td><td>' + product.productTotalPrice + '</td><td><button class="remove-from-cart-btn" data-product-id="' + product.productId + '">Remove</button></td>';
cartTableBody.appendChild(row);
updateTotalPrice();
}
function removeFromCart(event) {
var productId = event.target.dataset.productId;
const row = event.target.parentNode.parentNode;
row.parentNode.removeChild(row);
updateTotalPrice();
}
function updateTotalPrice() {
var cartRows = document.querySelectorAll('#shopping-cart tbody tr');
var totalPrice = 0;
cartRows.forEach(function(row) {
totalPrice += parseFloat(row.children[6].textContent);
});
document.querySelector('#total-price').textContent = totalPrice.toFixed(2);
}
document.querySelector('#download-data-btn').addEventListener('click', function() {
var products = [
{ id: 1, name: 'test product1', vendor: 'Vendor C', price: 12.50},
{ id: 2, name: 'test product2', vendor: 'Vendor A', price: 42.50 },
{ id: 3, name: 'test product3', vendor: 'Vendor B', price: 200.00},
{ id: 4, name: 'test product4', vendor: 'Vendor I', price: 52.50 },
{ id: 5, name: 'test product5', vendor: 'Vendor D', price: 712.50},
{ id: 6, name: 'test product6', vendor: 'Vendor A', price: 17.00},
{ id: 7, name: 'test product7', vendor: 'Vendor A', price: 55.00},
{ id: 8, name: 'test product8', vendor: 'Vendor J', price: 37.00 },
{ id: 9, name: 'test product9', vendor: 'Vendor H', price: 82.00 },
{ id: 10, name: 'test product10', vendor: 'Vendor E', price: 52.00 },
{ id: 11, name: 'test product11', vendor: 'Vendor G', price: 102.00},
{ id: 12, name: 'test product12', vendor: 'Vendor A', price: 172.50 },
{ id: 13, name: 'test product13', vendor: 'Vendor J', price: 100.00},
{ id: 14, name: 'test product14', vendor: 'Vendor J', price: 99.50 },
{ id: 15, name: 'test product15', vendor: 'Vendor C', price: 87.50},
{ id: 16, name: 'test product16', vendor: 'Vendor G', price: 57.00},
{ id: 17, name: 'test product17', vendor: 'Vendor I', price: 10.00},
{ id: 18, name: 'test product18', vendor: 'Vendor H', price: 421.50 },
{ id: 19, name: 'test product19', vendor: 'Vendor A', price: 112.50 },
{ id: 20, name: 'test product20', vendor: 'Vendor F', price: 102.00 },
{ id: 21, name: 'test product21', vendor: 'Vendor A', price: 52.00},
{ id: 22, name: 'test product22', vendor: 'Vendor I', price: 32.00 },
{ id: 23, name: 'test product23', vendor: 'Vendor A', price: 200.00},
{ id: 24, name: 'test product24', vendor: 'Vendor D', price: 584.50 },
{ id: 25, name: 'test product25', vendor: 'Vendor J', price: 67.00},
{ id: 26, name: 'test product26', vendor: 'Vendor C', price: 132.50},
{ id: 27, name: 'test product27', vendor: 'Vendor E', price: 42.50}
];
populateProductTable(products);
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(function(button) {
button.addEventListener('click', addToCart);
});
var removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
removeFromCartButtons.forEach(function(button) {
button.addEventListener('click', removeFromCart);
});
});
