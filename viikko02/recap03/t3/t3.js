'use strict';

// add your code here
const target = document.getElementById('target');

const browser = document.createElement('p');
const version = document.createElement('p');
const os = document.createElement('p');
const screen = document.createElement('p');
const screenAvailable = document.createElement('p');
const dateNow = document.createElement('p');

let userAgentString = navigator.userAgent.split(' ');
let browserName = '';
let browserVersion = '';
const event = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

if (navigator.userAgent.includes('Edg')) {
  browserName = userAgentString[userAgentString.length - 1].split('/')[0];
  browserVersion = userAgentString[userAgentString.length - 1].split('/')[1];
} else if (navigator.userAgent.includes('Firefox')) {
  browserName = userAgentString[userAgentString.length - 1].split('/')[0];
  browserVersion = userAgentString[userAgentString.length - 1].split('/')[1];
} else if (navigator.userAgent.includes('Chrome')) {
  browserName = userAgentString[userAgentString.length - 2].split('/')[0];
  browserVersion = userAgentString[userAgentString.length - 2].split('/')[1];
}

browser.textContent = 'Browser name: ' + browserName;
version.textContent = 'Browser version: ' + browserVersion;
os.textContent =
  'Operating system: ' + navigator.userAgent.split('(')[1].split(';')[0];
screen.textContent =
  'Screen width and height:' +
  window.screen.width +
  'px, ' +
  window.screen.height +
  'px';
screenAvailable.textContent =
  'Screen available width and height:' +
  window.screen.availWidth +
  'px, ' +
  window.screen.availHeight +
  'px';
dateNow.textContent =
  'Date and time: ' + event.toLocaleDateString('fi-FI', options);

target.append(browser);
target.append(version);
target.append(os);
target.append(screen);
target.append(screenAvailable);
target.append(dateNow);
