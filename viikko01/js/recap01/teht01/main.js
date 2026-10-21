'use strict';

const temp = prompt('Give the temperature in celcius: ');
document.querySelector('#target').innerHTML =
  temp +
  ' celsius is ' +
  parseFloat((parseFloat(temp) * 9) / 5 + 32) +
  ' in fahrenheit and ' +
  parseFloat(parseFloat(temp) + 273.15) +
  ' in kelvin.';
