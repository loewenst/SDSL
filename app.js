//********************* Fixed Variables *********************
/*
Song Object Template:

const song = {
  lyrics: '',
  choices: [],
  artist: '',
  hints: {
    hint1: "",
    hint2: "",
    hint3: "",
    hint4: ""
  }
}
*/

//Song Object:
const song1 = {
  lyrics:
    "Don't it make you sad to know that life </br> is more than who we are",
  choices: [
    'The Goo Goo Dolls',
    'The Smashing Pumpkins',
    'All Time Low',
    'Counting Crows'
  ],
  artist: 'The Goo Goo Dolls',
  hints: {
    hint1: 'This song was released in September 1995.',
    hint2:
      'The band’s biggest hit was part of the soundtrack for ‘City of Angels.’',
    hint3:
      "Here are the next lines of the song: </br> You grew up way too fast </br> And now there's nothing to believe </br> Then reruns all become our history </br> A tired song keeps playing on a tired radio </br> And I won't tell no one your name",
    hint4: 'Eventually this will be an audio clip.'
  }
}
const song2 = {
  lyrics: 'My dreams are bursting at the seams',
  choices: ['Owl City', 'Taylor Swift', 'Backstreet Boys', 'A Great Big World'],
  artist: 'Owl City',
  hints: {
    hint1: `This song was inspired by the singer's insomnia.`,
    hint2:
      'Here are some other lyrics from the song: </br> A foxtrot above my head </br> A sock hop beneath my bed </br> A disco ball is just hanging by a thread',
    hint3:
      'The band was asked to produce a pop version of “Waving through the Window” by the writers of “Dear Evan Hansen."',
    hint4: 'Eventually this will be an image.'
  }
}

const song3 = {
  lyrics: 'Oh, where do we begin? </br> The rubble, or our sins?',
  choices: ['Creed', 'Bastille', 'Imagine Dragons', 'Panic! at the Disco'],
  artist: 'Bastille',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
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
  artist: 'Counting Crows',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}
const song5 = {
  lyrics:
    "We got the bubble-headed bleach-blonde who comes on at five </br> She can tell you about the plane crash with a gleam in her eye </br> It's interesting when people die",
  choices: ['Don Henley', 'U2', 'Panic! at the Disco', 'Green Day'],
  artist: 'Don Henley',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}
const song6 = {
  lyrics:
    "So when weakness turns my ego up </br> I know you'll count on the me from yesterday",
  choices: ['Incubus', 'Panic! at the Disco', 'Hoobastank', '3 Doors Down'],
  artist: 'Incubus',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}

const song7 = {
  lyrics: 'Hope that you spend your days </br> but they all add up',
  choices: ['Jason Mraz', 'Imagine Dragons', 'OneRepublic', 'Matchbox 20'],
  artist: 'OneRepublic',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}

const song8 = {
  lyrics: 'Oh yeah, life goes on </br> long after the thrill of living is gone',
  choices: [
    'John Mellencamp',
    'Johnny Cash',
    'My Chemical Romance',
    'Fall Out Boy'
  ],
  artist: 'John Mellencamp',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}

const song9 = {
  lyrics:
    "She said like it or not it's the way it's gotta be </br> You've gotta love yourself if you can ever love me",
  choices: ['Lifehouse', '*N SYNC', 'Maroon 5', 'John Legend'],
  artist: 'Lifehouse',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}

const song10 = {
  lyrics: "You don't know me now </br> I kinda thought that you should somehow",
  choices: ['Simple Plan', 'Justin Bieber', 'Matchbox 20', 'The Weeknd'],
  artist: 'Matchbox 20',
  hints: {
    hint1: '',
    hint2: '',
    hint3: '',
    hint4: ''
  }
}

const songObjects = [
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10
]
const readyMesssages = ['Ready', 'Set', 'Go']

//********************* State Variables *********************
let score
let scoreArray = []
let answer = false
let hints
let hintbar = false
let hardHints = false
let hardQuestions = false
let currentSong
let hint1
let hint2
let hint3
let hint4
//let noClick = false

//********************* Cached Elements *********************
const readyMessageEl = document.getElementById('ready')
const lyric = document.getElementById('question')
const choice1 = document.getElementById('answer1')
const choice2 = document.getElementById('answer2')
const choice3 = document.getElementById('answer3')
const choice4 = document.getElementById('answer4')
const scoreBarEls = [...document.getElementsByClassName('score')]
const answerEls = [...document.getElementsByClassName('answer')]
const startEls = [...document.getElementsByClassName('start')]
const hintEls = [...document.getElementsByClassName('hint')]
const popupTitleEl = document.getElementById('popupHeading')
const popupTextEl = document.getElementById('prompt')

//********************* Functions *********************

//Durstenfeld shuffle
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

const displayHint = (evt) => {
  const hintIdx = hintEls.indexOf(evt.target)
  console.log(hintIdx)
  if (hintIdx === -1) return
  document.getElementById('popup').style.visibility = 'visible'
  popupTitleEl.innerHTML = currentSong.lyrics
  //popupTextEl.innerText = hint[hintIdx] hint[0] hint1

  let hintArray = [hint1, hint2, hint3, hint4]
  popupTextEl.innerHTML = hintArray[hintIdx]
}

const toggleHints = () => {
  console.log('click')
  if (hintbar === true) {
    console.log('true')
    document.getElementById('hintbar').style.visibility = 'hidden'
    document.getElementById('togglehints').style.right = '0'
    hintbar = false
  } else if (hintbar === false) {
    console.log('false')
    document.getElementById('hintbar').style.visibility = 'visible'
    document.getElementById('togglehints').style.right = '10vw'
    hintbar = true
  }
}

const nextQuestion = () => {
  let currentSongId = songObjects.indexOf(currentSong)
  if (currentSongId === 0) {
    songObjects.shift()
  } else {
    songObjects.splice(currentSongId, 1)
  }

  setTimeout(() => {
    lyric.innerHTML = ''
    answerEls.forEach((answerEl) => {
      answerEl.style.backgroundColor = 'black'
      answerEl.style.color = 'white'
      answerEl.style.borderColor = 'rgb(65, 140, 202)'
      answerEl.innerHTML = ''
    })
    render()
  }, 1500)
}

const choose = (evt) => {
  const answerIdx = answerEls.indexOf(evt.target)
  if (answerIdx === -1) return
  //if (noClick) {
  //  answerEls.forEach((answerEl) => {
  //    answerEl.className = 'altanswer'
  //  })
  //  return
  //}
  //noClick = true
  evt.target.style.backgroundColor = 'gray'
  evt.target.style.borderColor = 'gray'
  evt.target.style.color = 'black'
  //audio.play() --> suspense music
  console.log(evt.target.innerText)
  timer = setTimeout(() => {
    let currentScoreBox = scoreArray.indexOf(0)
    if (evt.target.innerText === currentSong.artist) {
      evt.target.style.backgroundColor = 'green'
      evt.target.style.borderColor = 'green'
      scoreArray[currentScoreBox] = 1
      //play a cheer
    } else {
      evt.target.style.backgroundColor = 'rgb(243, 205, 139)'
      evt.target.style.borderColor = 'rgb(243, 205, 139)'
      answerEls.forEach((answerEl) => {
        if (answerEl.innerText === currentSong.artist) {
          answerEl.style.backgroundColor = 'green'
          answerEl.style.borderColor = 'green'
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
  let fourIntArray = [0, 1, 2, 3]
  shuffleArray(fourIntArray)
  console.log(fourIntArray)
  choice1.innerText = currentSong.choices[fourIntArray[0]]
  choice2.innerText = currentSong.choices[fourIntArray[1]]
  choice3.innerText = currentSong.choices[fourIntArray[2]]
  choice4.innerText = currentSong.choices[fourIntArray[3]]
  shuffleArray(fourIntArray)
  console.log(fourIntArray)
  hint1 = currentSong.hints[`hint${fourIntArray[0] + 1}`]
  hint2 = currentSong.hints[`hint${fourIntArray[1] + 1}`]
  hint3 = currentSong.hints[`hint${fourIntArray[2] + 1}`]
  hint4 = currentSong.hints[`hint${fourIntArray[3] + 1}`]
}

const renderQuestion = () => {
  count = 0
  readyMessageEl.innerText = readyMesssages[count]
  readyMessageEl.style.visibility = 'visible'
  const timer = setInterval(() => {
    count++
    if (count < 3) {
      readyMessageEl.innerText = readyMesssages[count]
      //play a beep
    } else {
      clearInterval(timer)
      readyMessageEl.style.visibility = 'hidden'
      //noClick = false
      //answerEls.forEach((answerEl) => {
      //  answerEl.className = 'answer'
      //})
    }
  }, 750)
  setTimeout(populateQuestion, 2250)
}

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
  startEls.forEach((startEl) => {
    startEl.style.visibility = 'hidden'
  })
}

const init = () => {
  scoreArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  hints = 4
  hardHints = false
  hardQuestions = false
  startEls.forEach((startEl) => {
    startEl.style.visibility = 'visible'
  })
}

init()

//********************* Event Handlers *********************
document.getElementById('play').addEventListener('click', render)
document.getElementById('answerspace').addEventListener('click', choose)
document.getElementById('togglehints').addEventListener('click', toggleHints)
document.getElementById('hintbar').addEventListener('click', displayHint)
