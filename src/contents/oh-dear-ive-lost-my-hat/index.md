---
layout: single.html
title: "Oh Dear, I've Lost My Hat"
subtitle: Ludum Dare 22
collection: articles
date: 2011-12-19
slug: oh-dear-ive-lost-my-hat
image: oh-dear-ive-lost-my-hat.png
playground: true
scripts:
	- index.min.js
---

Oh Dear, I've Lost My Hat was my first ever html/js game. It was also my first ever [Ludum Dare](http://www.ludumdare.com/compo/) game. Ludum Dare is a game jam with the goal to make a game in only 48 hours. The theme for this Ludum Dare was _[Alone](http://ludumdare.com/compo/ludum-dare-22/?action=preview)_.

My game tells the tragic story of a man who lost his hat in the middle of a dense forest. The goal is to find his hat and return to back home so he no longer has te be alone. You move around by clicking on the map where you want to go and the man will automatically move to this location.

## Technical details

When I made this game the html `<canvas>` tag was still brand new, I didn't have any experience with it and there weren't yet many resources on how to use it. Because of this I decided to take a different aproach.

Because of the 48 hour deadline I didn't have time to try and learn new technology and I had to resort to hackish solutions. Every tile, tree, car and character is actually a `<div>` with a sprite as a background. This is a very crude and inefficient technique but it meant that I could use technologies that I was familiar with like jQuery and css. 

## Results

As this was my first entry in the Ludum Dare competition I didn't really know what to expect or how well my game would be receive. When the first comments started to arrive I was very eager to read what other people saw. 

People seemed to enjoy it, noting that they liked the graphic style and humor. Some critique was that the game was too easy and short and the the pathfinding made the game to easy. [Notch](https://twitter.com/notch) even left a small reply which at the time was pretty significant for me.

When the results came in I was very surprised to see that I managed to get the _12th place_ in the category _graphics_ and _#186_ overall. I was very happy with these results and I'm still participating in Ludum Dare as often as I can.

<small>[Oh Dear, I've Lost My Hat on ludumdare.com](http://ludumdare.com/compo/ludum-dare-22/?action=preview&uid=7326#action=preview&uid=398)<small>