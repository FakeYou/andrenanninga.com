'use strict';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var input = document.getElementById('input');

var words = [
  'power',
  'energy',
  'electricity',
  'spirit',
  'stamina',
  'strength',
  'tough',
  'toughness',
  'powerful',
  'powers',
  'exertion',
  'fire',
  'force',
  'juice',
  'life',
  'might',
  'muscle',
  'potency',
  'steam',
  'potential',
  'skill',
  'talent',
  'aptitude',
  'source',
  'steam',
  'nuclear',
  'coal',
  'oil',
  'sun',
  'solar',
  'wind',
  'water'
];

var total = 0;
var current = 0;

input.addEventListener('keydown', function(event) {
  if(event.keyCode === 13) {
    var word = input.value;
    // use()

    var index = words.indexOf(word);
    if(index !== -1) {
      total += word.length * 5;
      words.splice(index, 1);
    }

    if(total > 120) {
      document.getElementById('winner').style.display = 'block';
    }

    input.value = '';
  }
});

function draw() {
  context.clearRect(0, 0, 1000, 640);
  context.fillStyle = '#f0f0f0';
  context.fillRect(0, 0, 1000, 640);

  if(current < total) {
    current += 1;
  }

  var sword = document.getElementById('sword');
  context.drawImage(sword, 450, 350 - current);

  var stone = document.getElementById('stone');
  context.drawImage(stone, 400, 400);

  requestAnimationFrame(draw);
}

draw();