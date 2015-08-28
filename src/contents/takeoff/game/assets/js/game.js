/* global Keyboard:false */

'use strict';

var canvas = document.getElementById('canvas');
var helicopter = document.getElementById('helicopter');
var context = canvas.getContext('2d');

var UP = [38, 87];
var RIGHT = [39, 68];
var DOWN = [40, 83];
var LEFT = [37, 65];

var cycle = [UP, RIGHT, DOWN, LEFT];
var last = Date.now();
var delta = 0;
var altitude = 0;
var score = 0;
var force = 0;

document.addEventListener('keydown', function(event) {
  document.getElementById('up').className = 'key';
  document.getElementById('right').className = 'key';
  document.getElementById('down').className = 'key';
  document.getElementById('left').className = 'key';

  if(cycle[0].indexOf(event.keyCode) !== -1) {
    cycle.push(cycle.shift());
    force = 4;
  }

  if(cycle[0] === UP) {
    document.getElementById('up').className = 'key highlight';
  }
  else if(cycle[0] === RIGHT) {
    document.getElementById('right').className = 'key highlight';
  }
  else if(cycle[0] === DOWN) {
    document.getElementById('down').className = 'key highlight';
  }
  else if(cycle[0] === LEFT) {
    document.getElementById('left').className = 'key highlight';
  }
});

var update = function() {
  delta = Date.now() - last;
  last = Date.now();

  altitude += force;
  force -= delta / 40;

  if(force < 0) {
    force = 0;
  }
  
  if(altitude > 0) {
    altitude -= delta / 40;
    altitude -= altitude / 200;
  }
  else {
    altitude = 0;
  }

  if(altitude > score) {
    score = altitude;
  }

  document.getElementById('score').innerHTML = Math.round(score);

  context.clearRect(0, 0, 1000, 640);

  context.fillStyle = '#96D5CD';
  context.fillRect(0, 0, 1000, 640);

  context.drawImage(helicopter, 485, 600 - altitude);

  context.fillStyle = '#7EB073';
  context.fillRect(0, 615, 1000, 200);

  context.fillStyle = '#E3D9CF';
  context.fillRect(460, 615, 80, 4);

  requestAnimationFrame(update);
};


update();