import './main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import img1 from './images/project1.jpg'
import img2 from './images/project2.jpg'
import img3 from './images/project3.jpg'

const slides = [{
  number  : '01',
  title   : 'Fondation Air France',
  subtitle: 'Art direction, UI-UX',
  image   : img1
},{
  number  : '02',
  title   : 'Michelin',
  subtitle: 'Art direction, UI-UX',
  image   : img2
},{
  number  : '03',
  title   : 'Fondation Bettencourt',
  subtitle: 'Art direction, UI-UX',
  image   : img3
}]

ReactDOM.render(
  <Home slides={ slides }></Home>,
  document.getElementById('root')
);
