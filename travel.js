var menuItems = document.getElementById("menuList")
menuItems.style.maxHeight = "0px"

function toggleMenu(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "300px"
    }else{
        menuItems.style.maxHeight = "0px"
    }
}