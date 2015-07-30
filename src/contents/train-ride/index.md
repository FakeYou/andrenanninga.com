---
layout: single.html
title: Train Ride
subtitle: JS1k 2015
date: 2015-03-25
collection: articles
slug: train-ride
image: trainride.png
playground: true
scripts: 
  - trainride.min.js
---

[JS1k](http://js1k.com/) is a code golfing competition challenging programmers to create a neat little JavaScript program in under 1024 bytes. This years theme was [Hype Train](http://js1k.com/2015-hypetrain/).

I found out about this competition in March and thought that could make for a nice little side project. I didn't have any particular idea of what to make but I knew that I wanted to make something that had a nice look to it, something that looked polished.


Fairly quickly I had something that looked like the above demo but that exceeded the limit of 1024 bytes by quite a bit. I started at first by using single letter variables and making short references to often used function. For example `canvas.moveTo` became `c.m`. This made a little dent in the size but turned out to be not that helpful later<sup>1</sup>. Using the obvious solution of [uglify-js](https://www.npmjs.com/package/uglify-js) was a much bigger help in reducing the file size.

However the biggest gain was found by looking at the techniques used by other entries in the older competitions. [RegPack](https://github.com/Siorki/RegPack/) is a library that turns the code intro a string and replaces commonly used substrings within the code with a regex match. During runtime the regex is used to restore the original string which is then run using `eval()`. Try the [demo](http://siorki.github.io/regPack.html) to see it in action.

RegPack shaved about 200 bytes of my minified code and proved to be invaluable.

<sup>[1] RegPack replaces commonly used substrings with regex. While I haven't actually tested it I suspect it would do a better job at shortening the final code than I did.</sup>

## Train Ride

Finally i submitted a program simply called [Train Ride](http://js1k.com/2015-hypetrain/demo/2325). The code and supporting libraries can be found in this [GitHub repo](https://github.com/FakeYou/js1k-2015). The fully minified code that was submitted for judgement in the competition looked like this:

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