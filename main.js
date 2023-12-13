const toggleitem = document.getElementById("menuToggleDevChild");
const toggleitem2 = document.getElementById("menuToggleDevChild2");
const toggleitem3 = document.getElementById("menuToggleDevChild3");
const toggleitem4 = document.getElementById("menuToggleDevChild4");
const toggleitem5 = document.getElementById("menuToggleDevChild5");
const toggleitem6 = document.getElementById("menuToggleDevChild6");
const toggleitem7 = document.getElementById("menuToggleDevChild7");

const devAddBtn = document.getElementById("devAddBtn");
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const btntoggleitem3 = document.getElementById("flexBtnChild3");
const btntoggleitem4 = document.getElementById("flexBtnChild4");
const modal = document.getElementById("modal");
const modalBackground = document.getElementById("modalBackground")

const btntoggleitem = document.getElementById("flexBtnChild");
const btntoggleitem2 = document.getElementById("flexBtnChild2");
const btntoggleitem5 = document.getElementById("flexBtnChild5");
const btntoggleitem6 = document.getElementById("flexBtnChild6");
const btntoggleitem7 = document.getElementById("flexBtnChild7");
const btntoggleitem8 = document.getElementById("flexBtnChild8");
const btntoggleitem9 = document.getElementById("flexBtnChild9");
const btntoggleitem10 = document.getElementById("flexBtnChild10");
const btntoggleitem20 = document.getElementById("flexBtnChild20");

document.getElementById("devAddBtn").onclick = function menuToggle(){
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
    || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
    || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
    || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
    || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
    || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
    btntoggleitem.style.visibility = "hidden";
    btntoggleitem2.style.visibility = "hidden";
    btntoggleitem3.style.visibility = "hidden";
    btntoggleitem4.style.visibility = "hidden";
    btntoggleitem5.style.visibility = "hidden";
    btntoggleitem6.style.visibility = "hidden";
    btntoggleitem7.style.visibility = "hidden";
    btntoggleitem8.style.visibility = "hidden";
    btntoggleitem9.style.visibility = "hidden";
    btntoggleitem10.style.visibility = "hidden";
    btntoggleitem20.style.visibility = "hidden";
    toggleitem.style.display = "none";
    toggleitem2.style.display = "none";
    toggleitem3.style.display = "none";
    toggleitem4.style.display = "none";
    toggleitem5.style.display = "none";
    toggleitem6.style.display = "none";
    toggleitem7.style.display = "none";
    modal.style.display = "";
    modalBackground.style.display = "";
    } else{
        modal.style.display = "";
        modalBackground.style.display = "";
    }
}

document.getElementById("searchBar").onclick = function menuToggle(){
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
    || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
    || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
    || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
    || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
    || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
    btntoggleitem.style.visibility = "hidden";
    btntoggleitem2.style.visibility = "hidden";
    btntoggleitem3.style.visibility = "hidden";
    btntoggleitem4.style.visibility = "hidden";
    btntoggleitem5.style.visibility = "hidden";
    btntoggleitem6.style.visibility = "hidden";
    btntoggleitem7.style.visibility = "hidden";
    btntoggleitem8.style.visibility = "hidden";
    btntoggleitem9.style.visibility = "hidden";
    btntoggleitem10.style.visibility = "hidden";
    btntoggleitem20.style.visibility = "hidden";
    toggleitem.style.display = "none";
    toggleitem2.style.display = "none";
    toggleitem3.style.display = "none";
    toggleitem4.style.display = "none";
    toggleitem5.style.display = "none";
    toggleitem6.style.display = "none";
    toggleitem7.style.display = "none";
    } else{
    }
}

document.getElementById("searchBtn").onclick = function menuToggle(){
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
    || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
    || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
    || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
    || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
    || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
    btntoggleitem.style.visibility = "hidden";
    btntoggleitem2.style.visibility = "hidden";
    btntoggleitem3.style.visibility = "hidden";
    btntoggleitem4.style.visibility = "hidden";
    btntoggleitem5.style.visibility = "hidden";
    btntoggleitem6.style.visibility = "hidden";
    btntoggleitem7.style.visibility = "hidden";
    btntoggleitem8.style.visibility = "hidden";
    btntoggleitem9.style.visibility = "hidden";
    btntoggleitem10.style.visibility = "hidden";
    btntoggleitem20.style.visibility = "hidden";
    toggleitem.style.display = "none";
    toggleitem2.style.display = "none";
    toggleitem3.style.display = "none";
    toggleitem4.style.display = "none";
    toggleitem5.style.display = "none";
    toggleitem6.style.display = "none";
    toggleitem7.style.display = "none";
    } else{
    }
}

// --------------------main-tabs 토글 부분 ---------------------//

document.getElementById("menuToggleDev").onclick = function menuToggle() {
    if (toggleitem.style.display === "none" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem.style.display = "flex";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    }
    else {
        toggleitem.style.display = "none";
    }
}

document.getElementById("menuToggleDevBtn").onclick = function menuToggle() {
    if (toggleitem.style.display === "none" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem.style.display = "flex";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    }
    else {
        toggleitem.style.display = "none";
    }
}


document.getElementById("menuToggleCustomer").onclick = function menuToggle() {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "none" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem2.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    }
    else {
        toggleitem2.style.display = "none";
    }
}

document.getElementById("menuToggleCustomerBtn").onclick = function menuToggle() {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "none" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem2.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    }
    else {
        toggleitem2.style.display = "none";
    }
}

document.getElementById("menuToggleProject").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "none" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem3.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem3.style.display = "none";
    }
}

document.getElementById("menuToggleProjectBtn").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "none" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem3.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem3.style.display = "none";
    }
}

document.getElementById("menuToggleBank").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "none"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem4.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem4.style.display = "none";
    }
}

document.getElementById("menuToggleBankBtn").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "none"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem4.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem4.style.display = "none";
    }
}



document.getElementById("menuToggleTaxBs").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "none" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem5.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem5.style.display = "none";
    }
}

document.getElementById("menuToggleTaxBsBtn").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "none" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem5.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem5.style.display = "none";
    }
}

document.getElementById("menuToggleTax").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "none" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem6.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem6.style.display = "none";
    }
}

document.getElementById("menuToggleTaxBtn").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "none" || toggleitem7.style.display === "flex"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem6.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem6.style.display = "none";
    }
}

document.getElementById("menuToggleMachine").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "none"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem7.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem7.style.display = "none";
    }
}

document.getElementById("menuToggleMachineBtn").onclick = function menuToggle(params) {
    if (toggleitem.style.display === "flex" || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "none"
        || btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "") {
        toggleitem7.style.display = "flex";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
    } else {
        toggleitem7.style.display = "none";
    }
}
// --------------------main-tabs 토글 부분 ---------------------//

// --------------------main 필터 버튼 토글 부분 ---------------------//
document.getElementById("flexBtnPj").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "hidden" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem.style.visibility = "";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem.style.zIndex = "2";
    } else {
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem.style.zIndex = "0";
    }
}

document.getElementById("flexBtnContract").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "hidden" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem2.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem2.style.zIndex = "2";
    } else {
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem2.style.zIndex = "0";
    }
}

document.getElementById("flexBtnWhtaxVat").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === "hidden"
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem3.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem3.style.zIndex = "2";
    } else {
        btntoggleitem3.style.visibility = "hidden";
        
        btntoggleitem3.style.zIndex = "0";
    }
}

document.getElementById("flexBtnYear").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "hidden" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem4.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem4.style.zIndex = "2";
    } else {
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem4.style.zIndex = "0";
    }
}

document.getElementById("flexBtnGrade").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "hidden" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem20.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem20.style.zIndex = "2";
        
    } else if(btntoggleitem20.style.visibility === "") {
        btntoggleitem20.style.visibility = "hidden";
        btntoggleitem20.style.zIndex = "0";
        
    }
}

document.getElementById("flexBtnPosition").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "hidden" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem5.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem5.style.zIndex = "2";
    } else {
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem5.style.zIndex = "0";
    }
}

document.getElementById("flexBtnRank").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === "hidden"
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem6.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem6.style.zIndex = "2";
    } else {
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem6.style.zIndex = "0";
    }
}

document.getElementById("flexBtnJobtitle").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "hidden" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem7.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem7.style.zIndex = "2";
    } else {
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem7.style.zIndex = "0";
    }
}

document.getElementById("flexBtnSkill").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "hidden" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem8.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem8.style.zIndex = "2";
    } else {
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem8.style.zIndex = "0";
    }
}

document.getElementById("flexBtnLanguage").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === "hidden"
        || btntoggleitem10.style.visibility === "" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem9.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem9.style.zIndex = "2";
    } else {
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem9.style.zIndex = "0";
    }
}

document.getElementById("flexBtnContactRoot").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" || btntoggleitem2.style.visibility === "" || btntoggleitem3.style.visibility === ""
        || btntoggleitem4.style.visibility === "" || btntoggleitem5.style.visibility === "" || btntoggleitem6.style.visibility === ""
        || btntoggleitem7.style.visibility === "" || btntoggleitem8.style.visibility === "" || btntoggleitem9.style.visibility === ""
        || btntoggleitem10.style.visibility === "hidden" || btntoggleitem20.style.visibility === "" || toggleitem.style.display === "flex"
        || toggleitem2.style.display === "flex" || toggleitem3.style.display === "flex" || toggleitem4.style.display === "flex"
        || toggleitem5.style.display === "flex" || toggleitem6.style.display === "flex" || toggleitem7.style.display === "flex") {
        btntoggleitem10.style.visibility = "";
        btntoggleitem.style.visibility = "hidden";
        btntoggleitem2.style.visibility = "hidden";
        btntoggleitem3.style.visibility = "hidden";
        btntoggleitem4.style.visibility = "hidden";
        btntoggleitem5.style.visibility = "hidden";
        btntoggleitem6.style.visibility = "hidden";
        btntoggleitem7.style.visibility = "hidden";
        btntoggleitem8.style.visibility = "hidden";
        btntoggleitem9.style.visibility = "hidden";
        btntoggleitem20.style.visibility = "hidden";
        toggleitem.style.display = "none";
        toggleitem2.style.display = "none";
        toggleitem3.style.display = "none";
        toggleitem4.style.display = "none";
        toggleitem5.style.display = "none";
        toggleitem6.style.display = "none";
        toggleitem7.style.display = "none";
        btntoggleitem10.style.zIndex = "2";
    } else {
        btntoggleitem10.style.visibility = "hidden";
        btntoggleitem10.style.zIndex = "0";
    }
}

