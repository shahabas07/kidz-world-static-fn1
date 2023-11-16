const cartButton = document.getElementById("cart");
const cartValue = document.getElementById("cart-value");
const addButtons = document.getElementsByClassName("button");

const items = [
  { name: "This was our pact", quantity: 0, dollars: 7, cents: 49 },
  { name: "The famous five", quantity: 0, dollars: 4, cents: 59 },
  { name: "Matilda", quantity: 0, dollars: 6, cents: 80 },
  { name: "Harry Potter",quantity: 0,dollars: 10,cents: 0,},
  { name: "For Young Readers",quantity: 0,dollars: 7,cents: 29,},
  {name: "Wimpy Kid - DIY",quantity: 0,dollars: 4,cents: 99,},
  {name: "Dart Board",quantity: 0, dollars: 17, cents: 49,},
  {name: "Connect Four", quantity: 0, dollars: 19,cents: 99,},
  { name: "Jenga", quantity: 0, dollars: 20,cents: 99,},
  { name: "Monopoly", quantity: 0,  dollars: 19, cents: 49,},
  { name: "Bookmarks", quantity: 0, dollars: 12, cents: 49, },
  { name: "Birthday Card",quantity: 0, dollars: 12,cents: 49, },
  { name: "Stuffed toys",quantity: 0, dollars: 15,  cents: 99, },
  { name: "Dream catcher drawing", quantity: 0,dollars: 18, cents: 49,},
];

// Update the cart display
function carting() {
  let cart = 0;
  for (const item of items) {
    cart += item.quantity;
  }
  cartValue.innerHTML = cart;
}

// Add event listeners to the add buttons
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    carting();
  };
}

// Calculate and update the total price
let Dollar = 0;
let Cent = 0;

function price() {
  let totalCents = 0;

  for (const item of items) {
    totalCents += item.quantity * (item.dollars * 100 + item.cents);
  }
  Dollar = Math.floor(totalCents / 100);
  finalCents = totalCents % 100;
}

// Display the items and total amount on cart button click
cartButton.onclick = () => {
  price();

  for (const item of items) {
    if (item.quantity !== 0) {
      console.log(`Item name: ${item.name} Quantity: ${item.quantity}`);
    }
  }
  console.log(`The total amount is ${Dollar}$ dollars and ${finalCents} cents`);
};