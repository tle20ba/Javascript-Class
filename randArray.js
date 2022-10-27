let numArray = [];

function addToArray(){
    let num = document.getElementById("input").value;
    num = Number(num);
    numArray.push(num);

    let sum = 0;
    numArray.forEach(function(numItem, index){
        sum = sum + numItem;
    })

    let pEl = document.getElementById("output");
    pEl.innerText = numArray;

    let pEl = document.getElementById("output");
    pE1.innerText = numArray;

    let pEl2 = document.getElementById("sum");
    pE12.innerText = sum;


}