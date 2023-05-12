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
      'The band’s biggest hit was part of the soundtrack for <i>City of Angels</i>.',
    hint3:
      "Here are some other lyrics from the song: </br></br> You grew up way too fast </br> And now there's nothing to believe </br> Then reruns all become our history </br> A tired song keeps playing on a tired radio </br> And I won't tell no one your name",
    hint4: `Here is a clip from the song:</br></br></br><audio controls>
    <source src="audio/Name Hint.wav" type="audio/wav">
  Your browser does not support the audio element.
  </audio>`
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
      'Here are some other lyrics from the song: </br></br> A foxtrot above my head </br> A sock hop beneath my bed </br> A disco ball is just hanging by a thread',
    hint3:
      'The artist was asked to produce a pop version of “Waving through the Window” by the writers of “Dear Evan Hansen."',
    hint4: `Here is an image from the music video: </br></br><img src="images/Fireflies Robot.png" width="400px">`
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
    hint1: `Another of the band's singles featured Marshmello.`,
    hint2: 'This song was released in 2013 and is named after an ancient city.',
    hint3: `Here are some other lyrics from the song: </br></br>And if you close your eyes</br>Does it almost feel like you've been here before? </br>How am I gonna be an optimist about this?`,
    hint4: `Here is a clip from the song:</br></br></br><audio controls>
    <source src="audio/Pompeii Hint.wav" type="audio/wav">
  Your browser does not support the audio element.
  </audio>`
  },
  explainer: {
    heading: 'Song: Pompeii | Artist: Bastille | Album: Bad Blood',
    text: `Tragedy is a part of life. It happens to everyone at some point, even if not usually on the scale of Pompeii getting obliterated by a volcano. And sometimes the tragedy just happens, but sometimes it feels like we bring it on ourselves, because of our bad decisions, karma, or whatever it is. And when you’re picking up the pieces after that kind of tragedy, boy does this question pack a punch. Do I start with figuring out the logistics of my life that have to change? Find a new place, get a new job, get back in the dating scene? Or do I start with my attitude, my selfishness, my fear of commitment, or whatever landed me there? What’s the bigger fire, the outcome or the cause? And what’s the bigger tragedy? Where do we begin?`
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
    hint1: 'The music video for this song features Courteney Cox.',
    hint2: `Some of the band's other singles include "Round Here" and "Mr. Jones."`,
    hint3: `Here are some other lyrics from the song: </br></br> And it's one more day up in the canyons </br>And it's one more night in Hollywood </br>If you think that I could be forgiven</br>I wish you would`,
    hint4: `Here is a clip from the song:</br></br></br><audio controls>
    <source src="audio/Long December Hint.wav" type="audio/wav">
  Your browser does not support the audio element.
  </audio>`
  },
  explainer: {
    heading:
      'Song: A Long December | Artist: Counting Crows | Album: Recovering the Satellites',
    text: 'This line captures a crazy thing about being human: just because you were there doesn’t mean you experienced it. Even in the very best or most important moments, if you’re not present, if you’re consumed with something else, dwelling on the past or worrying about the future, then you miss it. But even if you know it, that doesn’t make it easy. You can try and try to be present and fail, and feel like the best things are passing you by but you can’t get out of your head long enough to feel them. We just gotta keep trying. (And meditate!)'
  }
}
const song5 = {
  lyrics:
    "We got the bubble-headed bleach-blonde who comes on at five </br> She can tell you about the plane crash with a gleam in her eye </br> It's interesting when people die",
  choices: ['Don Henley', 'U2', 'Panic! at the Disco', 'Green Day'],
  artist: 'Don Henley',
  hints: {
    hint1:
      'The singer was also part of the band that sang <i>Hotel California</i>.',
    hint2: `Some of the artist's other singles include "The End of the Innocence" and "The Last Worthless Evening."`,
    hint3: `Here are some other lyrics from the song: </br></br>Kick 'em when they're up </br> Kick 'em when they're down </br> Kick 'em when they're up </br> Kick 'em all around`,
    hint4: `Here is a clip from the song:</br></br></br><audio controls>
    <source src="audio/Dirty Laundry Hint.wav" type="audio/wav">
  Your browser does not support the audio element.
  </audio>`
  },
  explainer: {
    heading:
      'Song: Dirty Laundry | Artist: Don Henley | Album: I Can’t Stand Still',
    text: `This song, which is a cutting indictment of the news media, feels like it could’ve been written yesterday as easily as 1982. Henley calls out the industry for the fact that it has a built-in incentive to report tragic, scandalous or otherwise sensational news, and thus warps the ways news personnel experience all those things. The song implicitly calls for us to figure out a way for the news media to be able to inform while also being able to stay human.
    `
  }
}
const song6 = {
  lyrics:
    "So when weakness turns my ego up </br> I know you'll count on the me from yesterday",
  choices: ['Incubus', 'Panic! at the Disco', 'Hoobastank', '3 Doors Down'],
  artist: 'Incubus',
  hints: {
    hint1: `Some of the artist's albums include <i>Make Yourself</i> and <i>Morning View</i>.`,
    hint2:
      'The lead singer of the group is also skilled at painting, and has published collections of his artwork.',
    hint3: `Here are some other lyrics from the song: </br></br>Sing this song </br> Remind me that we'll always have each other </br>
    When everything else is gone`,
    hint4: `Here is an image from the music video: </br></br><img src="images/Dig Image.jpeg" width="400px">`
  },
  explainer: {
    heading: 'Song: Dig | Artist: Incubus | Album: Light Grenades',
    text: `We’re never the same person all the time with everyone in every situation. And sometimes who we are at a given point in time can be a little ugly. Or a lot. But if we’re lucky, we have people in our lives that can see through who we happen to be at our low points, to who we were before, or who we are at our best, or who we could be. And if we’re really lucky, they can help us find our way back or our way out. This song celebrates having that kind of relationship.`
  }
}

const song7 = {
  lyrics: 'Hope that you spend your days </br> but they all add up',
  choices: ['Jason Mraz', 'Imagine Dragons', 'OneRepublic', 'Matchbox 20'],
  artist: 'OneRepublic',
  hints: {
    hint1: `The artist's first hit single was mixed and released by Timbaland.`,
    hint2: `Some of the artist's albums include <i>Dreaming Out Loud</i>, <i>Oh My My</i> and <i>Waking Up</i>.`,
    hint3: `Here are some other lyrics from the song: </br></br>I owned every second that this world could give</br>I saw so many places, the things that I did </br> Yeah, with every broken bone </br>
    I swear I lived`,
    hint4: `Here is an image from the music video: </br></br><img src="images/I Lived Image.jpeg" width="400px">`
  },
  explainer: {
    heading: 'Song: I Lived | Artist: OneRepublic | Album: Native',
    text: `This clever play on words, paradoxically wishing for us to have more after we spend everything, is a nod to two pitfalls in life: one, letting our time go by instead of <i>spending</i> it - using it, and choosing how we use it - and two, regretting our experiences because they don’t fit the narrative we want ourselves to have, instead of appreciating them as part of ourselves, the threads that add up to the tapestries of our lives. Here’s to hoping we navigate those pitfalls, we grab life by the horns, and we love the ride for what it is.`
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
    hint1: `Some of the artist's other songs include <i>Pink Houses</i> and <i>Hurts So Good</i>.`,
    hint2:
      'The artist cofounded Farmer Aid, which has raised over $60 million for farm families.',
    hint3: `Here are some other lyrics from the song: </br></br> Holdin' on to sixteen as long as you can </br> Change is coming 'round real soon </br>
    Make us women and men`,
    hint4: `Here is an image from the music video: </br></br><img src="images/Jack and Diane Image.png" width="400px">`
  },
  explainer: {
    heading:
      'Song: Jack and Diane | Artist: John Mellencamp | Album: American Fool',
    text: `I must have heard this song fifty times before I really paid attention to these words - the wistful, folksy tone of the music doesn’t lead you to expect lyrics that are so heavy. The song is about two high school sweethearts growing up, and the fun and optimism and ambition of being a teenager that disappears as you get older. We might all try “holding on to sixteen as long as you can," but at the end of the day, life gets less shiny, the colors get a little more dull, but it still goes on, and we have to come to terms with that. (Which makes it wonderfully ironic that Jessica Simpson sampled this track for a bubblegum pop love song.)`
  }
}

const song9 = {
  lyrics:
    "She said like it or not it's the way it's gotta be </br> You've gotta love yourself if you can ever love me",
  choices: ['Lifehouse', '*N SYNC', 'Maroon 5', 'John Legend'],
  artist: 'Lifehouse',
  hints: {
    hint1: `The artist's first album was <i>No Name Face</i>.`,
    hint2: `Several of the artist's songs were featured on the show <i>Smallville</i>.`,
    hint3: `Here are some other lyrics from the song: </br></br>I know what's at stake </br>I know that I've let you down </br> And if you give me a chance </br>Believe that I can change </br> I'll keep us together`,
    hint4: `Here is a clip from the song:</br></br></br><audio controls>
    <source src="audio/Whatever It Takes Hint.wav" type="audio/wav">
  Your browser does not support the audio element.
  </audio>`
  },
  explainer: {
    heading: 'Song: Whatever It Takes | Artist: Lifehouse | Album: Who We Are',
    text: `
    A huge part of being a good friend or partner is listening, supporting, encouraging, and bringing the fun and good vibes to the relationship. But that's one sided, even if it is the "nicer," giving side. In the deepest relationships, both sides have to be generous enough to be there when needed, <i>and</i> to be vulnerable enough to need. And for a lot of us, that's really hard, because having needs means looking inside, knowing where we’re incomplete, and letting someone else see that too. You just can't do that if you're in denial about those parts of yourself, if you can’t be okay with the fact your shortcomings are a real part of you. That’s what these lyrics are about - one partner telling the other, accept yourself enough to trust me to see inside and still love you. That’s how you can love me. Just saying, that girl’s a catch.
    `
  }
}

const song10 = {
  lyrics: "You don't know me now </br> I kinda thought that you should somehow",
  choices: ['Nickelback', 'Justin Bieber', 'Matchbox 20', 'The Weeknd'],
  artist: 'Matchbox 20',
  hints: {
    hint1:
      'The singer of this song collaborated with Santana, making a track that won three Grammys and <i>Billboard</i> lists as the third most-successful song ever.',
    hint2: `The artist's debut album was <i>Yourself or Someone Like You</i>.`,
    hint3: `Here are some other lyrics from the song: </br></br>Do you think you can cope? </br> You figured me out </br>That I'm lost and I'm hopeless </br>I'm bleeding and broken </br> Though I've never spoken </br> I come undone`,
    hint4: `Here is a clip from the song:</br></br></br><audio controls>
    <source src="audio/Mad Season Hint.wav" type="audio/wav">
  Your browser does not support the audio element.
  </audio>`
  },
  explainer: {
    heading: 'Song: Mad Season | Artist: Matchbox 20 | Album: Mad Season',
    text: `Oof. It’s classic Matchbox 20 to sing about a dysfunctional relationship, and this line stands out to me because of the casual, nonchalant yet subtly seething tone of the singer’s observation that hey, I thought this relationship was really deep, I thought this whole time we were together you noticed me, learned about me, cared about who I was. I relied on that, trusted that. Um, guess not? Part of what I love about these lyrics is the way they’re not dramatic. There’s something almost funny about them. And there’s something dignified about them too, how he’s not falling to pieces, this horrible realization hits him yet he’s passive-aggressively playing the detached observer musing about it. So much personality in this, wow.`
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
let canChoose

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
    answerEl.className = 'answer'
    answerEl.innerHTML = ''
  })
}

let hidePopUp = () => {
  popupEl.style.visibility = 'hidden'
  nextEl.style.visibility = 'hidden'
  commentEl.style.visibility = 'hidden'
}

//POPUP
const displayHint = (evt) => {
  if (popupSetting === 'explainer') return
  if (popupSetting === 'difficulty') return
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
  hidePopUp()
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
//This is code for a multi-functional button that will change
//depending on which popup is displaying
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
    popupSetting = ''
    win()
  } else if (gameOver === -1) {
    popupSetting = ''
    lose()
  } else if (gameOver === 0) {
    popupSetting = ''
    nextQuestion()
  }
  if (hintbar) {
    toggleHints()
    return
  }
}

//POPUP
const displayExplainer = () => {
  popupSetting = 'explainer'
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
  if (canChoose === false) return
  hidePopUp()
  popupSetting = ''
  evt.target.className = 'selectedAnswer'
  //audio.play() --> suspense music
  let currentScoreBox = scoreArray.indexOf(0)
  canChoose = false
  timer = setTimeout(() => {
    if (evt.target.innerText === currentSong.artist) {
      evt.target.className = 'correctAnswer'
      scoreArray[currentScoreBox] = 1
      //play a cheer
    } else {
      evt.target.className = 'wrongAnswer'
      //evt.target.style.backgroundColor = 'rgb(243, 205, 139)'
      //evt.target.style.borderColor = 'rgb(243, 205, 139)'
      answerEls.forEach((answerEl) => {
        if (answerEl.innerText === currentSong.artist) {
          answerEl.className = 'correctAnswer'
          //answerEl.style.backgroundColor = 'green'
          //answerEl.style.borderColor = 'green'
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

const noChoose = () => {
  canChoose = false
}

const populateQuestion = () => {
  canChoose = true
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
    } else {
      clearInterval(timer)
      readyMessageEl.style.visibility = 'hidden'
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
