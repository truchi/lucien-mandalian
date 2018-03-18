import             './main.scss'
import $      from 'jquery'
import Home   from './classes/Home'
import img1   from './images/project1.jpg'
import img2   from './images/project2.jpg'
import img3   from './images/project3.jpg'

const data = [{
  text: {
    number  : '01',
    title   : 'Fondation<br />Air France',
    subtitle: 'Art direction, UI-UX'
  },
  image: img1
},{
  text: {
    number  : '02',
    title   : 'Michelin',
    subtitle: 'Art direction, UI-UX'
  },
  image: img2
},{
  text: {
    number  : '03',
    title   : 'Fondation Bettencourt',
    subtitle: 'Art direction, UI-UX'
  },
  image: img3
}]

const $home = $('#home')
const home  = new Home({ data })
console.log(home)
window.home = home

$home.append(home.$)
