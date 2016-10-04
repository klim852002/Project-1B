$(document).ready(function () {
  // alert('DOM is ready')
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var background = new Image()
  background.src = 'assets/pitch.png'
  ctx.drawImage(background, 0, 0, 700, 500)
  canvas.addEventListener('click', clickReporter, false)
  // var getBall = document.getElementById('ball')
  // declaring variables for ball
  // var canvas2 = document.getElementById('canvas2')
  // var ctx2 = canvas.getContext('2d')
  var ball = new Image()
  ball.src = 'assets/soccerball.png'
  var ballerID
  posX = Math.random()
  posY = Math.random()
  canvas.addEventListener('click', clickReporter, false);

  var $startBtn = $('#startBtn')
  var score = 0
  var countDown = 60
  var timerID
  var $clock = $('#clock')
  console.log(typeof $canvas2)
  console.log(typeof canvas1)
  console.log(typeof ball)
// initiate event listener for start button to start game
  $startBtn.on('click', startGame)
// function to start game, start clock countdown and set ball to be generated at 0.5 secs mark
  function startGame () {
    timerID = window.setInterval(updateClock, 1000)
    console.log(countDown)
    ballerID = window.setTimeout(ballGenerator, 500)
    console.log(ballerID)
  };
  // function to generate ball to appear randomly
  function ballGenerator () {
    ctx.drawImage(ball, posX * 650, posY * 450, 50, 50)
}
// =================

// ===================
  function updateClock () {
    countDown -= 1
    $clock.textContent = countDown + 'secs'
  }
// startGame()
// to remove ball at 1 secs mark
  var $clearBtn = $('#clearBtn')
  $clearBtn.on('click', killBall)
      // window.setTimeout(killBall, 1000)
  function killBall () {
  //     if (Math.random()*2000 > 500) {
    ctx.clearRect(posX * 650, posY * 450, 50, 50)
    ctx.drawImage(background, 0, 0, 700, 500)
  }
// once ball appear, event listener for on click, ball disappears
// each successful click, scores 1 point
  function clickReporter (e) { /// assign event to some variable

  /// adjust mouse click position to be relative to canvas:
  var rect = this.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
  /// check x/y coordinate against the image position and dimension
  if (x >= 50 && x <= (50 + ball.width) &&
      y >= 50 && y <= (50 + ball.height)) {
      alert("hamtam bola!");
      score++;
      killBall();
  }
  }
  // $('#canvas2').click('click', 'img', clickBall)
  // ball.addEventListener('click', clickBall)
  // function clickBall () {
  //   console.log(clickBall)
  //
  //
  //   alert('clickball is working!')
  // }
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
// credits: http://stackoverflow.com/questions/19945442/how-to-assign-onclick-on-image-drawn-in-canvas
// Prima: for telling me that drawing anything over canvas means that it cannot be picked up
// kailin: for clearing my ball
