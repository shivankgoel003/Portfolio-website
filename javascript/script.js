// js/script.js

const text = "Hey there! Nice to see you ...";
const typingElement = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

window.addEventListener("DOMContentLoaded", type);
