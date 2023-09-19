result =""

function operator(operators){
    if(operators === '+'){
        input1 = parseFloat(document.getElementById("input1").value);
        input2 = parseFloat(document.getElementById("input2").value);
        result = input1 + input2;
    }

    if(operators === '-'){
        input1 = parseFloat(document.getElementById("input1").value);
        input2 = parseFloat(document.getElementById("input2").value);
        result = input1 - input2;
    }

    if(operators === '*'){
        input1 = parseFloat(document.getElementById("input1").value);
        input2 = parseFloat(document.getElementById("input2").value);
        result = input1 * input2;
    }

    if(operators === '/'){
        input1 = parseFloat(document.getElementById("input1").value);
        input2 = parseFloat(document.getElementById("input2").value);
        result = input1 / input2;
    }

    document.getElementById("output").value = result;
}
