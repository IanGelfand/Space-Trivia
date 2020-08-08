const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const music = document.getElementById('music')

let shuffledQuestions, currentQuestionIndex
let score = 0
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  //music link - https://www.youtube.com/watch?v=Bok8nLviThg
  music.play()
  music.volume = 0.01
  score = 0
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    document.querySelector('.start-btn').style.background = 'darkblue'
    startButton.classList.remove('hide')
    setTimeout(function(){alert(`You got ${score} out of ${questions.length} correct`)}, 100)
  }
  if (selectedButton.dataset = correct) {
    score++;
 }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

let questions = [
    {
        question: 'Who is the first person in space?',
        answers: [
            {text: 'Yuri Gagarin', correct: true},
            {text: 'Neil Armstrong', correct: false},
            {text: 'Buzz Aldrin', correct: false},
            {text: 'Bob Behnken', correct: false}
        ]
    },
    {
        question: 'Which rover was launched by nasa in 2011 to explore mars?',
        answers: [
            {text: 'Opportunity', correct: false},
            {text: 'Spirit', correct: false},
            {text: 'Curiosity', correct: true},
            {text: 'Mars Pathfinder', correct: false}
        ]
    },
    {
        question: 'How many people have been to the I.S.S?',
        answers: [
            {text: '125', correct: false},
            {text: '85', correct: false},
            {text: '210', correct: false},
            {text: '220', correct: true},
        ]
    },
    {
        question: 'What was the first space flight that landed the first people on the moon?',
        answers: [
            {text: 'Apollo 11', correct: true},
            {text: 'Apollo 13', correct: false},
            {text: 'Apollo 14', correct: false},
            {text: 'Apollo 12', correct: false}
        ]
    },
    {
        question: 'How old is planet earth?',
        answers: [
            {text: '4.5 million years old', correct: false},
            {text: '4.5 billion years old', correct: true},
            {text: '13 billion years old', correct: false},
            {text: '12 million years old', correct: false}
        ]
    },
    {
        question: 'How many nations are on the I.S.S?',
        answers: [
            {text: '15', correct: true},
            {text: '125', correct: false},
            {text: '85', correct: false},
            {text: '210', correct: false}
        ]
    },
    {
        question: 'Which nation was the first to send a person into space?',
        answers: [
            {text: 'China', correct: false},
            {text: 'Russia', correct: false},
            {text: 'Soviet Union', correct: true},
            {text: 'United States', correct: false}
        ]
    },
    {
        question: 'How far is the Voyager 1?',
        answers: [
            {text: '2.5 light years away', correct: false},
            {text: '1 light year away', correct: false},
            {text: '25 million miles', correct: false},
            {text: '14 billion miles', correct: true}
        ]
    },
    {
        question: 'What is Pluto considered?',
        answers: [
            {text: 'Dwarf Planet', correct: true},
            {text: 'Asteroid', correct: false},
            {text: 'Planet', correct: false},
            {text: 'Space debris', correct: false}
        ]
    },
    {
        question: 'Whats the hottest planet in the solar systen?',
        answers: [
            {text: 'Mercury', correct: false},
            {text: 'Venus', correct: true},
            {text: 'Mars', correct: false},
            {text: 'Saturn', correct: false}
        ]
    },
    {
      question: 'Which planet has no moons?',
      answers: [
          {text: 'Mercury', correct: true},
          {text: 'Uranus', correct: false},
      ]
    },
    {
      question: 'Which of these is the distance between Earth and the centre of the Milky Way galaxy?',
      answers: [
        {text: '250 light years', correct: false},
        {text: '25,000 light years', correct: true},
      ]
    },
    {
      question: 'Which galaxy is closest to The Milky Way?',
      answers: [
        {text: 'Large Magellanic Cloud', correct: false},
        {text: 'Andromeda', correct: true},
        {text: 'The SagDEG', correct: false},
        {text: 'The Canis Major Dwarf', correct: false},
      ]
    },
    {
      question: 'Which comet passes by Earth every 76 years?',
      answers: [
        {text: 'Kohoutek', correct: false},
        {text: "Halley's Comet", correct: true},
        {text: 'Hyakutake', correct: false},
        {text: 'Encke', correct: false},
      ]
    },
    {
      question: 'Which is the closest star to Earth?',
      answers: [
        {text: 'The Sun', correct: true},
        {text: "Alpha Centauri", correct: false},
        {text: 'Proxima Centauri', correct: false},
        {text: "Bernard's Star", correct: false},
      ]
    }
]
