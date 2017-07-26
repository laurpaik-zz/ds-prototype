'use strict';

const content = document.querySelector('.input-box');

const reset = function() {
  content.value = '';
};

// need edge cases for misspellings, case errors, etc
const onStart = function (e) {
  e.preventDefault();
  console.log('START');
  if (content.value === 'start') {
    console.log('HEY');
    $('.results').text('hey');
    reset();
  }
  else if (content.value === 'why'){
    console.log('NO');
    $('.results').text('why');
  }
};

const addEventHandlers = () => {
  $('.user-form').on('submit', function () {
    onStart(event);
    console.log(content.value, 'CONTENT');
  });
};

module.exports = {
  onStart,
  addEventHandlers
};
