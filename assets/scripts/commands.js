'use strict';
import Typed from 'typed.js';

const content = document.querySelector('.input-box');

const resetResults = function () {
  $('.results').html('');
};

let startText = 'Data Science is super easy! Type &grave;why&grave; to find out why!';
let mistakeText = 'Hmmm, that\'s not quite right. Check your spelling and caps!';
let whyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... Type &grave;graph&grave; to make a graph!';
let tempGraphText = '[temporary filler until I have a graph set up!]';
let start;
let why;
let mistake;
let graph;

const submit = function (e) {
  e.preventDefault();
  resetResults();
  switch (content.value) {
    case 'start':
      start = new Typed('.results', {
        strings: [startText],
        typeSpeed: 30,
      });
      $('.instructions').html('Next step: &grave;why&grave;');
    break;
    case 'why':
      why = new Typed('.results', {
        strings: [whyText],
        typeSpeed: 30,
      });
      $('.instructions').html('Next step: &grave;graph&grave;');
    break;
    case 'graph':
      graph = new Typed('.results', {
        strings: [tempGraphText],
        typeSpeed: 30,
      });
    break;
    default:
      mistake = new Typed('.results', {
        strings: [mistakeText],
        typeSpeed: 30,
      });
    break;
  }
};

const skipPreview = function (e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: $('#dsi').offset().top,
  }, 1000);
};

const addEventHandlers = () => {
  $('.user-form').on('submit', function () {
    submit(event);
    $('span').addClass('hidden');
  });
  $('.skip-link').on('click', skipPreview);
};

module.exports = {
  addEventHandlers,
};
