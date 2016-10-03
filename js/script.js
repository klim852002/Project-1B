$(document).ready(function () {
  // alert('DOM is ready')
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var background = new Image()
  background.src = 'assets/pitch.png'
  ctx.drawImage(background, 0, 0, 700, 500)

  // var getBall = document.getElementById('ball')
  var ball = new Image()
  ball.src = 'assets/soccerball.png'

  var $startBtn = $('#startBtn')
  var score
  var countDown = 60
  var timerID

// innitiate event listener for start button to start game

  $startBtn.on('click', startGame)
  // invoke random balls to appear within the canvas, with random duration
  function startGame () {
    // var time = Math.random() * 4000
    countDown -= 1
    console.log(countDown)
    timerID = window.setTimeout(ballGenerator, 2000)
    function ballGenerator () {
      // function to generate ball to appear randomly
      // function getpos(min, max) {
      //     return Math.random() * (max - min) + min;
      // }
      // ymin = canvas.offsetLeft
      // ymax = ymin + canvas.offsetWidth
      // xmin = canvas.offsetTop
      // xmax = xmin + canvas.offsetHeight
      ctx.drawImage(ball, Math.random() * 650, Math.random() * 450, 50, 50)
      // console.log(startGame())
    }
  };
  // startGame()
// to remove ball randomly between 0.5 sec and 2secs
      // if (Math.random()*2000 > 500) {
          // window.clearTimeout(timerID)
      // }
// once ball appear, event listener for on click, ball disappear
// each successful click, scores 1 point
  // function clickBall () {
  //   ball.on('click', removeBall)
  //   function removeBall () {
  //     ball.remove();
  //   }
  // }
    //
        // score ++;
// game ends at end of countdown timer
})
