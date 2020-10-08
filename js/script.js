let nuevaentrada = true;
const result = document.getElementById('result');
const calc = document.getElementById('calc');
const clear = document.getElementById('clear');
const history = document.getElementById("history");

calc.addEventListener('click', fcalc);
clear.addEventListener('click', fclear);
clearHistory.addEventListener('click', fclearH);

const numbers = document.querySelectorAll('button.number');
for (const btn of numbers) {
    btn.addEventListener('click', function (e) {
        add(this.value);
    });
}

function add(key) { 
    let current = result.textContent
    if ((current == "0" || nuevaentrada) && key == '.') {
        current = "0.";
    } else if (nuevaentrada && !['+', '-', '*', '/'].includes(key)) {
        current = key;
    } else  if (key != '.' || !current.includes('.')) {
        current = (current != '0' || isNaN(key)) ? current + key : key;
    }
    result.textContent = current;
    nuevaentrada = false;
}

function fcalc() {
    const operacion = result.textContent;
    result.textContent = eval(operacion); 
    if (operacion != result.textContent)
        faddH(`${operacion} = ${result.textContent}`);
    nuevaentrada = true;
}

function fclear() { 
    nuevaentrada = true;
    result.textContent = 0;
}

function faddH(s) {
    history.innerHTML += `<li>${s}</li>`;
}

function fclearH() {
    history.innerHTML = "";
}