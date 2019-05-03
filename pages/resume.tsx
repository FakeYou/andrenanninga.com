import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

const Resume = () => (
  <>
    <Head
      title="Résumé | André Nanninga"
      description="Hoi 👋 my name is André. I'm a frontend developer focusing mostly on
    React, React Native and Three.js."
    />
    <Link href="/">
      <a>← back</a>
    </Link>
    <h1>Résumé</h1>
    <p>
      André Nanninga |{' '}
      <Link href="mailto:andre@nannin.ga">
        <a>andre@nannin.ga</a>
      </Link>
    </p>
    <hr />
    <h2>📠 Professional Experience</h2>
    <h3>STRV - Brno, CZ</h3>
    <p>
      <strong>Frontend Developer</strong>
      <br />
      <em>February 2019 - Present</em>
    </p>
    <h3>Tapme Media - Groningen, NL</h3>
    <p>
      <strong>Frontend Developer</strong>
      <br />
      <em>April 2016 - February 2019</em>
    </p>
    <ul>
      <li>Design and development of a multi-customer React Native solution</li>
      <li>
        Continued development and support of an Android app in use at a
        world-renowned museum
      </li>
      <li>Development and deployment of various internal and external tools</li>
      <li>Design of complete techonological architecture</li>
      <li>Mentoring of junior developers</li>
    </ul>
    <h3>Zupr - Groningen, NL</h3>
    <p>
      <strong>Mobile Developer</strong>
      <br />
      <em>August 2018 - December 2018</em>
    </p>
    <ul>
      <li>
        Development of a React Native app for stock management in small stores
      </li>
      <li>Setup of continuous integration and deployment processes</li>
    </ul>
    <h3> Bitsupply - Groningen, NL</h3>
    <p>
      <strong>Fullstack Developer</strong>
      <br />
      <em>January 2015 - July 2015</em>
    </p>
    <ul>
      <li>Development of a WebDAV enabled Node.js fileserver</li>
      <li>Integration of filesystem into React webapp</li>
      <li>General development of React webapp</li>
    </ul>
    <h3> Buyways - Groningen, NL</h3>
    <p>
      <strong>Fullstack Developer</strong>
      <br />
      <em>September 2013 - August 2014</em>
    </p>
    <ul>
      <li>Fullstack development of Meteor webapp</li>
      <li>Frontend development for various exisiting websites</li>
      <li>Javascript development of internal tools</li>
    </ul>
    <h3>Windkr89 - Groningen, NL</h3>
    <p>
      <strong>Webdeveloper</strong>
      <br />
      <em>November 2012 - August 2013</em>
    </p>
    <ul>
      <li>Frontend development for various websites</li>
      <li>Plugin development for Wordpress</li>
    </ul>
    <h3>European School of English - Sliema, MT</h3>
    <p>
      <strong>IT Administration</strong>
      <br />
      <em>January 2012 - May 2012</em>
    </p>
    <ul>
      <li>Identifying and reporting on SEO related issues on public website</li>
      <li>Reporting on possible performance improvements on public website</li>
    </ul>
    <h3>Gamerspawn / Deltashock - Groningen, NL</h3>
    <p>
      <strong>Webdeveloper / Reporter</strong>
      <br />
      <em>April 2009 - January 2012</em>
    </p>
    <ul>
      <li>Interviewing of (game)developers for a popular youtube channel</li>
      <li>Reporting on game related news</li>
      <li>Development of internal tools</li>
    </ul>

    <hr />
    <h2>🎓 Education</h2>
    <h3>Hanzehogeschool - Groningen, NL</h3>
    <p>
      <strong>Bachelor of Science in Software Engineering</strong>
      <br />
      <em>February 2017</em>
    </p>
    <p>
      This education focused on general computer science and applied knowledge
      on development of software and websites.
    </p>

    <h3>Vilnius University - Vilnius, LT</h3>
    <p>
      <strong>Minor in Computer Science</strong>
      <br />
      <em>January 2015</em>
    </p>
    <p>
      This education focused on computer science with a particular focues on
      encoding, encryption and geometry.{' '}
      <small>part of the ERASMUS exchange program</small>
    </p>

    <h3>Alfa College - Groningen, NL</h3>
    <p>
      <strong>Degree in System Administration</strong>
      <br />
      <em>May 2012</em>
    </p>
    <p>
      This education focued on system and network administration including Cisco
      Networking, Microsoft Sharepoint and Windows and Linux System
      Administration.
    </p>

    <hr />
    <h2>🏃‍♂️ Interests</h2>
    <p>
      Running, Game-development, LEGO, Data-visualization, 3D, Animation,
      Generative Art, Procedural Generation, Hiking, Mountainbiking.
    </p>
  </>
)

export default Resume
