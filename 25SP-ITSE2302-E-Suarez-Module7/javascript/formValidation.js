
document.getElementById("myform").addEventListener("submit", handleCatAdoptionSubmission);

function handleCatAdoptionSubmission(event) {

    event.preventDefault();
    // assists with submission and prennts form refresh

    if (validateRequiredFields()) {

        const totalPrice = calculateAdoptionTotal();
        displayFormData(totalPrice);
    } else {
        return;
    }
    

}

// Function 2: Validates
function validateRequiredFields() {

    const username = document.getElementById("username");
    const email = document.getElementById("email");

// alerts the user if they miss one input
    if (username.value.trim() === "") {
        alert("Please enter your full name.");
        username.focus();
        return false;
    }


    if (email.value.trim() === "") {
        alert("Please enter your email address.");
        email.focus();
        return false;
    }

  
    return true;
}

// Function 3: calculates total adoption cost
function calculateAdoptionTotal() {

    const catCheckboxes = document.getElementsByName("cat");
    let total = 0;


    for (let i = 0; i < catCheckboxes.length; i++) {
        if (catCheckboxes[i].checked) {
            total += parseFloat(catCheckboxes[i].value);
        }
    }

// for dropdown menu for shipping options
    const shippingSelect = document.getElementById("myDropdown");
    const selectedShipping = shippingSelect.options[shippingSelect.selectedIndex].value;
    
    if (selectedShipping === "Fast") {
        total += 5;
    } else if (selectedShipping === "Same") {
        total += 15;
    }


    return total;
}

function displayFormData(totalPrice) {
    //checks radio length
    const contactSourceRadios = document.getElementsByName("source");
    let contactSource = "";
    for (let i = 0; i < contactSourceRadios.length; i++) {
        if (contactSourceRadios[i].checked) {
            contactSource = contactSourceRadios[i].value;
            break;
        }
    }
    //checks whats in checkboxes
    const catCheckboxes = document.getElementsByName("cat");
    let selectedCats = [];
    for (let i = 0; i < catCheckboxes.length; i++) {
        if (catCheckboxes[i].checked) {
            selectedCats.push(catCheckboxes[i].id);
        }
    }
    const customerName = document.getElementById("username").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;


    
   
  


    const shippingType = document.getElementById("myDropdown").value;
    const customerMessage = document.getElementById("message").value;


    console.log("Cat Adoption Form Submission:");
    console.log("Customer Name: " + customerName);
    console.log("Email Address: " + emailAddress);
    console.log("Phone Number: " + phoneNumber);
    console.log("How did you hear about us: " + contactSource);
    console.log("Selected Cat Breeds: " + selectedCats.join(", "));
    console.log("Shipping Type: " + shippingType);
    console.log("Customer Message: " + customerMessage);
    console.log("Total Adoption Price: $" + totalPrice.toFixed(2));
    
    console.log("You have submitted your order.");
}