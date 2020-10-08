let operandoa = "0";
let operandob = "0";
let operacion = "";
let nuevaentrada = true;
let finished = true;
var clic = 0;

const result = document.getElementById('result');
const calc = document.getElementById('calc');
const clear = document.getElementById('clear');

calc.addEventListener('click', fcalc);
clear.addEventListener('click', fclear);
clearHistory.addEventListener('click', fclearH);

const numbers = document.querySelectorAll('button.number');
for (const btn of numbers) {
    btn.addEventListener('click', function (e) {
        add(this.value);
    });
}

const symbols = document.querySelectorAll('button.symbol');
for (const btn of symbols) {
    btn.addEventListener('click', function (e) {
        if (operandoa == 0 || finished) {
            operandoa = result.textContent;
            operacion = this.value;
            console.log(operandoa, operacion, operandob);
            clic=0;
        } else {
            operandob = result.textContent;
            console.log(operandoa, operacion, operandob);
            result.textContent = eval(operandoa + operacion + operandob);
            operandoa = result.textContent;
            operacion = this.value;
        }
        nuevaentrada = true;
        finished = false;
    });
}

function add(key) { 
    let current = result.textContent
    if ((current == "0" || nuevaentrada) && key == '.') {
        current = "0.";
    } else  if (key != '.' || !current.includes('.')) {
        current = (!nuevaentrada && (current != '0' || isNaN(key))) ? current + key : key;
    }
    result.textContent = current;
    nuevaentrada = false;
}

function fcalc() {
    if (clic == 0) {
        operandob = result.textContent;
        console.log(operandoa, operacion, operandob);
        result.textContent = eval(operandoa + operacion + operandob); 
        document.getElementById("history").innerHTML += operandoa+operacion+operandob+"="+result.textContent+"<br/>";
        operandoa = result.textContent;
        nuevaentrada = true;
        finished = true;
        clic++;
    } 
}

function fclear() { 
    operandoa = "0";
    operandob = "0";
    operacion = "";
    nuevaentrada = true;
    finished = true;
    result.textContent = 0;
    click=0;
}

function fclearH(){
    document.getElementById("history").innerHTML = "";
}