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
const masks = [
  { r: 15, cx: 57, cy: 40 },
  { r:  4, cx: 31, cy: 52 },
  { r:  4, cx: 40, cy: 84 }
]

const $home = $('#home')
const home  = new Home({ data, masks })
console.log(home)
window.home = home

$home.append(home.$)
$(window).on('keydown', e => {
  switch (e.key) {
  case 'ArrowRight':
    home.next()
    break
  case 'ArrowLeft':
    home.prev()
    break
  }
})
