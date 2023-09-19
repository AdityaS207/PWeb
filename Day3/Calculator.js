let result = "";

function number(value){
    result += value;
    document.getElementById("result").value = result;
}

function operator(value){
    result += value;
    document.getElementById("result").value = result;
}

function equals(){
    try {
        result = eval(result);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

// function calculate(){
//     let input = document.getElementById("result");
//     let numbers = input.split(/\+|-|\*|\//);
//     let operators = input.split(/\d+/).filter(Boolean);
//     let result = parseFloat(numbers[0]);

//     for (let i = 1; i < numbers.length; i++) {
//         let number = parseFloat(numbers[i]);
//         let operator = operators[i - 1];

//         if (operator === "+") {
//             result += number;
//         } else if (operator === "-") {
//             result -= number;
//         } else if (operator === "*") {
//             result *= number;
//         } else if (operator === "/") {
//             if (number !== 0) {
//                 result /= number;
//             } else {
//                 alert("Division by zero is not allowed.");
//                 return NaN;
//             }
//         }
//     }
// }

function del(){
    result = document.getElementById("result");
    result = result.slice(0,-1);
}

function clearinput() {
    result = "";
    document.getElementById("result").value = result;
}