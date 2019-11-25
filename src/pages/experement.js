import React from 'react'
import { Link } from "react-router-dom";
import './style.scss';
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'release', count: 25 },
  { value: 'people', count: 18 },
  { value: 'planets', count: 38 },
  { value: 'starships', count: 30 },
  { value: 'species', count: 28 },
  { value: 'vehicles', count: 25 }
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
    key={tag.value}
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
    {tag.value}
  </Link>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
)





// https://github.com/IjzerenHein/react-tag-cloud