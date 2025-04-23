var cost = 1500;

function Calculate() {
    var numOfPerson = document.getElementById("people").value;
    var numOfRooms = document.getElementById("room").value;
    var numOfDays = document.getElementById("day").value;

    var amt = document.getElementById("amount");


    var totalPerson = numOfPerson*cost;
    var roomCost = (numOfRooms*50)*numOfDays;

    var totalCost = totalPerson+roomCost;

    amt.innerText = "Amount : $"+totalCost;
}

var form = document.getElementById("forms");
var amt = document.getElementById("amount");
document.getElementById("buy").addEventListener("click", function(){
    window.alert("Success"); 
    amt.innerText = "";
    form.reset();
});