document.getElementById("menuToggle0").onclick = function menuToggle(params) {
    const toggleitem = document.getElementById("menuToggle");
    const toggleitem1 = document.getElementById("menuToggle1");
    if (toggleitem.style.display === "none" && toggleitem1.style.display === "none") {
        toggleitem.style.display = "flex";
        toggleitem1.style.display = "flex";
    } else{
        toggleitem.style.display = "none";
        toggleitem1.style.display = "none";
    }
}

document.getElementById("menuToggleCustomer").onclick = function menuToggle(params) {
    const toggleitem2 = document.getElementById("menuToggle2");
    const toggleitem3 = document.getElementById("menuToggle3");
    const toggleitem4 = document.getElementById("menuToggle4");
    if (toggleitem2.style.display === "none" && toggleitem3.style.display === "none" && toggleitem4.style.display === "none") {
        toggleitem2.style.display = "flex";
        toggleitem3.style.display = "flex";
        toggleitem4.style.display = "flex";
    } else{
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
    }
}

document.getElementById("menuToggleProject").onclick = function menuToggle(params) {
    const toggleitem5 = document.getElementById("menuToggle5");
    const toggleitem6 = document.getElementById("menuToggle6");
    if (toggleitem5.style.display === "none" && toggleitem6.style.display === "none") {
        toggleitem5.style.display = "flex";
        toggleitem6.style.display = "flex";
    } else{
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
    }
}

document.getElementById("menuToggleBank").onclick = function menuToggle(params) {
    const toggleitem7 = document.getElementById("menuToggle7");
    const toggleitem8 = document.getElementById("menuToggle8");
    if (toggleitem7.style.display === "none" && toggleitem8.style.display === "none") {
        toggleitem7.style.display = "flex";
        toggleitem8.style.display = "flex";
    } else{
        toggleitem7.style.display = "none";
        toggleitem8.style.display = "none";
    }
}

document.getElementById("menuToggleTaxBs").onclick = function menuToggle(params) {
    const toggleitem9 = document.getElementById("menuToggle9");
    const toggleitem10 = document.getElementById("menuToggle10");
    if (toggleitem9.style.display === "none" && toggleitem10.style.display === "none") {
        toggleitem9.style.display = "flex";
        toggleitem10.style.display = "flex";
    } else{
        toggleitem9.style.display = "none";
        toggleitem10.style.display = "none";
    }
}

document.getElementById("menuToggleTax").onclick = function menuToggle(params) {
    const toggleitem11 = document.getElementById("menuToggle11");
    if (toggleitem11.style.display === "none") {
        toggleitem11.style.display = "flex";
    } else{
        toggleitem11.style.display = "none";
    }
}

document.getElementById("menuToggleMachine").onclick = function menuToggle(params) {
    const toggleitem12 = document.getElementById("menuToggle11");
    if (toggleitem12.style.display === "none") {
        toggleitem12.style.display = "flex";
    } else{
        toggleitem12.style.display = "none";
    }
}