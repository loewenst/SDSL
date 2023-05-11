/*
popupObject Template

const name = {
  Title: "name",
  InnerHTML: "",
}

*/

const howto = {
  Title: 'How to Play',
  InnerHTML: ''
}

const about = {
  Title: 'About',
  InnerHTML: ''
}

const contact = {
  Title: 'Contact',
  InnerHTML: ''
}

const discuss = {
  Title: 'Join the Discussion',
  InnerHTML: ''
}

const popupObjects = [howto, about, contact, discuss]

const popup = document.getElementById('popup')
const popupTitle = document.getElementById('title')
const popupHTML = document.getElementById('inside')
const playButton = document.getElementById('play')

const displayPopup = (evt) => {
  console.log('click')
  let popupIdx = popupObjects.indexOf(eval(evt.target.id))
  console.log(popupIdx)
  if (popupIdx === -1) return
  popup.style.visibility = 'visible'
  popupTitle.innerHTML = popupObjects[popupIdx].Title
  popupHTML.innerHTML = popupObjects[popupIdx].InnerHTML
}
console.log(popupObjects.indexOf('howto'))
console.log(popupObjects.indexOf(howto))

const close = () => {
  popup.style.visibility = 'hidden'
}

const changeColor = (el) => {
  let count = 0
  setInterval(() => {
    count += 1
    if (count % 2 === 1) {
      el.classList.toggle('color1')
    } else {
      el.classList.toggle('')
    }
  }, 500)
}
changeColor(playButton)

document.getElementById('controls').addEventListener('click', displayPopup)
document.getElementById('close').addEventListener('click', close)
