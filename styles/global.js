import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45 'Open Sans', sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    color: #000;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress,
  sub,
  sup {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }
  a,
  abbr[title] {
    text-decoration: none;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    color: #ff5700;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  abbr[title] {
    border-bottom: none;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.5);
    cursor: help;
  }
  dfn {
    font-style: italic;
  }
  h1,
  img {
    padding: 0;
    margin-bottom: 1.16rem;
  }
  h1 {
    font-size: 2em;
    color: inherit;
    font-family: 'Domine', sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    margin: 0 0 0.67em;
  }
  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
    max-width: 100%;
    margin: 0;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    margin-bottom: calc(1.16rem - 1px);
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    height: 1px;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  b,
  dt,
  optgroup,
  strong,
  th {
    font-weight: 700;
  }
  button,
  hr,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
  }
  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'],
  legend {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: inherit;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    color: inherit;
    font-family: 'Domine', sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    font-size: 1.51572rem;
  }
  h3,
  h4,
  h5,
  h6 {
    font-size: 1.31951rem;
  }
  h4,
  h5,
  h6 {
    font-size: 1rem;
  }
  h5,
  h6 {
    font-size: 0.87055rem;
  }
  h6 {
    font-size: 0.81225rem;
  }
  address,
  dd,
  dl,
  figure,
  form,
  hgroup,
  iframe,
  noscript,
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding: 0;
    margin-bottom: 1.16rem;
  }
  fieldset,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul {
    margin-bottom: 1.16rem;
  }
  fieldset {
    margin: 0;
    padding: 0;
  }
  li > ol,
  li > ul,
  ol,
  ul {
    margin-left: 1.45rem;
  }
  ol,
  ul {
    margin-top: 0;
    list-style-position: outside;
    list-style-image: none;
  }
  ol,
  pre,
  table,
  ul {
    margin-right: 0;
    padding: 0;
  }
  pre {
    font-size: 0.85rem;
  }
  blockquote,
  pre,
  table {
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 1.16rem;
    line-height: 1.45rem;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;
  }
  blockquote {
    margin-right: 1.45rem;
    padding-bottom: 0;
    padding-left: 1.17812rem;
    padding-right: 0;
    padding-top: 0;
    font-size: 1.1487rem;
    color: rgba(0, 0, 0, 0.59);
    font-style: italic;
    border-left: 0.27187rem solid rgba(0, 0, 0, 0.9);
  }
  li,
  li > ol,
  li > p,
  li > ul {
    margin-bottom: calc(1.16rem / 2);
  }
  ol li,
  ul li {
    padding-left: 0;
  }
  li > ol,
  li > ul {
    margin-top: calc(1.16rem / 2);
  }
  blockquote :last-child,
  blockquote > :last-child,
  li :last-child,
  p :last-child {
    margin-bottom: 0;
  }
  code,
  kbd,
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  abbr,
  acronym {
    border-bottom: 1px dotted rgba(0, 0, 0, 0.5);
    cursor: help;
  }
  td,
  th,
  thead {
    text-align: left;
  }
  td,
  th {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }
  td:first-child,
  th:first-child {
    padding-left: 0;
  }
  td:last-child,
  th:last-child {
    padding-right: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }
  a:active,
  a:hover {
    color: #000;
  }
  blockquote cite {
    font-size: 1rem;
    line-height: 1.45rem;
    color: #000;
    font-weight: 400;
  }
  blockquote cite:before {
    content: '— ';
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
    blockquote {
      margin-left: -1.0875rem;
      margin-right: 0;
      padding-left: 0.81562rem;
    }
  }
`

export { GlobalStyle }
