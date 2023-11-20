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

const btntoggleitem = document.getElementById("flexBtnChild");
const btntoggleitem2 = document.getElementById("flexBtnChild2");
const btntoggleitem3 = document.getElementById("flexBtnChild3");
const btntoggleitem4 = document.getElementById("flexBtnChild4");
const btntoggleitem5 = document.getElementById("flexBtnChild5");
const btntoggleitem6 = document.getElementById("flexBtnChild6");
const btntoggleitem7 = document.getElementById("flexBtnChild7");
const btntoggleitem8 = document.getElementById("flexBtnChild8");
const btntoggleitem9 = document.getElementById("flexBtnChild9");
const btntoggleitem10 = document.getElementById("flexBtnChild10");

document.getElementById("flexBtnPj").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "hidden" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnContract").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "hidden" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem2.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnWhtaxVat").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "hidden" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem3.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnYear").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "hidden" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem4.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnPosition").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "hidden" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem5.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnRank").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "hidden" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem6.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnJobtitle").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "hidden" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === "" 
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem7.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnSkill").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "hidden" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem8.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnLanguage").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === "hidden"
    ||  btntoggleitem10.style.visibility === "") {
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
    } else {
        btntoggleitem9.style.visibility = "hidden";
    }
}

document.getElementById("flexBtnContactRoot").onclick = function menuToggle(params) {
    if (btntoggleitem.style.visibility === "" ||  btntoggleitem2.style.visibility === "" ||  btntoggleitem3.style.visibility === "" 
    ||  btntoggleitem4.style.visibility === "" ||  btntoggleitem5.style.visibility === "" ||  btntoggleitem6.style.visibility === "" 
    ||  btntoggleitem7.style.visibility === "" ||  btntoggleitem8.style.visibility === "" ||  btntoggleitem9.style.visibility === ""
    ||  btntoggleitem10.style.visibility === "hidden") {
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
    } else {
        btntoggleitem10.style.visibility = "hidden";
    }
}