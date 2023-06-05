let numButtonsDiv = document.querySelector("#numBtns");
let opeButtonsDiv = document.querySelector("#operationsBtns")
let screenDiv = document.querySelector("#screen");
let screenSpan = screenDiv.querySelector("#resultSpan");


let numbersBtns = numButtonsDiv.querySelectorAll("button");
let operationBtns = opeButtonsDiv.querySelectorAll("button");

let btnCancel = document.querySelector("#cancelBtn");
let btnEqual = document.querySelector("#equalBtn");
let btnAdd = document.querySelector("#addBtn");
let btnSub = document.querySelector("#substractBtn");
let btnMult = document.querySelector("#multiplicateBtn");
let btnDivi = document.querySelector("#divisionBtn");
let btnZero = document.querySelector("#zeroBtn");
let btnDot = document.querySelector("#dotBtn");
let lastOperationSpan;

let firstValue;
let lastValue;
let result;
let screenSpanText;
let lastClick;
let btnId;
let opeDone;


// Fonction pour afficher le nombre à calculer

btnEqual.disabled ="disabled";

numbersBtns.forEach(numBtn => {
    
    numBtn.addEventListener("click", function() {
        btnValue = numBtn.value;
        screenSpanText = screenSpan.textContent;
        if (screenSpanText.charAt(screenSpanText.length-1) == "" || screenSpanText.length > 0) {
            screenSpan.textContent += btnValue;    
        }
        if (btnAdd.disabled) {    
            enableOpBtn();    
        } 
        if (firstValue >> 0) {
            disableOpeBtn();
        }
        btnEqual.disabled = "";
    })
    
});

function equalTo(x,y) {
    if (!isNaN(firstValue) && firstValue != "") {
        
        console.log("Ceci est le deuxieme nombre : " + lastValue);
        opeDone += " " + lastValue;
        console.dir(opeDone); 

        if (opeDone.includes("+")) {

            result = parseFloat(x) + parseFloat(y);
            console.log("OK");
            screenSpan.textContent = parseFloat(result); 
            console.log("Ceci est le résultat : " + result);
            enableOpBtn();
            showOperation();

            numbersBtns.forEach(btn => {

                btn.disabled = "disabled";

            });

        } if (opeDone.includes("-")) {

            result = parseFloat(x) - parseFloat(y);
            console.log("OK -");
            screenSpan.textContent = parseFloat(result); 
            console.log("Ceci est le résultat : " + result);
            enableOpBtn();
            showOperation();
            numbersBtns.forEach(btn => {
                btn.disabled = "disabled";
            });

        } if (opeDone.includes("x")) {

            result = parseFloat(x) * parseFloat(y);
            console.log("OK x");
            screenSpan.textContent = parseFloat(result); 
            console.log("Ceci est le résultat : " + result);
            enableOpBtn();
            showOperation();

            numbersBtns.forEach(btn => {
                btn.disabled = "disabled";
            });
    
        } if (opeDone.includes("/")) {

            if (!lastValue == 0) {

                result = parseFloat(x) / parseFloat(y);
                console.log("OK /");
                screenSpan.textContent = parseFloat(result); 
                console.log("Ceci est le résultat : " + result);
                enableOpBtn();
                showOperation();
                numbersBtns.forEach(btn => {
                    btn.disabled = "disabled";
                });   

            } else {

                alert("You cannot divide by 0.");
                cancelFunction();
                disableOpeBtn();

            }
        }
    } if(isNaN(lastValue)){

        alert("Please enter a number");
        cancelFunction();

    }
    
    
}

function disableOpeBtn() {
    btnAdd.disabled = "disabled";
    btnSub.disabled = "disabled";
    btnMult.disabled = "disabled";
    btnDivi.disabled = "disabled";
    numbersBtns.forEach(btn => {
        btn.disabled = "";
    });
}

function enableOpBtn() {
    btnAdd.disabled = "";
    btnSub.disabled = "";
    btnMult.disabled = "";
    btnDivi.disabled = "";
}

function showOperation() {
    screenDiv.appendChild(document.createElement("span")).id = "lastOperation";
    lastOperationSpan = document.querySelector("#lastOperation");
    lastOperationSpan.textContent = opeDone + " =";
}

function hideOperation() {
    if (result >= 0) {
        
        lastOperationSpan.textContent = "";
    }
}

function cancelFunction() {
    screenSpan.textContent = "";
    firstValue = "";
    lastValue = "";
    opeDone = "";
    numbersBtns.forEach(btn => {
        btn.disabled = "";
    });
    disableOpeBtn();
    hideOperation();
    screenSpan.style.color = "black";
}

operationBtns.forEach(opeBtn => {
    
    opeBtn.addEventListener("click", function(){
        btnId = opeBtn.id;
        switch (btnId) {
            case "addBtn":
                firstValue = screenSpan.textContent;
                console.log("Ceci est le premier nombre :" + firstValue);
                
                if (firstValue >= 0) {
                    screenSpan.textContent = "";
                }
                
                opeDone = firstValue + " " + opeBtn.value;
                disableOpeBtn()
                hideOperation()
                break;

            case "substractBtn":
                firstValue = screenSpan.textContent;
                console.log("Ceci est le premier nombre :" + firstValue);
                
                if (firstValue >= 0) {
                    screenSpan.textContent = "";
                } 
                
                opeDone = firstValue + " " + opeBtn.value;
                disableOpeBtn();
                hideOperation();
                break;

            case "multiplicateBtn":
                firstValue = screenSpan.textContent;
                console.log("Ceci est le premier nombre :" + firstValue);
            
                if (firstValue >= 0) {
                    screenSpan.textContent = "";
                }
            
                opeDone = firstValue + " " + opeBtn.value;
                disableOpeBtn();
                hideOperation();
                break;

            case "divisionBtn":
                firstValue = screenSpan.textContent;
                console.log("Ceci est le premier nombre :" + firstValue);
            
                if (firstValue >= 0) {
                    screenSpan.textContent = "";
                }
                opeDone = firstValue + " " + opeBtn.value;
                
                disableOpeBtn();
                hideOperation();
                break;  

            case "equalBtn":

                    lastValue = parseFloat(screenSpan.textContent);
                    equalTo(firstValue,lastValue);
                    screenSpan.style.color = "green";

            break;

            case "cancelBtn":

                cancelFunction()
            
                break;

            default:
                break;
        }
        if (btnId != "equalBtn") {
            screenSpan.style.color = "black";
            btnEqual.disabled = "disabled";
        }
    })
});



const plantOfGarden = ["Trefle","Carotte","Courgette","Maïs"];

function countPlants(plantsToCount) {
    let nbPlant = 0;
    plantsToCount.forEach(plant => {
        nbPlant += 1 ;
        console.log(plant);
        console.log(nbPlant);
    });
}

countPlants(plantOfGarden);
let mot1 = "Gros";
let mot2 = "Con";
const message = 'Bonjour, ' + mot1 + mot2;

console.log(message);

console.log(null || "string");