import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

const Index = () => (
  <>
    <Head
      description="Hoi 👋 my name is André. I'm a frontend developer focusing mostly on
      React, React Native and Three.js"
    />
    <h1>André Nanninga</h1>
    <p>
      Hoi 👋 my name is André. I'm a frontend developer focusing mostly on
      React, React Native and Three.js. You can usually find me in Brno 🇨🇿 or
      Groningen 🇳🇱
    </p>
    <h2>🔬 Projects & experiments</h2>
    <p>
      Here are some other projects & experiments I work on in my spare time.
    </p>
    <ul>
      <li>
        <Link href="https://fakeyou.github.io/tomb-raider">
          <a target="_blank">Tomb Raider</a>
        </Link>{' '}
        — An experiment to display Tomb Raider 2 levels with three.js
      </li>

      <li>
        <Link href="https://www.mleuven.be/en/app">
          <a target="_blank">M Leuven App</a>
        </Link>{' '}
        — Mobile app for M Museum in Leuven created with React Native
      </li>

      <li>
        <Link href="https://fakeyou.github.io/ludum-dare-40/">
          <a target="_blank">Snake 🐍 Charmer</a>
        </Link>{' '}
        — Game made for Ludum Dare 40
      </li>

      <li>
        <Link href="https://www.rtrn.nl/portfolio/vnn/">
          <a target="_blank">Suzie</a>
        </Link>{' '}
        — App to support people struggling with addictions, created using React
        Native
      </li>

      <li>
        <Link href="https://js1k.com/2015-hypetrain/demo/2325">
          <a target="_blank">JS1K 2015 — Train Ride</a>
        </Link>
      </li>
    </ul>
    <small>Currently I am working for</small>
    <h2>
      <Link href="https://www.strv.com">
        <a target="_blank">STRV</a>
      </Link>
    </h2>
    <blockquote>Human-centered Design & Technology</blockquote>
    <small>Previously I also worked for</small>
    <h3>
      <Link href="https://www.tapart.me">
        <a target="_blank">🎨 Tapart</a>
      </Link>
    </h3>
    <blockquote>
      Building apps, websites, audio- and multimediatours, experiences and other
      cool stuff for museums and the cultural sector.
    </blockquote>
    <p>
      Tapart is building a platform for museums and the cultural sector to
      easily create engaging multimediatours. They use React Native to
      simultaneously target Android, iOS and dedicated hardware.
    </p>
    <p>
      As Tapart is a startup with a small but dedicated team I took on most of
      the technical responsibilty. While my expertise is in frontend developing,
      I found myself working on every layer of our stack regularly.
    </p>
    <p>
      Amongst Taparts clients are{' '}
      <Link href="https://www.vangoghmuseum.nl">
        <a target="_blank">🌻 Van Gogh Museum</a>
      </Link>
      ,{' '}
      <Link href="https://www.mleuven.be/">
        <a target="_blank">Museum M</a>
      </Link>{' '}
      in Leuven,{' '}
      <Link href="https://www.boijmans.nl/en">
        <a target="_blank">Museum Boijmans van Beuningen</a>
      </Link>{' '}
      in Rotterdam and{' '}
      <Link href="http://www.groningermuseum.nl/">
        <a target="_blank">Groninger Museum</a>
      </Link>
      .
    </p>
    <h3>
      <Link href="https://zupr.com">
        <a target="_blank">🛍 Zupr</a>
      </Link>
    </h3>
    <blockquote>The online link for offline sales</blockquote>
    <h4>🖥 Bitsupply</h4>
    <p>
      Fullstack project working on integrating WebDAV support into a{' '}
      <em>social intranet</em> platform. The platform and integration were
      written in Node.js and React.
    </p>
    <h4>
      🏢 Buyways{' '}
      <small>
        (now known as{' '}
        <Link href="https://www.opencii.nl/">
          <a target="_blank">Opencii</a>
        </Link>
        )
      </small>
    </h4>
    <p>
      Fullstack development on webapps, using{' '}
      <Link href="https://www.meteor.com/">
        <a target="_blank">Meteor</a>
      </Link>
      , mostly for clients in the public transport sector.
    </p>
    <hr />
    <p>
      Please view my{' '}
      <Link href="/resume">
        <a>résumé</a>
      </Link>{' '}
      for more detailed info regarding my experience.
    </p>
    <h2> Get in touch 📨</h2>
    <p>
      Send me an email at{' '}
      <Link href="mailto:andre@nannin.ga">
        <a target="_blank">andre@nannin.ga</a>
      </Link>{' '}
      or find me on{' '}
      <Link href="https://twitter.com/andrenanninga">
        <a target="_blank">Twitter</a>
      </Link>{' '}
      and{' '}
      <Link href="https://github.com/fakeyou">
        <a target="_blank">Github</a>
      </Link>
      .
    </p>
  </>
)

export default Index
