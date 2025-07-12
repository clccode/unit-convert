/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")


// Grab the elements where the conversions will be rendered
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

// Conversion values
const meterPerFoot = 3.281
const literPerGallon = 0.264
const kiloPerPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    // if-else statement to render the singular if "1" is the input value
    if (baseValue > 1) {
        lengthEl.textContent = `${baseValue} meters = ${(meterPerFoot * baseValue).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterPerFoot).toFixed(3)} meters`
        volumeEl.textContent = `${baseValue} liters = ${(literPerGallon * baseValue).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literPerGallon).toFixed(3)} liters`
        massEl.textContent = `${baseValue} kilograms = ${(kiloPerPound * baseValue).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloPerPound).toFixed(3)} kilograms`
    } else {
        lengthEl.textContent = `${baseValue} meter = ${(meterPerFoot * baseValue).toFixed(3)} feet | ${baseValue} foot = ${(baseValue / meterPerFoot).toFixed(3)} meters`
        volumeEl.textContent = `${baseValue} liter = ${(literPerGallon * baseValue).toFixed(3)} gallons | ${baseValue} gallon = ${(baseValue / literPerGallon).toFixed(3)} liters`
        massEl.textContent = `${baseValue} kilogram = ${(kiloPerPound * baseValue).toFixed(3)} pounds | ${baseValue} pound = ${(baseValue / kiloPerPound).toFixed(3)} kilograms`
    } 
})