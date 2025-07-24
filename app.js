// app.js - ElectraEdge E-commerce Application
console.log('Welcome to ElectraEdge!');

// This will trigger ESLint warnings
var unusedVariable = 'This variable is never used';
var anotherUnused = 'Another unused variable';

// This will trigger an error (eval is dangerous)
eval('console.log("This is bad practice")');

// Function with unused parameter
function calculatePrice(price, discount, unusedParam) {
    return price - (price * discount);
}

// Missing semicolon and other issues
var products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 599 }
]

// Call the function (but not using unusedParam)
var finalPrice = calculatePrice(1000, 0.1);
console.log('Final price:', finalPrice);
