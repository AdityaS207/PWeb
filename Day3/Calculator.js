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
//     var input = document.getElementById("result");
//     var numbers = input.split(/\+|-|\*|\//);
//     var operators = input.split(/\d+/).filter(Boolean);
//     var result = parseFloat(numbers[0]);

//     for (var i = 1; i < numbers.length; i++) {
//         var number = parseFloat(numbers[i]);
//         var operator = operators[i - 1];

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