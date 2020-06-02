import React from 'react'
import { Link } from "react-router-dom";
import './style.scss';
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'release', text: 'release', count: 30 },
  { value: 'release', text: 'year', count: 22 },
  { value: 'release', text: 'episode', count: 19 },
  { value: 'people',  text: 'people', count: 28 },
  { value: 'people',  text: 'hero', count: 24 },
  { value: 'planets', text: 'planets', count: 32 },
  { value: 'starships', text: 'starships', count: 30 },
  { value: 'species', text: 'species', count: 28 },
  { value: 'vehicles', text: 'vehicles', count: 31 },

  // { value: 'HTML5', count: 33 },
  // { value: 'CSS3', count: 20 },
  // { value: 'Webpack', count: 22 },
  // { value: 'Babel.js', count: 7 },
  // { value: 'ECMAScript', count: 25 },
  // { value: 'Jest', count: 15 },
  // { value: 'Mocha', count: 17 },
  // { value: 'React Native', count: 27 },
  // { value: 'Angular.js', count: 30 },
  // { value: 'TypeScript', count: 15 },
  // { value: 'Flow', count: 30 },
  // { value: 'NPM', count: 11 },
]


// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size, color) => (
  <Link to={tag.value}
    key={tag.text}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.text}
  </Link>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
)





// https://github.com/IjzerenHein/react-tag-cloud