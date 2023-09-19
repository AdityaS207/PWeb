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

function del(){
    result = document.getElementById("result");
    result = result.slice(0,-1);
}

function clearinput() {
    result = "";
    document.getElementById("result").value = result;
}