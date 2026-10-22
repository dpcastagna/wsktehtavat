'use strict';

const num = parseInt(prompt('Give a positive integer: '));
let html = '<h2>Multiplication table</h2> <table>';

if (num > 0) {
  for (let i = 1; i <= num; i++) {
    html += '<tr>';
    for (let j = 1; j <= num; j++) {
      html += '<td>&nbsp&nbsp' + i * j + '&nbsp&nbsp</td>';
    }
    html += '</tr>';
  }

  html += '</table>';

  document.querySelector('#target').innerHTML = html;
}
