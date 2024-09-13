var menuItems = document.getElementById("menuList")
menuItems.style.maxHeight = "0px"

function toggleMenu(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "300px"
    }else{
        menuItems.style.maxHeight = "0px"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var button = document.getElementById("submitBtn");
    
    var nameReg = /^[a-zA-Z ]+$/;
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var pop = document.getElementById("popUp")

    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        var nameValue = name.value.trim();
        var emailValue = email.value.trim();

        if (nameValue && nameReg.test(nameValue)) {
            if (emailValue && emailReg.test(emailValue)) {
                window.alert("Form submitted");
                // Clear the form after submitting
                document.getElementById("myForm").reset();
                // Perform the form submission here if needed
                return true;
            } else {
                window.alert("Invalid email");
                return false;
            }
        } else {
            window.alert("Invalid name");
            return false;
        }
    });
});
