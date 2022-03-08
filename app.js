document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'avdol',
        img: 'images/avdol.jpg'
      },
      {
        name: 'iggy',
        img: 'images/iggy.jpg'
      },
      {
        name: 'joseph',
        img: 'images/joseph.jpeg'
      },
      {
        name: 'jotaro',
        img: 'images/jotaro.jpg'
      },
      {
        name: 'kakyoin',
        img: 'images/kakyoin.jpg'
      },
      {
        name: 'polnareff',
        img: 'images/polnareff.jpg'
      },
      {
        name: 'avdol',
        img: 'images/avdol.jpg'
      },
      {
        name: 'iggy',
        img: 'images/iggy.jpg'
      },
      {
        name: 'joseph',
        img: 'images/joseph.jpeg'
      },
      {
        name: 'jotaro',
        img: 'images/jotaro.jpg'
      },
      {
        name: 'kakyoin',
        img: 'images/kakyoin.jpg'
      },
      {
        name: 'polnareff',
        img: 'images/polnareff.jpg'
      }
    ]

    var timerVariable = setInterval(countUpTimer, 1000);
    var totalSeconds = 0;
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }

    function countUpTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds / 3600);
        var minute = Math.floor((totalSeconds - hour * 3600) / 60);
        var seconds = totalSeconds - (hour * 3600 + minute * 60);
        document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;
    }
  
    createBoard()
  })