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
  },
  explainer: {
    heading: "",
    text: ""
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
  },
  explainer: {
    heading: 'Song: Name | Artist: The Goo Goo Dolls | Album: A Boy Named Goo',
    text: 'This line always struck home because of the way it acknowledges that the things that are important to us in our own little lives probably seem petty and insignificant if we just draw back the lens and think beyond ourselves - but it doesn’t make the point in a moralizing way. It’s not saying, "Stop caring about the things that don’t matter,” it’s saying, hey, the fact that the things you care about don’t matter to the wider world - that really sucks, doesn’t it? And that’s so validating to hear.'
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
  },
  explainer: {
    heading: 'Song: Fireflies | Artist: Owl City | Album: Ocean Eyes',
    text: 'It’s basically a signature for Owl City (a.k.a. Adam Young) to write songs that are optimistic, unjaded, and full of imagination and childlike wonder (a song about living underwater? He’s got it. Blasting off into space? He’s got it. A song about awkwardness talking to girls that still feels upbeat and innocent? He’s got it.). This line feels like a peek into the mind behind that signature - a mind flooded with so many hopes and ideas and excitement about the possibilities of the future that it feels like it could burst. To me, it lands as a reminder to tamp down the cynicism, and aspire for some of that wonder and excitement about the open future.'
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
  },
  explainer: {
    heading: 'Song: Pompeii | Artist: Bastille | Album: Bad Blood',
    text: ''
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
  },
  explainer: {
    heading:
      'Song: A Long December | Artist: Counting Crows | Album: Recovering the Satellites',
    text: ''
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
  },
  explainer: {
    heading:
      'Song: Dirty Laundry | Artist: Don Henley | Album: I Can’t Stand Still',
    text: ''
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
  },
  explainer: {
    heading: 'Song: Dig | Artist: Incubus | Album: Light Grenades',
    text: ''
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
  },
  explainer: {
    heading: 'Song: I Lived | Artist: OneRepublic | Album: Native',
    text: ''
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
  },
  explainer: {
    heading:
      'Song: Jack and Diane | Artist: John Mellencamp | Album: American Fool',
    text: ''
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
  },
  explainer: {
    heading: 'Song: Whatever It Takes | Artist: Lifehouse | Album: Who We Are',
    text: ''
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
  },
  explainer: {
    heading: 'Song: Mad Season | Artist: Matchbox 20 | Album: Mad Season',
    text: ''
  }
}

const songObjectsHardCode = [
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
let hintCount
let hintbar = false
let hardHints = false
let hardQuestions = false
let currentSong
let hint1
let hint2
let hint3
let hint4
let gameOver = 0
let songObjects = [...songObjectsHardCode]
let popupSetting
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
const popupEl = document.getElementById('popup')
const popupHeadingEl = document.getElementById('popupHeading')
const popupTextEl = document.getElementById('prompt')
const popupEls = [...popupEl.childNodes]
const resetEl = document.getElementById('reset')
const difficultyEl = document.getElementById('difficulty')
const nextEl = document.getElementById('next')
const commentEl = document.getElementById('comment')

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

let clearAnswerSpace = () => {
  lyric.innerHTML = ''
  answerEls.forEach((answerEl) => {
    answerEl.style.backgroundColor = 'black'
    answerEl.style.color = 'white'
    answerEl.style.borderColor = 'rgb(65, 140, 202)'
    answerEl.innerHTML = ''
  })
}

let hidePopUp = () => {
  popupEl.style.visibility = 'hidden'
  //popupHeadingEl.style.visibility = 'hidden'
  //popupTextEl.style.visibility = 'hidden'
  nextEl.style.visibility = 'hidden'
  commentEl.style.visibility = 'hidden'
}

//POPUP
const displayHint = (evt) => {
  popupSetting = 'hints'
  const hintIdx = hintEls.indexOf(evt.target)
  if (hintIdx === -1) return
  if (hintCount === 0) {
    document.getElementById('nomorehints').style.visibility = 'visible'
    setTimeout(() => {
      document.getElementById('nomorehints').style.visibility = 'hidden'
    }, 1000)
    return
  }
  popupEl.style.visibility = 'visible'
  nextEl.style.visibility = 'visible'
  nextEl.innerHTML = 'Close Hint'
  commentEl.style.visibility = 'hidden'
  popupHeadingEl.innerHTML = currentSong.lyrics
  let hintArray = [hint1, hint2, hint3, hint4]
  popupTextEl.innerHTML = hintArray[hintIdx]
  hintCount--
}

const toggleHints = () => {
  if (hintbar === true) {
    document.getElementById('hintbar').style.visibility = 'hidden'
    document.getElementById('togglehints').style.right = '0'
    hintbar = false
  } else if (hintbar === false) {
    document.getElementById('hintbar').style.visibility = 'visible'
    document.getElementById('togglehints').style.right = '10vw'
    hintbar = true
  }
}

const nextQuestion = () => {
  let currentSongId = songObjects.indexOf(currentSong)
  //might not need the if, have to see if splice works on 0
  if (currentSongId === 0) {
    songObjects.shift()
  } else {
    songObjects.splice(currentSongId, 1)
  }
  clearAnswerSpace()
  renderQuestion()
}

const bounce = (el) => {
  el.style.backgroundColor = 'rgb(231, 171, 67)'
  let count = 0
  let bounceLoop = setInterval(() => {
    count += 1
    if (count % 2 === 1) {
      el.classList.toggle('bounce1')
    } else {
      el.classList.toggle('bounce2')
    }
  }, 500)
}

//POPUP
const comment = () => {
  hidePopUp()
  if (popupSetting === 'difficulty') {
    hardHints = false
    reset()
    popupSetting = ''
    return
  }
}

//POPUP
const changeDifficulty = () => {
  popupSetting = 'difficulty'
  popupHeadingEl.innerHTML = 'DIFFICULTY SETTINGS'
  popupTextEl.innerHTML =
    'Use the buttons below to choose whether you want to have three hints for every question (easy mode), or only three hints for the whole game (hard mode).'
  popupEl.style.visibility = 'visible'
  nextEl.innerText = 'Hard'
  nextEl.style.visibility = 'visible'
  commentEl.innerText = 'Easy'
  commentEl.style.visibility = 'visible'
}

const reset = () => {
  scoreArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  renderScoreBar()
  songObjects = [...songObjectsHardCode]
  hintCount = 3
  gameOver = 0
  clearAnswerSpace()
  resetEl.style.visibility = 'hidden'
  difficultyEl.style.visibility = 'hidden'
  startEls.forEach((startEl) => {
    startEl.style.visibility = 'visible'
  })
}

//POPUP
const win = () => {
  popupHeadingEl.innerHTML = 'CONGRATULATIONS! YOU WON!'
  popupTextEl.innerHTML =
    'I hope you found these lyrics as profound and hard-hitting as I did. </br></br></br> Play again to see even more lyrics! </br> Or, challenge yourself by tweaking the difficulty.'
  popupEl.style.visibility = 'visible'
  resetEl.style.visibility = 'visible'
  resetEl.style.backgroundColor = 'rgb(231, 171, 67)'
  difficultyEl.style.visibility = 'visible'
  difficultyEl.style.backgroundColor = 'rgb(231, 171, 67)'
  nextEl.style.visibility = 'hidden'
  commentEl.style.visibility = 'hidden'
  bounce(resetEl)
  bounce(difficultyEl)

  //play win music
  //change the color of the replay and difficulty buttons, maybe also an interval where they grow and shrink
  //
}

//POPUP
const lose = () => {
  popupHeadingEl.innerHTML = 'SORRY! BETTER LUCK NEXT TIME'
  popupTextEl.innerHTML =
    'I hope you found these lyrics as profound and hard-hitting as I did. </br></br></br> If you did, why not play again, </br>for a chance to see even more </br> Surprisingly Deep Song Lyrics!'
  popupEl.style.visibility = 'visible'
  resetEl.style.visibility = 'visible'
  resetEl.style.backgroundColor = 'rgb(231, 171, 67)'
  nextEl.style.visibility = 'hidden'
  commentEl.style.visibility = 'hidden'
  bounce(resetEl)

  //play lose music
  //change the color of the replay button, with interval
}

//POPUP
const next = () => {
  renderScoreBar()
  hidePopUp()
  if (popupSetting === 'difficulty') {
    hardHints = true
    reset()
    popupSetting = ''
    return
  }
  if (popupSetting === 'hints') {
    popupSetting = ''
    return
  }
  if (gameOver === 1) {
    win()
  } else if (gameOver === -1) {
    lose()
  } else if (gameOver === 0) {
    nextQuestion()
  }
  if (hintbar) {
    toggleHints()
    return
  }
}

//POPUP
const displayExplainer = () => {
  popupEl.style.visibility = 'visible'
  popupHeadingEl.innerHTML = currentSong.explainer.heading
  popupTextEl.innerHTML = currentSong.explainer.text
  nextEl.style.visibility = 'visible'
  nextEl.innerHTML = 'Next'
  commentEl.style.visibility = 'hidden'
}

const choose = (evt) => {
  const answerIdx = answerEls.indexOf(evt.target)
  if (answerIdx === -1) return
  if (gameOver) return
  popupSetting = ''
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
  let currentScoreBox = scoreArray.indexOf(0)
  timer = setTimeout(() => {
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
    if (scoreArray[9] === 1) {
      gameOver = 1
    } else if (scoreArray[currentScoreBox] === -1) {
      gameOver = -1
    }
    setTimeout(displayExplainer, 1000)
  }, 1500)
}

const populateQuestion = () => {
  currentSong = songObjects[Math.floor(Math.random() * songObjects.length)]
  lyric.innerHTML = currentSong.lyrics
  let fourIntArray = [0, 1, 2, 3]
  shuffleArray(fourIntArray)
  choice1.innerText = currentSong.choices[fourIntArray[0]]
  choice2.innerText = currentSong.choices[fourIntArray[1]]
  choice3.innerText = currentSong.choices[fourIntArray[2]]
  choice4.innerText = currentSong.choices[fourIntArray[3]]
  shuffleArray(fourIntArray)
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
  if (hardHints === false) {
    hintCount = 3
  }
  setTimeout(populateQuestion, 2250)
}

const renderScoreBar = () => {
  scoreBarEls.forEach((scoreBarEl, idx) => {
    if (scoreArray[idx] === 1) {
      scoreBarEl.style.backgroundColor = 'rgb(65, 140, 202)'
    } else if (scoreArray[idx] === -1) {
      scoreBarEl.innerText = 'X'
    } else if (scoreArray[idx] === 0) {
      scoreBarEl.style.backgroundColor = ''
      scoreBarEl.innerText = ''
    }
  })
}

const render = () => {
  renderScoreBar()
  renderQuestion()
  popupEl.style.visibility = 'hidden'
  difficultyEl.style.visibility = 'hidden'
  startEls.forEach((startEl) => {
    startEl.style.visibility = 'hidden'
  })
}

const init = () => {
  scoreArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  hintCount = 3
  hardHints = false
  hardQuestions = false
  startEls.forEach((startEl) => {
    startEl.style.visibility = 'visible'
  })
  //clearInterval(bounceLoop)
}

init()

//********************* Event Handlers *********************
document.getElementById('play').addEventListener('click', render)
document.getElementById('answerspace').addEventListener('click', choose)
document.getElementById('togglehints').addEventListener('click', toggleHints)
document.getElementById('hintbar').addEventListener('click', displayHint)
document.getElementById('next').addEventListener('click', next)
document.getElementById('reset').addEventListener('click', reset)
document
  .getElementById('difficulty')
  .addEventListener('click', changeDifficulty)
document.getElementById('comment').addEventListener('click', comment)
