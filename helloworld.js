let counter = 0;

function logText() {
    counter = counter + 2;
    let str ="Hello World " + counter;

    let paragraphElement = document.getElementById("paragraph1");

    paragraphElement.innerText = str;
    paragraphElement.style.backgroundColor = "royalblue";

    console.log("paragraph id is: " + paragraphElement.id);
}
