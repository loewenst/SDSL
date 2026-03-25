// Song data for SDSL.
// Each hint is a typed object: { type: 'text' | 'audio' | 'image', content: string }
// Text content may contain HTML tags (<i>) and \n for line breaks.

export const songs = [
  {
    id: 1,
    lyrics: "Don\u2019t it make you sad to know that life\nis more than who we are",
    choices: ['The Goo Goo Dolls', 'The Smashing Pumpkins', 'All Time Low', 'Counting Crows'],
    artist: 'The Goo Goo Dolls',
    hints: [
      { type: 'text', content: 'This song was released in September 1995.' },
      { type: 'text', content: "The band\u2019s biggest hit was part of the soundtrack for <i>City of Angels</i>." },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nYou grew up way too fast\nAnd now there\u2019s nothing to believe\nThen reruns all become our history\nA tired song keeps playing on a tired radio\nAnd I won\u2019t tell no one your name" },
      { type: 'audio', content: '/audio/Name Hint.wav' },
    ],
    explainer: {
      heading: 'Song: Name \u2014 Artist: The Goo Goo Dolls \u2014 Album: A Boy Named Goo',
      text: 'This line always struck home because of the way it acknowledges that the things that are important to us in our own little lives probably seem petty and insignificant if we just draw back the lens and think beyond ourselves \u2014 but it doesn\u2019t make the point in a moralizing way. It\u2019s not saying, \u201cStop caring about the things that don\u2019t matter,\u201d it\u2019s saying, hey, the fact that the things you care about don\u2019t matter to the wider world \u2014 that really sucks, doesn\u2019t it? And that\u2019s so validating to hear.',
    },
    clip: '/audio/Name Clip.wav',
  },
  {
    id: 2,
    lyrics: 'My dreams are bursting at the seams',
    choices: ['Owl City', 'Taylor Swift', 'Backstreet Boys', 'A Great Big World'],
    artist: 'Owl City',
    hints: [
      { type: 'text', content: "This song was inspired by the singer\u2019s insomnia." },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nA foxtrot above my head\nA sock hop beneath my bed\nA disco ball is just hanging by a thread" },
      { type: 'text', content: 'The artist was asked to produce a pop version of \u201cWaving through the Window\u201d by the writers of \u201cDear Evan Hansen.\u201d' },
      { type: 'image', content: '/images/Fireflies Robot.png' },
    ],
    explainer: {
      heading: 'Song: Fireflies \u2014 Artist: Owl City \u2014 Album: Ocean Eyes',
      text: "It\u2019s basically a signature for Owl City (a.k.a. Adam Young) to write songs that are optimistic, unjaded, and full of imagination and childlike wonder. This line feels like a peek into the mind behind that signature \u2014 a mind flooded with so many hopes and ideas and excitement about the possibilities of the future that it feels like it could burst. To me, it lands as a reminder to tamp down the cynicism, and aspire for some of that wonder and excitement about the open future.",
    },
    clip: '/audio/Fireflies Clip.wav',
  },
  {
    id: 3,
    lyrics: "Oh, where do we begin?\nThe rubble, or our sins?",
    choices: ['Creed', 'Bastille', 'Imagine Dragons', 'Panic! at the Disco'],
    artist: 'Bastille',
    hints: [
      { type: 'text', content: "Another of the band\u2019s singles featured Marshmello." },
      { type: 'text', content: 'This song was released in 2013 and is named after an ancient city.' },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nAnd if you close your eyes\nDoes it almost feel like you\u2019ve been here before?\nHow am I gonna be an optimist about this?" },
      { type: 'audio', content: '/audio/Pompeii Hint.wav' },
    ],
    explainer: {
      heading: 'Song: Pompeii \u2014 Artist: Bastille \u2014 Album: Bad Blood',
      text: "Tragedy is a part of life. It happens to everyone at some point, even if not usually on the scale of Pompeii getting obliterated by a volcano. And sometimes the tragedy just happens, but sometimes it feels like we bring it on ourselves, because of our bad decisions, karma, or whatever it is. And when you\u2019re picking up the pieces after that kind of tragedy, boy does this question pack a punch. Do I start with the logistics of my life that have to change? Or do I start with my attitude, my selfishness, my fear of commitment, or whatever landed me there? Where do we begin?",
    },
    clip: '/audio/Pompeii Clip.wav',
  },
  {
    id: 4,
    lyrics: "I can\u2019t remember all the times I tried to tell myself\nto hold on to these moments as they pass",
    choices: ['Counting Crows', 'The Wallflowers', "Jack's Mannequin", 'Dave Matthews Band'],
    artist: 'Counting Crows',
    hints: [
      { type: 'text', content: 'The music video for this song features Courteney Cox.' },
      { type: 'text', content: 'Some of the band\u2019s other singles include \u201cRound Here\u201d and \u201cMr. Jones.\u201d' },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nAnd it\u2019s one more day up in the canyons\nAnd it\u2019s one more night in Hollywood\nIf you think that I could be forgiven\nI wish you would" },
      { type: 'audio', content: '/audio/Long December Hint.wav' },
    ],
    explainer: {
      heading: 'Song: A Long December \u2014 Artist: Counting Crows \u2014 Album: Recovering the Satellites',
      text: "This line captures a crazy thing about being human: just because you were there doesn\u2019t mean you experienced it. Even in the very best moments, if you\u2019re not present, if you\u2019re consumed with something else, dwelling on the past or worrying about the future, then you miss it. But even if you know it, that doesn\u2019t make it easy. You can try and try to be present and fail, and feel like the best things are passing you by but you can\u2019t get out of your head long enough to feel them. We just gotta keep trying. (And meditate!)",
    },
    clip: '/audio/Long December Clip.wav',
  },
  {
    id: 5,
    lyrics: "We got the bubble-headed bleach-blonde who comes on at five\nShe can tell you about the plane crash with a gleam in her eye\nIt\u2019s interesting when people die",
    choices: ['Don Henley', 'U2', 'Panic! at the Disco', 'Green Day'],
    artist: 'Don Henley',
    hints: [
      { type: 'text', content: 'The singer was also part of the band that sang <i>Hotel California</i>.' },
      { type: 'text', content: 'Some of the artist\u2019s other singles include \u201cThe End of the Innocence\u201d and \u201cThe Last Worthless Evening.\u201d' },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nKick \u2019em when they\u2019re up\nKick \u2019em when they\u2019re down\nKick \u2019em when they\u2019re up\nKick \u2019em all around" },
      { type: 'audio', content: '/audio/Dirty Laundry Hint.wav' },
    ],
    explainer: {
      heading: 'Song: Dirty Laundry \u2014 Artist: Don Henley \u2014 Album: I Can\u2019t Stand Still',
      text: "This song, a cutting indictment of the news media, feels like it could\u2019ve been written yesterday as easily as 1982. Henley calls out the industry for the fact that it has a built-in incentive to report tragic, scandalous or otherwise sensational news, and thus warps the ways news personnel experience all those things. The song implicitly calls for us to figure out a way for the news media to be able to inform while also being able to stay human.",
    },
    clip: '/audio/Dirty Laundry Clip.wav',
  },
  {
    id: 6,
    lyrics: "So when weakness turns my ego up\nI know you\u2019ll count on the me from yesterday",
    choices: ['Incubus', 'Panic! at the Disco', 'Hoobastank', '3 Doors Down'],
    artist: 'Incubus',
    hints: [
      { type: 'text', content: "Some of the artist\u2019s albums include <i>Make Yourself</i> and <i>Morning View</i>." },
      { type: 'text', content: 'The lead singer is also skilled at painting, and has published collections of his artwork.' },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nSing this song\nRemind me that we\u2019ll always have each other\nWhen everything else is gone" },
      { type: 'image', content: '/images/Dig Image.jpeg' },
    ],
    explainer: {
      heading: 'Song: Dig \u2014 Artist: Incubus \u2014 Album: Light Grenades',
      text: "We\u2019re never the same person all the time with everyone in every situation. And sometimes who we are at a given point in time can be a little ugly. But if we\u2019re lucky, we have people in our lives that can see through who we happen to be at our low points, to who we were before, or who we are at our best. And if we\u2019re really lucky, they can help us find our way back or our way out. This song celebrates having that kind of relationship.",
    },
    clip: '/audio/Dig Clip.wav',
  },
  {
    id: 7,
    lyrics: "Hope that you spend your days\nbut they all add up",
    choices: ['Jason Mraz', 'Imagine Dragons', 'OneRepublic', 'Matchbox 20'],
    artist: 'OneRepublic',
    hints: [
      { type: 'text', content: "The artist\u2019s first hit single was mixed and released by Timbaland." },
      { type: 'text', content: "Some of the artist\u2019s albums include <i>Dreaming Out Loud</i>, <i>Oh My My</i> and <i>Waking Up</i>." },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nI owned every second that this world could give\nI saw so many places, the things that I did\nYeah, with every broken bone\nI swear I lived" },
      { type: 'image', content: '/images/I Lived Image.jpeg' },
    ],
    explainer: {
      heading: 'Song: I Lived \u2014 Artist: OneRepublic \u2014 Album: Native',
      text: "This clever play on words, paradoxically wishing for us to have more after we spend everything, is a nod to two pitfalls in life: one, letting our time go by instead of <i>spending</i> it \u2014 using it, choosing how we use it \u2014 and two, regretting our experiences because they don\u2019t fit the narrative we want. Here\u2019s to hoping we grab life by the horns and love the ride for what it is.",
    },
    clip: '/audio/I Lived Clip.wav',
  },
  {
    id: 8,
    lyrics: "Oh yeah, life goes on\nlong after the thrill of living is gone",
    choices: ['John Mellencamp', 'Johnny Cash', 'My Chemical Romance', 'Fall Out Boy'],
    artist: 'John Mellencamp',
    hints: [
      { type: 'text', content: "Some of the artist\u2019s other songs include <i>Pink Houses</i> and <i>Hurts So Good</i>." },
      { type: 'text', content: 'The artist cofounded Farm Aid, which has raised over $60 million for farm families.' },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nHoldin\u2019 on to sixteen as long as you can\nChange is coming \u2019round real soon\nMake us women and men" },
      { type: 'image', content: '/images/Jack and Diane Image.png' },
    ],
    explainer: {
      heading: 'Song: Jack and Diane \u2014 Artist: John Mellencamp \u2014 Album: American Fool',
      text: "I must have heard this song fifty times before I really paid attention to these words \u2014 the wistful, folksy tone doesn\u2019t lead you to expect lyrics that are so heavy. The song is about two high school sweethearts growing up, and the fun and optimism and ambition of being a teenager that disappears as you get older. We might all try \u201cholding on to sixteen as long as you can,\u201d but at the end of the day, life gets less shiny, the colors get a little more dull, but it still goes on. (Which makes it wonderfully ironic that Jessica Simpson sampled this track for a bubblegum pop love song.)",
    },
    clip: '/audio/Jack and Diane Clip.wav',
  },
  {
    id: 9,
    lyrics: "She said like it or not it\u2019s the way it\u2019s gotta be\nYou\u2019ve gotta love yourself if you can ever love me",
    choices: ['Lifehouse', '*N SYNC', 'Maroon 5', 'John Legend'],
    artist: 'Lifehouse',
    hints: [
      { type: 'text', content: "The artist\u2019s first album was <i>No Name Face</i>." },
      { type: 'text', content: "Several of the artist\u2019s songs were featured on the show <i>Smallville</i>." },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nI know what\u2019s at stake\nI know that I\u2019ve let you down\nAnd if you give me a chance\nBelieve that I can change\nI\u2019ll keep us together" },
      { type: 'audio', content: '/audio/Whatever It Takes Hint.wav' },
    ],
    explainer: {
      heading: 'Song: Whatever It Takes \u2014 Artist: Lifehouse \u2014 Album: Who We Are',
      text: "A huge part of being a good friend or partner is listening, supporting, and bringing good vibes. But that\u2019s one sided, even if it is the \u201cnicer\u201d side. In the deepest relationships, both sides have to be generous enough to be there when needed, <i>and</i> vulnerable enough to need. And for a lot of us that\u2019s really hard, because having needs means looking inside, knowing where we\u2019re incomplete, and letting someone else see that. That\u2019s what these lyrics are about \u2014 one partner telling the other: accept yourself enough to trust me to see inside and still love you. That\u2019s how you can love me. Just saying, that girl\u2019s a catch.",
    },
    clip: '/audio/Whatever It Takes Clip.wav',
  },
  {
    id: 10,
    lyrics: "You don\u2019t know me now\nI kinda thought that you should somehow",
    choices: ['Nickelback', 'Justin Bieber', 'Matchbox 20', 'The Weeknd'],
    artist: 'Matchbox 20',
    hints: [
      { type: 'text', content: "The singer collaborated with Santana on a track that won three Grammys and <i>Billboard</i> lists as the third most-successful song ever." },
      { type: 'text', content: "The artist\u2019s debut album was <i>Yourself or Someone Like You</i>." },
      { type: 'text', content: "Here are some other lyrics from the song:\n\nDo you think you can cope?\nYou figured me out\nThat I\u2019m lost and I\u2019m hopeless\nI\u2019m bleeding and broken\nThough I\u2019ve never spoken\nI come undone" },
      { type: 'audio', content: '/audio/Mad Season Hint.wav' },
    ],
    explainer: {
      heading: 'Song: Mad Season \u2014 Artist: Matchbox 20 \u2014 Album: Mad Season',
      text: "Oof. It\u2019s classic Matchbox 20 to sing about a dysfunctional relationship, and this line stands out because of the casual yet subtly seething tone of the singer\u2019s observation that hey, I thought this relationship was really deep, I thought this whole time we were together you noticed me, learned about me, cared about who I was. I relied on that, trusted that. Um, guess not? Part of what I love about these lyrics is the way they\u2019re not dramatic. There\u2019s something almost funny about them \u2014 and something dignified too.",
    },
    clip: '/audio/Mad Season Clip.wav',
  },
]
