"use strict"

let elects = document.querySelectorAll('.heart-img');

for (let elect of elects) {
  elect.onclick = function () {
    alert("Добавлено в избранное");
  };
};