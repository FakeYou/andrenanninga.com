import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';

export default () => (
	<Layout>
		<Section>
			<h1>André Nanninga</h1>
			<p>
				Hoi 👋 my name is André. I'm a frontend developer focusing mostly on React Native and
				Three.js. Most of my time I spent in Brno 🇨🇿 and Groningen 🇳🇱
			</p>
		</Section>

		<Section>
			<small>Currently I am working for</small>
			<h2>
				🎨 <a href="https://www.tapart.me">Tapart</a>
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
				Among our clients are <a href="https://www.vangoghmuseum.nl/">🌻 Van Gogh Museum</a> ,{' '}
				<a href="https://www.mleuven.be/">Museum M</a> in Leuven,{' '}
				<a href="https://www.boijmans.nl/en">Museum Boijmans van Beuningen</a> in Rotterdam and{' '}
				<a href="http://www.groningermuseum.nl/">Groninger Museum</a>.
			</p>
			<br />
			<p>
				I am also working with <a href="https://zupr.io">Zupr</a> to build their mobile apps.
			</p>
		</Section>

		<Section>
			<h2>🔬 Projects & experiments</h2>

			<p>Here are some other projects & experiments I work on in my spare time.</p>

			<h4>
				<a href="https://fakeyou.github.io/tomb-raider">Tomb Raider</a> —{' '}
				<small>Tomb Raider 2 map, object and animation inspector</small>
			</h4>

			<h4>
				<a href="https://fakeyou.github.io/shooter">Shooter</a> —{' '}
				<small>First person shooter set in a musky dungeon</small>
			</h4>

			<h4>
				<a href="https://www.yogaoffice.se">Yoga at the Office</a>
			</h4>
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
						(now known as <a href="https://www.opencii.nl/">Opencii</a>)
					</small>
					.
				</em>{' '}
				— Fullstack development on webapps, using <a href="https://www.meteor.com/">Meteor</a>, for
				clients in the public transport sector.
			</p>
			<p>
				<em>
					Windkr89 —{' '}
					<small>
						<a href="#">www.windkr89.nl</a>
					</small>
				</em>
			</p>
			<p>
				<em>
					Aspin —{' '}
					<small>
						<a href="#">www.aspin.nl</a>
					</small>
				</em>
			</p>
		</Section>

		<Section>
			<h2>Get in touch 📨</h2>
			<p>
				Send me an email at <a href="mailto:andre@nannin.ga">andre@nannin.ga</a> or find me on{' '}
				<a href="https://github.com/andrenanninga">Github</a>.
			</p>
		</Section>
	</Layout>
);
