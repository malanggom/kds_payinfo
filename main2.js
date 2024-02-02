const toggleitemDev = document.getElementById("menuToggleDevChild");
const toggleitemCustomer = document.getElementById("menuToggleCustomerChild");
const toggleitemProject = document.getElementById("menuToggleProjectChild");
const toggleitemBank = document.getElementById("menuToggleBankChild");
const toggleitemTaxbill = document.getElementById("menuToggleTaxbillChild");
const toggleitemTax = document.getElementById("menuToggleTaxChild");
const toggleitemMachine = document.getElementById("menuToggleMachineChild");

const devAddBtn = document.getElementById("devAddBtn");
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const btntoggleitemWhtaxVat = document.getElementById("flexBtnWhtaxVatChild");
const btntoggleitemYear = document.getElementById("flexBtnYearChild");
const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");
const modalBox2 = document.getElementById("modalBox2");

const btntoggleitemProject = document.getElementById("flexBtnProjectChild");
const btntoggleitemContract = document.getElementById("flexBtnContractChild");
const btntoggleitemPosition = document.getElementById("flexBtnPositionChild");
const btntoggleitemBank = document.getElementById("flexBtnBankChild");
const btntoggleitemJobtitle = document.getElementById("flexBtnJobtitleChild");
const btntoggleitemSkill = document.getElementById("flexBtnSkillChild");
const btntoggleitemLanguage = document.getElementById("flexBtnLanguageChild");
const btntoggleitemContractRoot = document.getElementById("flexBtnContactRootChild");
// const btntoggleitem20 = document.getElementById("flexBtnChild20");

// document.getElementById("devAddBtn").onclick = function menuToggle(){
//     if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//     || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//     || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//     || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
//     || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//     || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
//     btntoggleitemProject.style.visibility = "hidden";
//     btntoggleitemContract.style.visibility = "hidden";
//     btntoggleitemWhtaxVat.style.visibility = "hidden";
//     btntoggleitemYear.style.visibility = "hidden";
//     btntoggleitemPosition.style.visibility = "hidden";
//     btntoggleitemBank.style.visibility = "hidden";
//     btntoggleitemJobtitle.style.visibility = "hidden";
//     btntoggleitemSkill.style.visibility = "hidden";
//     btntoggleitemLanguage.style.visibility = "hidden";
//     btntoggleitemContractRoot.style.visibility = "hidden";
//     btntoggleitem20.style.visibility = "hidden";
//     toggleitemDev.style.display = "none";
//     toggleitemCustomer.style.display = "none";
//     toggleitemProject.style.display = "none";
//     toggleitemBank.style.display = "none";
//     toggleitemTaxbill.style.display = "none";
//     toggleitemTax.style.display = "none";
//     toggleitemMachine.style.display = "none";
//     modalBox.style.display = "";
//     modalBox2.style.display = "";
//     modal.style.display = "";
//     } else{
//         modalBox.style.display = "";
//         modalBox2.style.display = "";
//         modal.style.display = "";
//     }
// }

// document.getElementById("searchBar").onclick = function menuToggle(){
//     if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//     || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//     || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//     || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
//     || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//     || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
//     btntoggleitemProject.style.visibility = "hidden";
//     btntoggleitemContract.style.visibility = "hidden";
//     btntoggleitemWhtaxVat.style.visibility = "hidden";
//     btntoggleitemYear.style.visibility = "hidden";
//     btntoggleitemPosition.style.visibility = "hidden";
//     btntoggleitemBank.style.visibility = "hidden";
//     btntoggleitemJobtitle.style.visibility = "hidden";
//     btntoggleitemSkill.style.visibility = "hidden";
//     btntoggleitemLanguage.style.visibility = "hidden";
//     btntoggleitemContractRoot.style.visibility = "hidden";
//     btntoggleitem20.style.visibility = "hidden";
//     toggleitemDev.style.display = "none";
//     toggleitemCustomer.style.display = "none";
//     toggleitemProject.style.display = "none";
//     toggleitemBank.style.display = "none";
//     toggleitemTaxbill.style.display = "none";
//     toggleitemTax.style.display = "none";
//     toggleitemMachine.style.display = "none";
//     } else{
//     }
// }

// document.getElementById("searchBtn").onclick = function menuToggle(){
//     if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//     || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//     || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//     || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
//     || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//     || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
//     btntoggleitemProject.style.visibility = "hidden";
//     btntoggleitemContract.style.visibility = "hidden";
//     btntoggleitemWhtaxVat.style.visibility = "hidden";
//     btntoggleitemYear.style.visibility = "hidden";
//     btntoggleitemPosition.style.visibility = "hidden";
//     btntoggleitemBank.style.visibility = "hidden";
//     btntoggleitemJobtitle.style.visibility = "hidden";
//     btntoggleitemSkill.style.visibility = "hidden";
//     btntoggleitemLanguage.style.visibility = "hidden";
//     btntoggleitemContractRoot.style.visibility = "hidden";
//     btntoggleitem20.style.visibility = "hidden";
//     toggleitemDev.style.display = "none";
//     toggleitemCustomer.style.display = "none";
//     toggleitemProject.style.display = "none";
//     toggleitemBank.style.display = "none";
//     toggleitemTaxbill.style.display = "none";
//     toggleitemTax.style.display = "none";
//     toggleitemMachine.style.display = "none";
//     } else{
//     }
// }

// --------------------main-tabs 토글 부분 ---------------------//

document.getElementById("menuToggleDev").onclick = function menuToggle() {
    if (toggleitemDev.style.display === "none" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemDev.style.display = "flex";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";
    }
    else {
        toggleitemDev.style.display = "none";
    }
}

// document.getElementById("menuToggleDevBtn").onclick = function menuToggle() {
//     if (toggleitemDev.style.display === "none" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemDev.style.display = "flex";
//         toggleitemCustomer.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemTax.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     }
//     else {
//         toggleitemDev.style.display = "none";
//     }
// }


document.getElementById("menuToggleCustomer").onclick = function menuToggle() {
    if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "none" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemCustomer.style.display = "flex";
        toggleitemDev.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

    }
    else {
        toggleitemCustomer.style.display = "none";
    }
}

// document.getElementById("menuToggleCustomerBtn").onclick = function menuToggle() {
//     if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "none" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemCustomer.style.display = "flex";
//         toggleitemDev.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemTax.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     }
//     else {
//         toggleitemCustomer.style.display = "none";
//     }
// }

document.getElementById("menuToggleProject").onclick = function menuToggle(params) {
    if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "none" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemProject.style.display = "flex";
        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

    } else {
        toggleitemProject.style.display = "none";
    }
}

// document.getElementById("menuToggleProjectBtn").onclick = function menuToggle(params) {
//     if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "none" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemProject.style.display = "flex";
//         toggleitemDev.style.display = "none";
//         toggleitemCustomer.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemTax.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     } else {
//         toggleitemProject.style.display = "none";
//     }
// }

document.getElementById("menuToggleBank").onclick = function menuToggle(params) {
    if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "none"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemBank.style.display = "flex";
        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

    } else {
        toggleitemBank.style.display = "none";
    }
}

// document.getElementById("menuToggleBankBtn").onclick = function menuToggle(params) {
//     if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "none"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemBank.style.display = "flex";
//         toggleitemDev.style.display = "none";
//         toggleitemCustomer.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemTax.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     } else {
//         toggleitemBank.style.display = "none";
//     }
// }



document.getElementById("menuToggleTaxBs").onclick = function menuToggle(params) {
    if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "none" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemTaxbill.style.display = "flex";
        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

    } else {
        toggleitemTaxbill.style.display = "none";
    }
}

// document.getElementById("menuToggleTaxBsBtn").onclick = function menuToggle(params) {
//     if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "none" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemTaxbill.style.display = "flex";
//         toggleitemDev.style.display = "none";
//         toggleitemCustomer.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTax.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     } else {
//         toggleitemTaxbill.style.display = "none";
//     }
// }

document.getElementById("menuToggleTax").onclick = function menuToggle(params) {
    if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "none" || toggleitemMachine.style.display === "flex"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemTax.style.display = "flex";
        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

    } else {
        toggleitemTax.style.display = "none";
    }
}

// document.getElementById("menuToggleTaxBtn").onclick = function menuToggle(params) {
//     if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "none" || toggleitemMachine.style.display === "flex"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemTax.style.display = "flex";
//         toggleitemDev.style.display = "none";
//         toggleitemCustomer.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     } else {
//         toggleitemTax.style.display = "none";
//     }
// }

document.getElementById("menuToggleMachine").onclick = function menuToggle(params) {
    if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "none"
        || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "") {
        toggleitemMachine.style.display = "flex";
        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

    } else {
        toggleitemMachine.style.display = "none";
    }
}

// document.getElementById("menuToggleMachineBtn").onclick = function menuToggle(params) {
//     if (toggleitemDev.style.display === "flex" || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "none"
//         || btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "") {
//         toggleitemMachine.style.display = "flex";
//         toggleitemDev.style.display = "none";
//         toggleitemCustomer.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemTax.style.display = "none";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
// 
//     } else {
//         toggleitemMachine.style.display = "none";
//     }
// }
// --------------------main-tabs 토글 부분 ---------------------//

// --------------------main 필터 버튼 토글 부분 ---------------------//
document.getElementById("flexBtnPj").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "hidden" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemProject.style.visibility = "";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemProject.style.zIndex = "2";
    } else {
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemProject.style.zIndex = "0";
    }
}

document.getElementById("flexBtnContract").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "hidden" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemContract.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemContract.style.zIndex = "2";
    } else {
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemContract.style.zIndex = "0";
    }
}

document.getElementById("flexBtnWhtaxVat").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === "hidden"
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemWhtaxVat.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemWhtaxVat.style.zIndex = "2";
    } else {
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        
        btntoggleitemWhtaxVat.style.zIndex = "0";
    }
}

document.getElementById("flexBtnYear").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "hidden" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemYear.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemYear.style.zIndex = "2";
    } else {
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemYear.style.zIndex = "0";
    }
}

// document.getElementById("flexBtnGrade").onclick = function menuToggle(params) {
//     if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
//         || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
//         || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
//         || btntoggleitemContractRoot.style.visibility === "" || btntoggleitem20.style.visibility === "hidden" || toggleitemDev.style.display === "flex"
//         || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
//         || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
//         btntoggleitem20.style.visibility = "";
//         btntoggleitemProject.style.visibility = "hidden";
//         btntoggleitemContract.style.visibility = "hidden";
//         btntoggleitemWhtaxVat.style.visibility = "hidden";
//         btntoggleitemYear.style.visibility = "hidden";
//         btntoggleitemPosition.style.visibility = "hidden";
//         btntoggleitemBank.style.visibility = "hidden";
//         btntoggleitemJobtitle.style.visibility = "hidden";
//         btntoggleitemSkill.style.visibility = "hidden";
//         btntoggleitemLanguage.style.visibility = "hidden";
//         btntoggleitemContractRoot.style.visibility = "hidden";
//         toggleitemDev.style.display = "none";
//         toggleitemCustomer.style.display = "none";
//         toggleitemProject.style.display = "none";
//         toggleitemBank.style.display = "none";
//         toggleitemTaxbill.style.display = "none";
//         toggleitemTax.style.display = "none";
//         toggleitemMachine.style.display = "none";
//         btntoggleitem20.style.zIndex = "2";
        
//     } else if(btntoggleitem20.style.visibility === "") {
// 
//         btntoggleitem20.style.zIndex = "0";
        
//     }
// }

document.getElementById("flexBtnPosition").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "hidden" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemPosition.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemPosition.style.zIndex = "2";
    } else {
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemPosition.style.zIndex = "0";
    }
}

document.getElementById("flexBtnBank").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === "hidden"
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemBank.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemBank.style.zIndex = "2";
    } else {
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemBank.style.zIndex = "0";
    }
}

document.getElementById("flexBtnJobtitle").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "hidden" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemJobtitle.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemJobtitle.style.zIndex = "2";
    } else {
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemJobtitle.style.zIndex = "0";
    }
}

document.getElementById("flexBtnSkill").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "hidden" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemSkill.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemSkill.style.zIndex = "2";
    } else {
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemSkill.style.zIndex = "0";
    }
}

document.getElementById("flexBtnLanguage").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === "hidden"
        || btntoggleitemContractRoot.style.visibility === "" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemLanguage.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemContractRoot.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemLanguage.style.zIndex = "2";
    } else {
        btntoggleitemLanguage.style.visibility = "hidden";
        btntoggleitemLanguage.style.zIndex = "0";
    }
}

document.getElementById("flexBtnContactRoot").onclick = function menuToggle(params) {
    if (btntoggleitemProject.style.visibility === "" || btntoggleitemContract.style.visibility === "" || btntoggleitemWhtaxVat.style.visibility === ""
        || btntoggleitemYear.style.visibility === "" || btntoggleitemPosition.style.visibility === "" || btntoggleitemBank.style.visibility === ""
        || btntoggleitemJobtitle.style.visibility === "" || btntoggleitemSkill.style.visibility === "" || btntoggleitemLanguage.style.visibility === ""
        || btntoggleitemContractRoot.style.visibility === "hidden" || toggleitemDev.style.display === "flex"
        || toggleitemCustomer.style.display === "flex" || toggleitemProject.style.display === "flex" || toggleitemBank.style.display === "flex"
        || toggleitemTaxbill.style.display === "flex" || toggleitemTax.style.display === "flex" || toggleitemMachine.style.display === "flex") {
        btntoggleitemContractRoot.style.visibility = "";
        btntoggleitemProject.style.visibility = "hidden";
        btntoggleitemContract.style.visibility = "hidden";
        btntoggleitemWhtaxVat.style.visibility = "hidden";
        btntoggleitemYear.style.visibility = "hidden";
        btntoggleitemPosition.style.visibility = "hidden";
        btntoggleitemBank.style.visibility = "hidden";
        btntoggleitemJobtitle.style.visibility = "hidden";
        btntoggleitemSkill.style.visibility = "hidden";
        btntoggleitemLanguage.style.visibility = "hidden";

        toggleitemDev.style.display = "none";
        toggleitemCustomer.style.display = "none";
        toggleitemProject.style.display = "none";
        toggleitemBank.style.display = "none";
        toggleitemTaxbill.style.display = "none";
        toggleitemTax.style.display = "none";
        toggleitemMachine.style.display = "none";
        btntoggleitemContractRoot.style.zIndex = "2";
    } else {
        btntoggleitemContractRoot.style.visibility = "hidden";
        btntoggleitemContractRoot.style.zIndex = "0";
    }
}

