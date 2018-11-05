import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Link from '../components/Link';

export default () => (
	<Layout>
		<Section>
			<h1>André Nanninga</h1>
			<p>
				Hoi 👋 my name is André. I'm a frontend developer focusing mostly on React, React Native and
				Three.js. You can usually find me in Brno 🇨🇿 or Groningen 🇳🇱
			</p>
		</Section>

		<Section>
			<h2>🔬 Projects & experiments</h2>
			<p>Here are some other projects & experiments I work on in my spare time.</p>
			<p>
				<Link href="https://fakeyou.github.io/tomb-raider">Tomb Raider</Link> —{' '}
				<span>An experiment to display Tomb Raider 2 levels with three.js</span>
			</p>
			<p>
				<Link href="https://www.mleuven.be/en/app">M Leuven App</Link> —{' '}
				<span>Mobile app for M Museum in Leuven created with React Native</span>
			</p>
			<p>
				<Link href="https://fakeyou.github.io/ludum-dare-40/">Snake 🐍 Charmer</Link> —{' '}
				<span>span game made for Ludum Dare 40</span>
			</p>
			<p>
				<Link href="https://www.rtrn.nl/portfolio/vnn/">Suzie</Link> —{' '}
				<span>App to support people struggling with addictions, created using React Native</span>
			</p>
			<p>
				<Link href="https://js1k.com/2015-hypetrain/demo/2325">JS1K 2015 — Train Ride</Link>
			</p>
		</Section>

		<Section>
			<small>Currently I am working for</small>
			<h2>
				🎨 <Link href="https://www.tapart.me">Tapart</Link>
			</h2>
			<blockquote>
				Building apps, websites, audio- and multimediatours, experiences and other cool stuff for
				museums and the cultural sector.
			</blockquote>
			<p>
				At Tapart we are building a platform for museums and the cultural sector to easily create
				engaging multimediatours for their customers. We are using React Native to simultaneously
				target Android, iOS and dedicated hardware.
			</p>
			<p>
				As we are startup with a small but dedicated team I take on most of the technical
				responsibilty. While my expertise is in front-end developing I find myself working on every
				layer of our stack regularly.
			</p>
			<p>
				Among our clients are <Link href="https://www.vangoghmuseum.nl/">🌻 Van Gogh Museum</Link> ,{' '}
				<Link href="https://www.mleuven.be/">Museum M</Link> in Leuven,{' '}
				<Link href="https://www.boijmans.nl/en">Museum Boijmans van Beuningen</Link> in Rotterdam
				and <Link href="http://www.groningermuseum.nl/">Groninger Museum</Link>.
			</p>
			<br />
			<p>
				I am also working with <Link href="https://zupr.io">Zupr</Link> to build their mobile apps.
			</p>
		</Section>

		<Section>
			<h3>Previously I also worked for</h3>
			<p>
				<em>
					Bitsupply <small>(now defunct)</small>
				</em>{' '}
				— Fullstack project working on integrating WebDAV support into a <em>social intranet</em>{' '}
				platform. The platform and integration were written in Node.js and React.
			</p>
			<p>
				<em>
					Buyways{' '}
					<small>
						(now known as <Link href="https://www.opencii.nl/">Opencii</Link>)
					</small>
					.
				</em>{' '}
				— Fullstack development on webapps, using <Link href="https://www.meteor.com/">Meteor</Link>
				, mostly for clients in the public transport sector.
			</p>

			<p>
				Please view my <Link to="/resume">résumé</Link> for more detailed info regarding my
				experience.
			</p>
		</Section>

		<Section>
			<h2>Get in touch 📨</h2>
			<p>
				Send me an email at <Link href="mailto:andre@nannin.ga">andre@nannin.ga</Link> or find me on{' '}
				<Link href="https://twitter.com/andrenanninga">Twitter</Link> and{' '}
				<Link href="https://github.com/fakeyou">Github</Link>.
			</p>
		</Section>
	</Layout>
);
