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

const Resume = () => (
  <>
    <Head
      title="Résumé | André Nanninga"
      description="Hoi 👋 my name is André. I'm a frontend developer focusing mostly on
    React, React Native and Three.js."
    />

    <Link passHref href="/">
      <A>← back</A>
    </Link>
    <Box my={6}>
      <H1>Résumé</H1>
      <P>
        André Nanninga |{' '}
        <Link passHref href="mailto:andre@nannin.ga">
          <A>andre@nannin.ga</A>
        </Link>
      </P>
    </Box>
    <H2>📠 Professional Experience</H2>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>STRV - Brno, CZ</H3>
      <P>
        <strong>Frontend Developer</strong>
        <br />
        <em>February 2019 - Present</em>
      </P>
    </Box>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>Tapme Media - Groningen, NL</H3>
      <P>
        <strong>Frontend Developer</strong>
        <br />
        <em>April 2016 - February 2019</em>
      </P>
      <Ul>
        <Li>
          Design and development of a multi-customer React Native solution
        </Li>
        <Li>
          Continued development and support of an Android app in use at a
          world-renowned museum
        </Li>
        <Li>
          Development and deployment of various internal and external tools
        </Li>
        <Li>Design of complete techonological architecture</Li>
        <Li>Mentoring of junior developers</Li>
      </Ul>
    </Box>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>Zupr - Groningen, NL</H3>
      <P>
        <strong>Mobile Developer</strong>
        <br />
        <em>August 2018 - December 2018</em>
      </P>
      <Ul>
        <Li>
          Development of a React Native app for stock management in small stores
        </Li>
        <Li>Setup of continuous integration and deployment processes</Li>
      </Ul>
    </Box>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>Bitsupply - Groningen, NL</H3>
      <P>
        <strong>Fullstack Developer</strong>
        <br />
        <em>January 2015 - July 2015</em>
      </P>
      <Ul>
        <Li>Development of a WebDAV enabled Node.js fileserver</Li>
        <Li>Integration of filesystem into React webapp</Li>
        <Li>General development of React webapp</Li>
      </Ul>
    </Box>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>Buyways - Groningen, NL</H3>
      <P>
        <strong>Fullstack Developer</strong>
        <br />
        <em>September 2013 - August 2014</em>
      </P>
      <Ul>
        <Li>Fullstack development of Meteor webapp</Li>
        <Li>Frontend development for various exisiting websites</Li>
        <Li>Javascript development of internal tools</Li>
      </Ul>
    </Box>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>Windkr89 - Groningen, NL</H3>
      <P>
        <strong>Webdeveloper</strong>
        <br />
        <em>November 2012 - August 2013</em>
      </P>
      <Ul>
        <Li>Frontend development for various websites</Li>
        <Li>Plugin development for Wordpress</Li>
      </Ul>
    </Box>

    <Box marginBottom={4}>
      <H3 marginBottom={0}>European School of English - Sliema, MT</H3>
      <P>
        <strong>IT Administration</strong>
        <br />
        <em>January 2012 - May 2012</em>
      </P>
      <Ul>
        <Li>
          Identifying and reporting on SEO related issues on public website
        </Li>
        <Li>
          Reporting on possible performance improvements on public website
        </Li>
      </Ul>
    </Box>

    <Box marginBottom={6}>
      <H3 marginBottom={0}>Gamerspawn / Deltashock - Groningen, NL</H3>
      <P>
        <strong>Webdeveloper / Reporter</strong>
        <br />
        <em>April 2009 - January 2012</em>
      </P>
      <Ul>
        <Li>Interviewing of (game)developers for a popular youtube channel</Li>
        <Li>Reporting on game related news</Li>
        <Li>Development of internal tools</Li>
      </Ul>
    </Box>

    <Box marginBottom={5}>
      <H2>🎓 Education</H2>

      <Box marginBottom={4}>
        <H3 marginBottom={0}>Hanzehogeschool - Groningen, NL</H3>
        <P>
          <strong>Bachelor of Science in Software Engineering</strong>
          <br />
          <em>February 2017</em>
        </P>
        <P>
          This education focused on general computer science and applied
          knowledge on development of software and websites.
        </P>
      </Box>

      <Box marginBottom={4}>
        <H3 marginBottom={0}>Vilnius University - Vilnius, LT</H3>
        <P>
          <strong>Minor in Computer Science</strong>
          <br />
          <em>January 2015</em>
        </P>
        <P>
          This education focused on computer science with a particular focues on
          encoding, encryption and geometry.{' '}
          <small>part of the ERASMUS exchange program</small>
        </P>
      </Box>

      <Box marginBottom={4}>
        <H3 marginBottom={0}>Alfa College - Groningen, NL</H3>
        <P>
          <strong>Degree in System Administration</strong>
          <br />
          <em>May 2012</em>
        </P>
        <P>
          This education focued on system and network administration including
          Cisco Networking, Microsoft Sharepoint and Windows and Linux System
          Administration.
        </P>
      </Box>
    </Box>

    <Box marginBottom={6}>
      <H2>🏃‍♂️ Interests</H2>
      <P>
        Running, Game-development, LEGO, Data-visualization, 3D, Animation,
        Generative Art, Procedural Generation, Hiking, Mountainbiking.
      </P>
    </Box>
  </>
)

export default Resume
