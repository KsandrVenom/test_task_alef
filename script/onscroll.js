"use strict";


let upButton = document.querySelector('.button-up');

window.onscroll = function () {
  if (window.pageYOffset > 0) {
  upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};


