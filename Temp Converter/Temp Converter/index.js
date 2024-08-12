
//temperature converter program
const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const toKelvin = document.getElementById("toKelvin")
const toKelvin2 = document.getElementById("toKelvin2")
const result = document.getElementById("Result")
let temp; //you need to let it without a value cuz youre a going to aasing it later



function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + "°C"
    }
    else if(toKelvin.checked) {
        temp = Number(textBox.value);
        temp = temp + 273.15; 
        result.textContent = temp.toFixed(1) + "K"
    }
    else if(toKelvin2.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9) + 273.15;
        result.textContent = temp.toFixed(1) + "K"
    }
    else {
        result.textContent  = "Select a unit"
    }
}