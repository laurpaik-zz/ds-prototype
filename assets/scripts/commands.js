'use strict';
import Typed from 'typed.js';

const content = document.querySelector('.input-box');
const dsi = $('#dsi');

const resetResults = function () {
  $('.results').html('');
};

let startText = 'Data Science is super easy! Type &grave;why&grave; to find out why!';
let mistakeText = 'Hmmm, that\'s not quite right. Check your spelling and caps!';
let whyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\
 eiusmod tempor incididunt ut labore et dolore magna aliqua... Type \
 &grave;graph&grave; to make a graph!';

const submit = function (e) {
  e.preventDefault();
  resetResults();
  switch (content.value) {
    case 'start':
      let start = new Typed(".results", {
        strings: [startText],
        typeSpeed: 30,
      });
      $('.instructions').html('&grave;why&grave;')
    break;
    case 'why':
      let why = new Typed(".results", {
        strings: [whyText],
        typeSpeed: 30,
      });
      $('.instructions').html('&grave;graph&grave;')
    break;
    default:
      let mistake = new Typed(".results", {
        strings: [mistakeText],
        typeSpeed: 30,
      });
    break;
  }
};

const skipPreview = function (e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: dsi.offset().top
  }, 1000);
};

const addEventHandlers = () => {
  $('.user-form').on('submit', function () {
    submit(event);
  });
  $('.skip-link').on('click', function () {
    skipPreview(event);
  });
};

module.exports = {
  addEventHandlers
};
