const cardsArray = [
    {
      name: 'shell',
      img: '../assets/images/blueshell.png',
    },
    {
      name: 'star',
      img: '../assets/images/star.png',
    },
    {
      name: 'bobomb',
      img: '../assets/images/bobomb.png',
    },
    {
      name: 'mario',
      img: '../assets/images/mario.png',
    },
    {
      name: 'luigi',
      img: '../assets/images/luigi.png',
    },
    {
      name: 'peach',
      img: '../assets/images/peach.png',
    },
    {
      name: '1up',
      img: '../assets/images/1up.png',
    },
    {
      name: 'mushroom',
      img: '../assets/images/mushroom.png',
    },
    {
      name: 'thwomp',
      img: '../assets/images/thwomp.png',
    },
    {
      name: 'bulletbill',
      img: '../assets/images/bulletbill.png',
    },
    {
      name: 'coin',
      img: '../assets/images/coin.png',
    },
    {
      name: 'goomba',
      img: '../assets/images/goomba.png',
    },
  ]
  let doubleOfArray = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });
  
  let firstGuess = '';
  let secondGuess = '';
  let count = 0;
  let previousTarget = null;
  let delay = 1200;
  
  let game = document.querySelector(".hero");
  let grid = document.createElement('article');


  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
  doubleOfArray.forEach(function (item) {

  
    let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
  
    let front = document.createElement('div');
    front.classList.add('front');
  
    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;
  
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
  
  let match = function match() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.add('match');
    });
  };
  
  let resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
  
    let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
      card.classList.remove('selected');
    });
  };
  
  grid.addEventListener('click', function (event) {
  
    let clicked = event.target;
  
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
      return;
    }
  
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }
  
      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
        }
        setTimeout(resetGuesses, delay);
      }
      previousTarget = clicked;
    }
  });