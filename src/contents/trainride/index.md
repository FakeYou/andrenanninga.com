---
layout: single.html
title: Train Ride
date: 2015-03-25
collection: article
slug: trainride
image: trainride.png
scripts: 
  - js1k.min.js
---

Suspendisse in blandit ex. Nunc feugiat lorem posuere ante aliquam, quis eleifend ex blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam faucibus pellentesque sem, a feugiat lacus tempor at. Integer consequat ex eu massa laoreet, sit amet ullamcorper elit tincidunt. Sed tristique ac felis in scelerisque. Nullam arcu urna, tempus non lobortis non, fringilla vitae ante. Cras eros tellus, porta vitae felis in, tincidunt lacinia enim. Praesent a consequat velit. Quisque finibus dui id eros suscipit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Aenean nisl ex, volutpat at sapien eu, gravida mollis mauris. Etiam lacinia neque et rutrum posuere. Proin nisi sapien, interdum vel sapien nec, condimentum commodo diam. Donec viverra pretium aliquam. Phasellus id lectus id nunc luctus interdum eu eu arcu. Proin malesuada risus sem, eget laoreet lectus dapibus ac. Morbi sit amet mi rhoncus, sollicitudin risus ut, euismod odio. Cras tincidunt urna nec velit pharetra tempor.

### Minified code

```javascript
for(_='c.Z=ZY,ZX"XV,-U1)On(N)+"L"#Ki>J16H)XGGl(FFH0UE3200,Dm(-DHB?KAP>30A@P+dNi,Zline(),
0==S=i*MMath.b(FSGf&&(,y=-i*IStyle=(e%O*m[l]":-unction20;"rg"+( %150==+VE+Ni-1,for(L,"+
(strokefillf Nc,l){return =||randomc||1==c?-8:l6||l7?0:8*siNc-9*)}d=e=t=64,M=32,I=
HXmYmoveToXl=ToXfYfillXbYbeginPathXtYtranslate,m=[]Xt(480,320),setInterval(f{e+=.6,
d=~~eXsaveXt(-M,+I),i=-i<i++)P=P>=-P--)S=P*M+i*M=i*I-P*I,h=~~),T=Nh,i)>5i<0||J2G+h+
1MI++OM+O-38*T-MI)G()6A3331==iAb52i<3&&J-1A953T? 76-h+2*P1H-3*h30-h-iL) 113-h+3*PH1-
hL,6OVfi)%4<1Z),S-=8Xl(StGquadraticCurveTo(S-64,S-2*tG);Width=2.1;J-i-=.5)Xm(S-6322+1O;
ZXGKaaaVB00FD-H00GBHFD-1584GXrestore,i=8;J0;i--){+i%2*2-2*t-i%2+t,P=5;P<32;P+=2)C=8-P+
yXGP<9A435J6&&@d48J6Ac03@fc5Kfb1Vl(S,I+CM,C8-P-M,C;i<7ZK026V4228142884+4)}
ZKddd66F139U77E87XKfff87F128U103F108U93F140U77},35);
';g=/[^ -?CIMPSTW[-~]/.exec(_);)with(_.split(g))_=join(shift());eval(_)
```

Aenean nisl ex, volutpat at sapien eu, gravida mollis mauris. Etiam lacinia neque et rutrum posuere. Proin nisi sapien, interdum vel sapien nec, condimentum commodo diam. Donec viverra pretium aliquam. Phasellus id lectus id nunc luctus interdum eu eu arcu. Proin malesuada risus sem, eget laoreet lectus dapibus ac. Morbi sit amet mi rhoncus, sollicitudin risus ut, euismod odio. Cras tincidunt urna nec velit pharetra tempor.

### Actual code

```javascript
// jshint ignore: start

// canvas:  window.a
// body:    window.b
// context: window.c
d = e = t = 64;
M = 32;
N = 16;

c.m = c.moveTo
c.l = c.lineTo;
c.f = c.fill;
c.b = c.beginPath;
c.t = c.translate;
// c.lineWidth=1.5;
m = []

function n(x, y) {
  // // create a map with random values
  m[y] = m[y] || Math.random();

  // // create an elevated path for the train tracks
  if(x == 0 || x == 1) { 
    return -8;
  }

  // // create a path for the road
  if((y % 150) == 6 || (y % 150) == 7) {
    return 0;
  }

  return Math.sin(x - m[y] * 9) * 8;
}

// set the zero point of the canvas in the center
c.t(480,320)

setInterval(function() {
  e += 0.6;
  d = ~~e;
  c.save();
  c.t(-(e%1)*M, +(e%1)*N);

  for(i = -20; i < 20; i++) {
    for(j = 20; j >= -20; j--) {
      // isometric coordinates
      x = j * M + i * M;
      y = i * N - j * N;

      // get the height for these coordinates
      h = ~~n(i, j+d);

      // determine if this tile should be a tree
      T = n(h,i) > 5 && (i < 0 || i > 2);

      // draw the tile
      c.b();

      c.l(x,     y + h + 1);                      // bottom corner
      c.l(x + M, y - N + n(i, j+d+1));    // right corner
      c.l(x,     y - M + n(i-1, j+d+1) -T*38);  // top corner
      c.l(x - M, y - N + n(i-1, j+d));    // left corner

      // set tile color
      c.fillStyle =
        // if tile is road
        (j+d) % 150 == 6 ?
          '#333' 
        // else if tile is train track
        : i == 1 ?
          '#b52' 
        // else if sides of train track
        : i < 3 && i > -1 ? 
          '#953'
        // else if tile is tree
        : T ? 
          'rgb('+(76-h+j*2)+','+(116-h*3)+','+(30-h-i)+')'
        // else
        : 
          'rgb('+(113-h+j*3)+','+(161-h)+','+(61)+')';

      // fill the tile
      c.f();

      // every 4th tile draw a pole
      if(i == 0 && (j+d) % 4 < 1) {
        c.b();
        x -= 8;

        c.l(x,y);                             // bottom
        c.l(x,y-t);                           // top
        c.quadraticCurveTo(x-64,y,x-t*2,y); // wire

        // stroke
        c.stroke();
      }
    }
  }

  // draw sleepers
  c.lineWidth = 2.1
  for(; i > -20; i-=0.5) {
    x = i * M;
    y = - i * N;
    c.m(x-6, y-3)
    c.l(x+22,y+11)
  }
  c.stroke();
  c.b()

  // draw rail tracks
  c.strokeStyle = '#aaa'
  c.m(-3200, 1600);
  c.l(3200, -1600);
  c.m(-3200, 1616);
  c.l(3200, -1584);
  c.stroke();
  c.restore();

  // draw wagons
  for(i = 8; i > 0; i--) {
    x = i * M + (i%2)*2 - t*2;
    y = -i * N - (i%2) + t;
    
    for(j = 5; j < 32; j+=2){
      J = 8 - j + y;
      c.b();

      // set train color
      c.fillStyle = 
        // if bottom
        j < 9 ?
          '#435' 
        // if top of engine
        : i > 6 && j > 30 ?
          '#d48'
        // if engine
        : i > 6 ?
          '#c03'
        // else if top
        : j > 30 ?
          '#fc5'
        // else
        :
          '#fb1';

      c.l(x, N + J);
      c.l(x + M, J);
      c.l(x, y - 8 - j);
      c.l(x - M, J);
      c.f();
    }

    // windows
    if(i < 7) {
      c.fillStyle = '#026';
      c.b();
      c.l(x + 4, y - 2);
      c.l(x + 28, y - 14);
      c.l(x + 28, y - 8);
      c.l(x + 4, y + 4);
      c.f();
    }
  }

  // engine cabin side
  c.fillStyle = '#ddd';
  c.b();
  c.l(160, -66);
  c.l(139, -77);
  c.l(160, -87);
  c.f();

  // engine cabin top
  c.fillStyle = '#fff';
  c.b();
  c.l(160, -87);
  c.l(128, -103);
  c.l(108, -93);
  c.l(140, -77);
  c.f();

}, 35);
```