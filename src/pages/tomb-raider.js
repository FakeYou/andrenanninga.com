import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Link from '../components/Link';

export default () => (
	<Layout>
		<Section>
			<small>
				<Link to="/">← back</Link>
			</small>
			<h1>Tomb Raider</h1>
			<p>
				Hoi 👋 my name is André. I'm a frontend developer focusing mostly on React, React Native and
				Three.js. You can usually find me in Brno 🇨🇿 or Groningen 🇳🇱
			</p>
		</Section>
	</Layout>
);
