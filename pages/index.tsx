import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Ul,
  Li,
  A,
  Blockquote,
} from '../components/Typography'
import { Box } from '../components/Grid'

const Index = () => (
  <>
    <Head
      description="Hoi 👋 my name is André. I'm a frontend developer focusing mostly on
      React, React Native and Three.js"
    />
    <Box my={6}>
      <H1>André Nanninga</H1>
      <P>
        Hoi 👋 my name is André. I'm a frontend developer focusing mostly on
        React, React Native and Three.js. You can usually find me in Brno 🇨🇿 or
        Groningen 🇳🇱
      </P>
    </Box>

    <Box marginBottom={5}>
      <H2>🔬 Projects & experiments</H2>
      <P>
        Here are some other projects & experiments I work on in my spare time.
      </P>
      <Ul>
        <Li>
          <Link passHref href="https://fakeyou.github.io/tomb-raider">
            <A target="_blank">Tomb Raider</A>
          </Link>{' '}
          — An experiment to display Tomb Raider 2 levels with three.js
        </Li>

        <Li>
          <Link passHref href="https://www.mleuven.be/en/app">
            <A target="_blank">M Leuven App</A>
          </Link>{' '}
          — Mobile app for M Museum in Leuven created with React Native
        </Li>

        <Li>
          <Link passHref href="https://fakeyou.github.io/ludum-dare-40/">
            <A target="_blank">Snake 🐍 Charmer</A>
          </Link>{' '}
          — Game made for Ludum Dare 40
        </Li>

        <Li>
          <Link passHref href="https://www.rtrn.nl/portfolio/vnn/">
            <A target="_blank">Suzie</A>
          </Link>{' '}
          — App to support people struggling with addictions, created using
          React Native
        </Li>

        <Li>
          <Link passHref href="https://js1k.com/2015-hypetrain/demo/2325">
            <A target="_blank">JS1K 2015 — Train Ride</A>
          </Link>
        </Li>
      </Ul>
    </Box>

    <Box marginBottom={5}>
      <small>Currently I am working for</small>
      <H2 marginTop={0}>
        <Link passHref href="https://www.strv.com">
          <A target="_blank">STRV</A>
        </Link>
      </H2>
      <Blockquote>Human-centered Design & Technology</Blockquote>
    </Box>

    <Box marginBottom={5}>
      <small>Previously I also worked for</small>
      <H3 marginTop={0}>
        <Link passHref href="https://www.tapart.me">
          <A target="_blank">🎨 Tapart</A>
        </Link>
      </H3>
      <Blockquote>
        Building apps, websites, audio- and multimediatours, experiences and
        other cool stuff for museums and the cultural sector.
      </Blockquote>
      <P>
        Tapart is building a platform for museums and the cultural sector to
        easily create engaging multimediatours. They use React Native to
        simultaneously target Android, iOS and dedicated hardware.
      </P>
      <P>
        As Tapart is a startup with a small but dedicated team I took on most of
        the technical responsibilty. While my expertise is in frontend
        developing, I found myself working on every layer of our stack
        regularly.
      </P>
      <P>
        Amongst Taparts clients are{' '}
        <Link passHref href="https://www.vangoghmuseum.nl">
          <A target="_blank">🌻 Van Gogh Museum</A>
        </Link>
        ,{' '}
        <Link passHref href="https://www.mleuven.be/">
          <A target="_blank">Museum M</A>
        </Link>{' '}
        in Leuven,{' '}
        <Link passHref href="https://www.boijmans.nl/en">
          <A target="_blank">Museum Boijmans van Beuningen</A>
        </Link>{' '}
        in Rotterdam and{' '}
        <Link passHref href="http://www.groningermuseum.nl/">
          <A target="_blank">Groninger Museum</A>
        </Link>
        .
      </P>
    </Box>

    <Box marginBottom={5}>
      <H3>
        <Link passHref href="https://zupr.com">
          <A target="_blank">🛍 Zupr</A>
        </Link>
      </H3>
      <Blockquote>The online link for offline sales</Blockquote>
    </Box>

    <Box marginBottom={4}>
      <H4>🖥 Bitsupply</H4>
      <P>
        Fullstack project working on integrating WebDAV support into a{' '}
        <em>social intranet</em> platform. The platform and integration were
        written in Node.js and React.
      </P>
    </Box>
    <Box marginBottom={5}>
      <H4>
        🏢 Buyways{' '}
        <small>
          (now known as{' '}
          <Link passHref href="https://www.opencii.nl/">
            <A target="_blank">Opencii</A>
          </Link>
          )
        </small>
      </H4>
      <P>
        Fullstack development on webapps, using{' '}
        <Link passHref href="https://www.meteor.com/">
          <A target="_blank">Meteor</A>
        </Link>
        , mostly for clients in the public transport sector.
      </P>
    </Box>
    <Box>
      <P>
        Please view my{' '}
        <Link passHref href="/resume">
          <A>résumé</A>
        </Link>{' '}
        for more detailed info regarding my experience.
      </P>
    </Box>
    <Box marginTop={6} marginBottom={5}>
      <H2> Get in touch 📨</H2>
      <P>
        Send me an email at{' '}
        <Link passHref href="mailto:andre@nannin.ga">
          <A target="_blank">andre@nannin.ga</A>
        </Link>{' '}
        or find me on{' '}
        <Link passHref href="https://twitter.com/andrenanninga">
          <A target="_blank">Twitter</A>
        </Link>{' '}
        and{' '}
        <Link passHref href="https://github.com/fakeyou">
          <A target="_blank">Github</A>
        </Link>
        .
      </P>
    </Box>
  </>
)

export default Index
