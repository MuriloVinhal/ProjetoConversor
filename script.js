let inputFah = document.getElementById("fahrenheit");
let inputCelsius = document.getElementById("kelvin");
let resultado1 = document.getElementById("resultado1");
console.log(inputFah, inputCelsius);
function calcular() {

    let kelvin = inputCelsius.value;
    let fakr = inputFah.value



    let calculoKelvin = calculok();
    let calculofare = calculof();

    resultado1.innerHTML = `<p>${Math.ceil(calculofare)} é o valor em farenheitg<p>`
    resultado1.innerHTML += `<p>${Math.ceil(calculoKelvin)} é o valor em Kelvin<p>`;
    function calculok() {

        let C = kelvin - 273
        return C;
    }
    function calculof() {

        let Celsius = (fakr - 32) / 1.8;
        return Celsius;
    }
}
