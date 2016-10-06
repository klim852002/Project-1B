$(document).ready(function () {
  var scoreLine = 0
  var timer = 60
  var clock = document.getElementById('clock')
  var score = document.getElementById('score')
  var $startBtn = $('#startBtn')
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var background = new Image()
  background.src = 'assets/pitch.png'
  ctx.drawImage(background, 0, 0, 700, 500)
// add restart button
  var $aside = $('aside')
  var $reStartBtn = $('<button>')
  $reStartBtn.addClass('btn btn-xl btn-lg')
  $reStartBtn.text('REPLAY')
// start button to run startGame function
  $startBtn.on('click', startGame)
// on click of start button, button changes to play again button to allow reset of game
  $startBtn.click(function () {
    $(this).remove()
    $aside.prepend($reStartBtn)
    // $aside.prepend('<button class = "btn btn-xl btn-lg" id="reStartBtn" name="restartBtn">REPLAY</button>')
  })
// function to reload page upon clicking of play again button
  $reStartBtn.on('click', reload)
  function reload () {
    // alert('reload')
    window.location.reload()
  }
// function startGame runs ballGenerator function and starts countdown timer
  function startGame () {
    ballGenerator()
    window.setInterval(ballGenerator, 900)
    window.setInterval(countDown, 1000)
  }
// function for countdown timer
  function countDown () {
    timer -= 1
    clock.textContent = timer
    if (timer === 0) {
      window.alert("'Time's up! your score is " + scoreLine)
      window.location.reload()
    }
  }
  // get and return randomised number posX and posY for generating position of ball
  function position () {
    var posX = Math.random()
    var posY = Math.random()

    return {
      getPosX: function () {
        return posX
      },
      getPosY: function () {
        return posY
      }
    }
  }
  // var ballPosition = {}
  // Generate new ball at different position everytime
  function ballGenerator () {
    ballPosition = position()
    ballX = ballPosition.getPosX()
    ballY = ballPosition.getPosY()
  // draw pitch
    ctx.drawImage(background, 0, 0, 700, 500)
    var ball = new Image()
    ball.src = 'assets/soccerball.png'
  // draw ball image on canvas
    ball.onload = function () {
      ctx.drawImage(ball, ballX * 650, ballY * 450, 50, 50)
    }
  }
  // event listener to detect if click falls on the ball
  canvas.addEventListener('click', canvasClick)
  function canvasClick (e) {
    var rect = this.getBoundingClientRect()
    var x = e.clientX - rect.left // mouse position
    var y = e.clientY - rect.top // mouse position
    var clickX = ballPosition.getPosX()
    var clickY = ballPosition.getPosY()
    var circleX = clickX * 650 + 25 // center of circle
    var circleY = clickY * 450 + 25 // center of circle
    var dSquare = (x - circleX) * (x - circleX) + (y - circleY) * (y - circleY)
    console.log(dSquare)
    if (dSquare < 625) {
// if (x >= clickX * 650 && x <= clickX * 650 + 50 && y >= clickY * 450 && y <= clickY * 450 + 50) {
      ctx.drawImage(background, 0, 0, 700, 500)
      scoreLine++
      score.textContent = scoreLine
    }
  }
})
