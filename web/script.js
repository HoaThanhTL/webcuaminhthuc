/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", function(){
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
});
const toP = document.querySelector(".top");
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    if(x>80){toP.classList.add("active")}
    else{toP.classList.remove("active")}
}) 

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSectionId = this.querySelector("a").getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }

      const menuBar = document.querySelector(".menu-bar");
      const menuItems = document.querySelector(".menu-items");
      menuBar.classList.remove("active");
      menuItems.classList.remove("active");
    });
  });
});


const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach(menuButton => {
    menuButton.addEventListener("click", (x) => {
        const target = x.target.getAttribute("data-title");

        // Remove "active" class from all menu buttons
        menuButtons.forEach(button => button.classList.remove("active"));
        // Add "active" class to the clicked menu button
        x.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        // Remove "active" class from all menu items
        menuItem.querySelectorAll(".menu-item-content.active").forEach(item => item.classList.remove("active"));
        // Add "active" class to the corresponding menu item
        menuItem.querySelector(target).classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const veNhaBtn = document.getElementById("ve-nha-btn");

    veNhaBtn.addEventListener("click", function () {
        window.location.href = "venha.html";

    });
});