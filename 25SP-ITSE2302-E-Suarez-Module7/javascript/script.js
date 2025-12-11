// Arrays
let extras = document.querySelectorAll(".extra");
let summaryBox = document.getElementById("orderSummary");

function calculateExtras(extraElements) {
  let total = 0;
  // Loop through each checkbox and add its value if selected
  extraElements.forEach((item) => {
    if (item.checked) {
      total += +item.value; 
    }
  });

  return total;
}

// Event Listener used for functions and retrieve the id for submit
document.getElementById("shirtForm").addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    // Get user's first name, last name, email, and quantity
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let quantity = +document.getElementById("quantity").value; 

    // Validate inputs
    if (first === "" || last === "" || email === "" || quantity < 1) {
      alert("Please fill out all fields correctly.");
      return;
    }

    let size = document.querySelector("input[name='size']:checked");
    // Alert if user did not select a shirt size
    if (!size) {
      alert("Please select a shirt size.");
      return;
    }

    // Calculate totals
    let basePrice = +size.value; 
    let extraCost = calculateExtras(extras);
    let total = (basePrice + extraCost) * quantity;

    let sizeName = "";
    // Switch to assign size names based on base price
    switch (basePrice) {
      case 15:
        sizeName = "Small";
        break;
      case 18:
        sizeName = "Medium";
        break;
      case 20:
        sizeName = "Large";
        break;
    }

    // Display order summary
    summaryBox.style.display = "block";
    summaryBox.innerHTML =
      "<h2>Order Summary</h2>" +
      "<p>Name: " +
      first +
      " " +
      last +
      "</p>" +
      "<p>Email: " +
      email +
      "</p>" +
      "<p>Shirt color: " +
      color.value +
      "</p>" +
      "<p>Shirt Size: " +
      sizeName +
      "</p>" +
      "<p>Extras Cost: $" +
      extraCost +
      "</p>" +
      "<p>Quantity: " +
      quantity +
      "</p>" +
      "<h3>Total Price: $" +
      total +
      "</h3>";
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.log(error);
  }
});
