document.getElementById("donation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.querySelector("input[placeholder='Full Name']").value;
    let email = document.querySelector("input[placeholder='Email']").value;
    let phone = document.querySelector("input[placeholder='Phone Number']").value;
    let bloodType = document.querySelector("input[placeholder='Blood Type']").value;
    
    if (name && email && phone && bloodType) {
        alert("Thank you, " + name + "! Your blood donation registration is successful.");
        document.getElementById("donation-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
