/*
popupObject Template

const name = {
  Title: "name",
  InnerHTML: "",
}

*/

const howto = {
  Title: 'How to Play',
  InnerHTML: `Surprisingly Deep Song Lyrics (SDSL) works largely the same way as Who Wants to be a Millionaire: there are a series of questions, with four possible answers to each one, and if you get all the questions right, you win. Get a question wrong, you lose. There are even hints you can use - three per turn on easy mode, and three for the whole game on hard - kind of like Millionaire’s lifelines. The main difference - besides for not actually being able to win a million dollars - is that all the questions are song lyrics, and the answers are artists, one of which sang the song with the lyrics being displayed. And because the deeper purpose of this game is to showcase the awesome depth song lyrics can have, after each question a popup displays some of my reflections on why the lyrics pack a punch.`
}

const about = {
  Title: 'About',
  InnerHTML: `Welcome! Surprisingly Deep Song Lyrics, or SDSL, is a happy outgrowth of my applying my interests to an assignment I was given while learning to code. A kind of "coding practice meets passion project." It's basically a gamified way to get players to pay more attention to song lyrics, and to notice that they can be - well, surprisingly deep. Guess it says it all in the name! Whether you pay attention to song lyrics already or you never paid any attention to them before, I hope this game opens your eyes to some really profound, powerful prose (or I guess poetry, technically).`
}

const contact = {
  Title: 'Contact',
  InnerHTML: `Have some feedback? Found a bug? Want to recommend another song to add to the game? </br></br> Send me an email!</br>I'd love to hear from you.</br></br><form action="mailto:dzl205@nyu.edu" method="post" enctype="text/plain"><input type="text" size="80"></form>`
}

const discuss = {
  Title: 'Thanks',
  InnerHTML: `Thanks to the GE instructors for helping me out with different parts of the code, especially Ashley Sands and Jan Horak.</br></br>
  Thanks to GE SEI-R-4-24 Pod 3 (you know who you are) for all the chances to learn from your code and to talk things out. Special shoutout to Anthony Medina for pointing me to some solid sound libraries.`
}

const popupObjects = [howto, about, contact, discuss]

const popup = document.getElementById('popup')
const popupTitle = document.getElementById('title')
const popupHTML = document.getElementById('inside')
const playButton = document.getElementById('play')

const displayPopup = (evt) => {
  let popupIdx = popupObjects.indexOf(eval(evt.target.id))
  if (popupIdx === -1) return
  popup.style.visibility = 'visible'
  popupTitle.innerHTML = popupObjects[popupIdx].Title
  popupHTML.innerHTML = popupObjects[popupIdx].InnerHTML
}

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
