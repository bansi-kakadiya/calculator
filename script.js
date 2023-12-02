const calEvent = document.getElementById("cal");
const display = document.getElementsByClassName("main")[0];

calEvent.addEventListener("click", fetchValue);

let prev = 0;
let curr = 0;

let op;
let removePrev = false;
// let multiZero = false;

function fetchValue(event) {
    const { number, opration } = event.target.dataset;

    if (removePrev) {
        removePrev = false;
        display.innerText = "";
    }

    if (number) {
        if (display.innerText === "0") {
            display.innerText = number;
            return;
        }
        display.innerText = display.innerText + number
    } else {
        if (opration) {
            curr = Number(display.innerText);
            if(opration === "c"){
                prev=0;
                curr=0;
                display.innerText = ""
            }
            if(opration === "="){
                // console.log(prev , op, curr)
                opratinoHandler()
            }else{
                // console.log(curr, opration)
                prev = curr;
                op = opration;
                display.innerText = 0;
            }
        }
    }
};

function opratinoHandler() {
    switch (op) {
        case '=':
            // prev = prev - curr;
            // console.log(prev);
            // display.innerText = prev;
            // prev = 0;
            // curr = 0;
            break;
        case '+':
            removePrev = true;
            display.innerText =  prev + curr;
            prev = 0;
            curr = 0;
            break;
        case '-':
            removePrev = true;
            // if (curr > prev) {
            //     prev = curr - prev;
            // } else {
            //     prev = prev - curr;
            // }
            display.innerText = prev-curr;
            prev = 0;
            curr = 0;
            break;
        case '*':
            // removePrev = true;
            // if (prev !== 0) {
            //     if (curr === 0) {
            //         multiZero = true;
            //         prev = 0;
            //     }
            //     prev = prev * curr;
            // } else {
            //     if (multiZero) {
            //         prev = 0
            //     } else {
            //         prev = curr;
            //     }
            // }
            // display.innerText = prev;
            removePrev = true;
            display.innerText =  prev * curr;
            prev = 0;
            curr = 0;
            break;
        case '/':
            removePrev = true;
            display.innerText =  prev / curr;
            prev = 0;
            curr = 0;
            break;
        default:
            break;
    }
}