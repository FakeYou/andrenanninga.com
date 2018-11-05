import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Section from '../components/Section';
import Link from '../components/Link';

const Date = styled.h5`
	margin-top: 4rem;
`;

const Line = styled.hr`
	margin: 4rem 8rem;
`;

export default () => (
	<Layout>
		<Section>
			<small>
				<Link to="/">← back</Link>
			</small>
			<h1>Résumé</h1>

			<p>
				André Nanninga | <Link href="mailto:andre@nannin.ga">andre@nannin.ga</Link>
			</p>

			<Line />

			<h3>📠 Professional Experience</h3>
			<Date>April 2016 - Present</Date>
			<p>
				<strong>Tapme Media - Groningen, NL</strong>
				<br />
				<em>Senior Frontend Developer (web & mobile)</em>
			</p>

			<ul>
				<li>Design and development of a multi-customer React Native solution</li>
				<li>
					Continued development and support of an Android app in use at a world-renowned museum
				</li>
				<li>Development and deployment of various internal and external tools</li>
				<li>Design of complete techonological architecture</li>
				<li>Mentoring of junior developers</li>
			</ul>

			<Date>August 2018 - Present</Date>
			<p>
				<strong>Zupr - Groningen, NL</strong>
				<br />
				<em>Senior Mobile Developer</em>
			</p>

			<ul>
				<li>Development of a React Native app for stock management in small stores</li>
				<li>Setup of continuous integration and deployment processes</li>
			</ul>

			<Date>January 2015 - July 2015</Date>
			<p>
				<strong>Bitsupply - Groningen, NL</strong>
				<br />
				<em>Internship Fullstack Developer</em>
			</p>

			<ul>
				<li>Development of a WebDAV enabled Node.js fileserver</li>
				<li>Integration of filesystem into React webapp</li>
				<li>General development of React webapp</li>
			</ul>

			<Date>September 2013 - August 2014</Date>
			<p>
				<strong>Buyways - Groningen, NL</strong>
				<br />
				<em>Medior Fullstack Developer</em>
			</p>

			<ul>
				<li>Fullstack development of Meteor webapp</li>
				<li>Frontend development for various exisiting websites</li>
				<li>Javascript development of internal tools</li>
			</ul>

			<Date>November 2012 - August 2013</Date>
			<p>
				<strong>Windkr89 - Groningen, NL</strong>
				<br />
				<em>Junior Webdeveloper</em>
			</p>

			<ul>
				<li>Frontend development for various websites</li>
				<li>Plugin development for Wordpress</li>
			</ul>

			<Date>January 2012 - May 2012</Date>
			<p>
				<strong>European School of English - Sliema, MT</strong>
				<br />
				<em>Internship IT Administration</em>
			</p>

			<ul>
				<li>Identifying and reporting on SEO related issues on public website</li>
				<li>Reporting on possible performance improvements on public website</li>
			</ul>

			<Date>April 2009 - January 2012</Date>
			<p>
				<strong>Gamerspawn / Deltashock - Groningen, NL</strong>
				<br />
				<em>Webdeveloper / Reporter</em>
			</p>
			<ul>
				<li>Interviewing of (game)developers for a popular youtube channel</li>
				<li>Reporting on game related news</li>
				<li>Development of internal tools</li>
			</ul>

			<Line />

			<h3>🎓 Education</h3>

			<Date>February 2017</Date>
			<p>
				<strong>Hanzehogeschool - Groningen, NL</strong>
				<br />
				<em>Bachelor of Science in Software Engineering</em>
			</p>
			<p>
				This education focused on general computer science and applied knowledge on development of
				software and websites.
			</p>

			<Date>January 2014</Date>
			<p>
				<strong>Vilnius University - Vilnius, LT</strong>
				<br />
				<em>Minor in Computer Science</em>
			</p>

			<p>
				This education focused on computer science with a particular focues on encoding, encryption
				and geometry. <small>part of the ERASMUS exchange program</small>
			</p>

			<Date>May 2012</Date>
			<p>
				<strong>Alfa College - Groningen, NL</strong>
				<br />
				<em>Degree in System Administration</em>
			</p>

			<p>
				This education focued on system and network administration including Cisco Networking,
				Microsoft Sharepoint and Windows and Linux System Administration.
			</p>

			<Line />

			<h3>🕹 Interests</h3>

			<p>
				Running, Game-development, LEGO, Data-visualization, 3D, Animation, Generative Art,
				Procedural Generation, Hiking, Mountainbiking and Reading.
			</p>

			<p>
				<small>Updated November 2018</small>
			</p>
		</Section>
	</Layout>
);
