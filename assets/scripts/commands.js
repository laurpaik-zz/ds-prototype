'use strict';
import Typed from 'typed.js';

const content = document.querySelector('.input-box');

const resetForm = function() {
  content.value = '';
};

const resetResults = function () {
  $('.results').html('');
};

let startText = '<p>Data Science is super easy!';
let mistakeText = '<p>Hmmm, that\'s not quite right. Check your spelling and caps!</p>';
let lorem = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'

const submit = function (e) {
  e.preventDefault();
  resetResults();
  if (content.value === 'start') {
    let start = new Typed(".results", {
        strings: [startText],
        typeSpeed: 30,
      });
    resetForm();
  } else if (content.value === 'why'){
    let why = new Typed('.results', {
      strings: [lorem],
      typeSpeed: 30,
    })
  } else {
    let mistake = new Typed('.results', {
      strings: [mistakeText],
      typeSpeed: 30,
    });
  }
};

const addEventHandlers = () => {
  $('.user-form').on('submit', function () {
    submit(event);
    console.log(content.value, 'CONTENT');
  });
};

module.exports = {
  addEventHandlers
};
