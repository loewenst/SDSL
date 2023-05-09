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
const song3 = {
  lyrics: 'Oh, where do we begin? </br> The rubble, or our sins?',
  choices: ['Creed', 'Bastille', 'Imagine Dragons', 'Panic! at the Disco'],
  artist: 'Bastille'
}
const song4 = {
  lyrics:
    "I can't remember all the times I tried to tell myself </br> to hold on to these moments as they pass",
  choices: [
    'Counting Crows',
    'The Wallflowers',
    'Jack’s Mannequin',
    'Dave Matthews Band'
  ],
  artist: 'Counting Crows'
}
const song5 = {
  lyrics:
    "We got the bubble-headed bleach-blonde who comes on at five </br> She can tell you about the plane crash with a gleam in her eye </br> It's interesting when people die",
  choices: ['Don Henley', 'U2', 'Panic! at the Disco', 'Green Day'],
  artist: 'Don Henley'
}

const songObjects = [song1, song2, song3, song4, song5]
const readyMesssages = ['Ready', 'Set', 'Go']

//********************* State Variables *********************
let score
let scoreArray = []
let answer = false
let hints
let hardHints = false
let hardQuestions = false
let currentSong

//********************* Cached Elements *********************
const readyMessageEl = document.getElementById('ready')
const lyric = document.getElementById('question')
const choice1 = document.getElementById('answer1')
const choice2 = document.getElementById('answer2')
const choice3 = document.getElementById('answer3')
const choice4 = document.getElementById('answer4')
const scoreBarEls = [...document.getElementsByClassName('score')]
const answerEls = [...document.getElementsByClassName('answer')]

//********************* Functions *********************

const nextQuestion = () => {
  let currentSongId = songObjects.indexOf(currentSong)
  if (currentSongId === 0) {
    songObjects.shift()
  } else {
    songObjects.splice(currentSongId, 1)
  }
  setTimeout(() => {
    answerEls.forEach((answerEl) => {
      answerEl.style.backgroundColor = 'black'
      answerEl.style.color = 'white'
    })
    render()
  }, 1500)
}

const choose = (evt) => {
  console.log(evt.target)
  const answerIdx = answerEls.indexOf(evt.target)
  console.log(answerIdx)
  if (answerIdx === -1) return
  evt.target.style.backgroundColor = 'gray'
  evt.target.style.color = 'black'
  //audio.play()
  console.log(evt.target.innerText)
  timer = setTimeout(() => {
    let currentScoreBox = scoreArray.indexOf(0)
    if (evt.target.innerText === currentSong.artist) {
      evt.target.style.backgroundColor = 'green'
      scoreArray[currentScoreBox] = 1
    } else {
      evt.target.style.backgroundColor = 'yellow'
      answerEls.forEach((answerEl) => {
        if (answerEl.innerText === currentSong.artist) {
          answerEl.style.backgroundColor = 'green'
        }
      })
      scoreArray[currentScoreBox] = -1
    }
    if (scoreArray === [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) {
      win()
    } else if (currentScoreBox === -1) {
      lose()
    } else {
      nextQuestion()
    }
  }, 1500)
}

const populateQuestion = () => {
  currentSong = songObjects[Math.floor(Math.random() * songObjects.length)]
  lyric.innerHTML = currentSong.lyrics
  choice1.innerText = currentSong.choices[0]
  choice2.innerText = currentSong.choices[1]
  choice3.innerText = currentSong.choices[2]
  choice4.innerText = currentSong.choices[3]
}

const renderQuestion = () => {
  count = 0
  readyMessageEl.innerText = readyMesssages[count]
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
  setTimeout(populateQuestion, 2250)
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

document.getElementById('answerspace').addEventListener('click', choose)
