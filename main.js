const toggleitem = document.getElementById("menuToggleDevChild");
const toggleitem2 = document.getElementById("menuToggleDevChild2");
const toggleitem3 = document.getElementById("menuToggleDevChild3");
const toggleitem4 = document.getElementById("menuToggleDevChild4");
const toggleitem5 = document.getElementById("menuToggleDevChild5");
const toggleitem6 = document.getElementById("menuToggleDevChild6");
const toggleitem7 = document.getElementById("menuToggleDevChild7");

document.getElementById("menuToggleDev").onclick = function menuToggle() {
    if (toggleitem.style.display === "none" || toggleitem2.style.display === "block" || toggleitem3.style.display === "block" || toggleitem4.style.display === "block"
    || toggleitem5.style.display === "block" || toggleitem6.style.display === "block" || toggleitem7.style.display === "block") {
        toggleitem.style.display = "block";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
    }
    else {
        toggleitem.style.display = "none";
    }
}

document.getElementById("menuToggleCustomer").onclick = function menuToggle() {
    if (toggleitem.style.display === "block" || toggleitem2.style.display === "none" || toggleitem3.style.display === "block" || toggleitem4.style.display === "block"
    || toggleitem5.style.display === "block" || toggleitem6.style.display === "block" || toggleitem7.style.display === "block") {
        toggleitem2.style.display = "block";
        toggleitem.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
    }
    else{
        toggleitem2.style.display = "none";
    }
}

document.getElementById("menuToggleProject").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "block" || toggleitem2.style.display === "block" || toggleitem3.style.display === "none" || toggleitem4.style.display === "block"
    || toggleitem5.style.display === "block" || toggleitem6.style.display === "block" || toggleitem7.style.display === "block") {
        toggleitem3.style.display = "block";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
    } else {
        toggleitem3.style.display = "none";
    }
}

document.getElementById("menuToggleBank").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "block" || toggleitem2.style.display === "block" || toggleitem3.style.display === "block" || toggleitem4.style.display === "none"
    || toggleitem5.style.display === "block" || toggleitem6.style.display === "block" || toggleitem7.style.display === "block") {
        toggleitem4.style.display = "block";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
    } else {
        toggleitem4.style.display = "none";
    }
}

document.getElementById("menuToggleTaxBs").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "block" || toggleitem2.style.display === "block" || toggleitem3.style.display === "block" || toggleitem4.style.display === "block"
    || toggleitem5.style.display === "none" || toggleitem6.style.display === "block" || toggleitem7.style.display === "block") {
        toggleitem5.style.display = "block";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
    } else {
        toggleitem5.style.display = "none";
    }
}

document.getElementById("menuToggleTax").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "block" || toggleitem2.style.display === "block" || toggleitem3.style.display === "block" || toggleitem4.style.display === "block"
    || toggleitem5.style.display === "block" || toggleitem6.style.display === "none" || toggleitem7.style.display === "block") {
        toggleitem6.style.display = "block";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem7.style.display = "none";
    } else {
        toggleitem6.style.display = "none";
    }
}

document.getElementById("menuToggleMachine").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "block" || toggleitem2.style.display === "block" || toggleitem3.style.display === "block" || toggleitem4.style.display === "block"
    || toggleitem5.style.display === "block" || toggleitem6.style.display === "block" || toggleitem7.style.display === "none") {
        toggleitem7.style.display = "block";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
    } else {
        toggleitem7.style.display = "none";
    }
}