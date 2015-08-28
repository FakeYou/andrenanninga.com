/* global Keyboard:false */

'use strict';

var canvas = document.getElementById('canvas');
var overlay = document.getElementById('overlay');
var timerFace = document.getElementById('timerface');
var timerBase = document.getElementById('timerbase');
var timerTicking = document.getElementById('timerticking');
var timerRinging = document.getElementById('timerringing');
var timerWinding = document.getElementById('timerwinding');
var context = canvas.getContext('2d');

var start = Date.now();
var last = Date.now();
var delta = 0;

var gameover = false;
var started = false;

var mousedown = false;
var mouse = { x: 0, y: 0 };

overlay.addEventListener('mouseup', function(e) {
  started = true;
  overlay.style.display = 'none';
});

canvas.addEventListener('mousedown', function(e) {
  mousedown = true;
  mouse.x = e.layerX;
  mouse.y = e.layerY;
});

canvas.addEventListener('mouseup', function(e) {
  mousedown = false;
  mouse.x = e.layerX;
  mouse.y = e.layerY;
});

canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.layerX;
  mouse.y = e.layerY;
});

var Timer = function(x, y) {
  this.x = x;
  this.y = y;

  this.time = Math.random() * 30 + 15;
  this.timerTicking = timerTicking.cloneNode();
  this.timerRinging = timerRinging.cloneNode();
  this.timerWinding = timerWinding.cloneNode();

  this.timerTicking.currentTime = Math.random() * 10;

  this.update = function(delta) { 

    // console.log(this.timerTicking)

    if(!gameover) {
      if(this.time < 0) {
        this.timerTicking.pause();
        this.timerRinging.play();
        gameover = true;
      }
      else {
        this.time -= delta / 1000;
        this.timerTicking.play();
      }

      if(mousedown && this.time < 60 &&
        mouse.x > this.x - 50 && 
        mouse.x < this.x + 50 && 
        mouse.y > this.y - 50 &&
        mouse.y < this.y + 50) {

        this.timerTicking.pause();
        this.timerWinding.play();
        this.time += delta / 1000 * 4;
      }
      else {
        this.timerWinding.pause();
        this.timerWinding.currentTime = 0;
      }
    }
    else {
      this.timerTicking.pause();
      this.timerWinding.pause();
    }

    this.draw();
  };

  this.draw = function() {
    context.save();

    context.translate(this.x - 50, this.y - 50);
    context.drawImage(timerBase, 0, 0);
    context.translate(50, 50);
    context.rotate(this.time / 60 * 360 * Math.PI/180);
    context.translate(-50, -50);
    context.drawImage(timerFace, 0, 0);

    context.restore();
  }
};

var timers = [];

for(var i = 0; i < 9; i++) {
  var x = i % 3 * 100 + 400;
  var y = Math.floor(i / 3) * 100 + 200;

  timers.push(new Timer(x, y));
}

var now = 0;

var update = function() {
  context.clearRect(0, 0, 1000, 640);

  if(!started) {
    for(var i = 0; i < timers.length; i++) {
      timers[i].draw();
    }
  }
  else {

    delta = Date.now() - last;
    last = Date.now();

    if(!gameover) {
      now = Date.now() - start;
    }

    document.getElementById('score').innerHTML = Math.floor(now / 1000);

    for(var i = 0; i < timers.length; i++) {
      timers[i].update(delta);
    }
  }

  requestAnimationFrame(update);
};


update();