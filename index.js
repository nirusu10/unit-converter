/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberInput = document.getElementById('number-input')
const convertButton = document.getElementById('convert-btn')
const lengthDisplay = document.getElementById('conversion-length')
const volumeDisplay = document.getElementById('conversion-volume')
const massDisplay = document.getElementById('conversion-mass')

convertButton.addEventListener('click', function () {
  const value = Number(numberInput.value)

  lengthDisplay.innerHTML = `${value} meters = ${convertMetersToFeet(
    value
  )} feet | ${value} feet = ${convertFeetToMeters(value)} meters`

  volumeDisplay.innerHTML = `${value} liters = ${convertLitersToGallons(
    value
  )} gallons | ${value} gallons = ${convertGallonsToLiters(value)} liters`

  massDisplay.innerHTML = `${value} kilos = ${convertKgToLbs(
    value
  )} pounds | ${value} punds = ${convertLbsToKg(value)} kilos`
})

function convertMetersToFeet(lengthInM) {
  return (lengthInM * 3.281).toFixed(3)
}

function convertFeetToMeters(lengthInF) {
  return (lengthInF / 3.281).toFixed(3)
}

function convertLitersToGallons(volumeInL) {
  return (volumeInL * 0.264).toFixed(3)
}

function convertGallonsToLiters(volumeInGallons) {
  return (volumeInGallons / 0.264).toFixed(3)
}

function convertKgToLbs(massInKg) {
  return (massInKg * 2.204).toFixed(3)
}

function convertLbsToKg(massInLbs) {
  return (massInLbs / 2.204).toFixed(3)
}
