//********************* Fixed Variables *********************
/*
Song Object Template:

const song1 = {
  lyrics: '',
  choices: [],
  artist: ''
}
*/

const song1 = {
  lyrics:
    "Don't it make you sad to know that life </br> is more than who we are",
  choices: [
    'The Goo Goo Dolls',
    'The Smashing Pumpkins',
    'All Time Low',
    'Counting Crows'
  ],
  artist: 'The Goo Goo Dolls'
}
const song2 = {
  lyrics: 'My dreams are bursting at the seams',
  choices: ['Owl City', 'Taylor Swift', 'Backstreet Boys', 'A Great Big World'],
  artist: 'Owl City'
}

const songObjects = [song1]
const readyMesssages = ['Ready', 'Set', 'Go']

//********************* State Variables *********************
let score
let scoreArray = []
let answer = false
let hints
let hardHints = false
let hardQuestions = false

//********************* Cached Elements *********************
const readyMessageEl = document.getElementById('ready')
const lyric = document.getElementById('question')
const choice1 = document.getElementById('answer1')
const choice2 = document.getElementById('answer2')
const choice3 = document.getElementById('answer3')
const choice4 = document.getElementById('answer4')
const scoreBarEls = [...document.getElementsByClassName('score')]

//********************* Functions *********************

const populateQuestion = () => {
  let currentSong = songObjects[Math.floor(Math.random() * songObjects.length)]
  lyric.innerHTML = currentSong.lyrics
  choice1.innerText = currentSong.choices[0]
  choice2.innerText = currentSong.choices[1]
  choice3.innerText = currentSong.choices[2]
  choice4.innerText = currentSong.choices[3]
}

const renderQuestion = () => {
  count = 0
  readyMessageEl.style.visibility = 'visible'
  const timer = setInterval(() => {
    count++
    if (count < 3) {
      readyMessageEl.innerText = readyMesssages[count]
    } else {
      clearInterval(timer)
      readyMessageEl.style.visibility = 'hidden'
    }
  }, 750)
  setTimeout(populateQuestion, 2000)
}

//since I made this an array, not sure if the style change will work
const renderScoreBar = () => {
  scoreBarEls.forEach((scoreBarEl, idx) => {
    if (scoreArray[idx] === 1) {
      scoreBarEl.style.backgroundColor = 'rgb(65, 140, 202)'
    } else if (scoreArray[idx] === -1) {
      scoreBarEl.innerText = 'X'
    }
  })
}

const render = () => {
  renderScoreBar()
  renderQuestion()
}

const init = () => {
  scoreArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  hints = 4
  hardHints = false
  hardQuestions = false
  render()
}

init()

//********************* Event Handlers *********************
