$(document).ready(function () {
  // alert('DOM is ready')
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var background = new Image()
  background.src = 'assets/pitch.png'
  ctx.drawImage(background, 0, 0, 700, 500)

  // var getBall = document.getElementById('ball')
  // declaring variables for ball
  var ball = new Image()
  ball.src = 'assets/soccerball.png'
  var ballerID
  posX = Math.random()
  posY = Math.random()

  var $startBtn = $('#startBtn')
  var score = 0
  var countDown = 60
  var timerID
  var $clock = $('#clock')

// initiate event listener for start button to start game
  $startBtn.on('click', startGame)
// generate random balls to appear within the canvas, with random duration
  function startGame () {
    timerID = window.setInterval(updateClock, 1000)
    console.log(countDown)
    // var time = Math.random() * 4000
    ballerID = window.setTimeout(ballGenerator, 500)
    console.log(ballerID)
  };
    // function to generate ball to appear randomly
  function ballGenerator () {
    ctx.drawImage(ball, posX * 650, posY * 450, 50, 50)
    console.log(typeof ball)
  };
  function updateClock () {
    countDown -= 1
    $clock.textContent = countDown + 'secs'
  }
  // startGame()
// to remove ball randomly between 0.5 sec and 2secs

  var $clearBtn = $('#clearBtn')
  $clearBtn.on('click', killBall)
      // window.setTimeout(killBall, 1000)
  function killBall () {
    console.log(ballerID)
  //     if (Math.random()*2000 > 500) {
    ctx.clearRect(posX * 650, posY * 450, 50, 50)
    ctx.drawImage(background, 0, 0, 700, 500)
  }
// once ball appear, event listener for on click, ball disappear
// each successful click, scores 1 point
  ball.addEventListener('click', clickBall)
  function clickBall () {
    console.log(clickBall)
    killBall()
    score++
    alert('clickball is working!')
  }
    //
// game ends at end of countdown timer
})

// function getpos(min, max) {
//     return Math.random() * (max - min) + min;
// }
// ymin = canvas.offsetLeft
// ymax = ymin + canvas.offsetWidth
// xmin = canvas.offsetTop
// xmax = xmin + canvas.offsetHeight
