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
  // document.styleSheets

// function to reload page upon clicking of play again button
  $reStartBtn.on('click', reload)
  function reload () {
    // alert('reload')
    window.location.reload()
  }
// function startGame runs ballGenerator function and starts countdown timer
  function startGame () {
    ballGenerator()
    window.setInterval(ballGenerator, 1200)
    window.setInterval(countDown, 1000)
  }
// function for countdown timer
  function countDown () {
    timer -= 1
    clock.textContent = timer
    if (timer === 0) {
      alert("'Time's up!, your score is " + scoreLine)
      window.location.reload()
    }
  }
  // get posX at a time
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
  var ballPosition = {}

  // Generate new ball at different position everytime
  function ballGenerator () {
    ballPosition = position()
    ballX = ballPosition.getPosX()
    ballY = ballPosition.getPosY()

    console.log(ballX, ballY)
    ctx.drawImage(background, 0, 0, 700, 500)
    var ball = new Image()
    ball.src = 'assets/soccerball.png'
    ball.onload = function () {
      ctx.drawImage(ball, ballX * 650, ballY * 450, 50, 50)
    }
  }
  canvas.addEventListener('click', canvasClick)

  function canvasClick (e) {
    var rect = this.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    var clickX = ballPosition.getPosX()
    var clickY = ballPosition.getPosY()
    if (x >= clickX * 650 && x <= clickX * 650 + 50 && y >= clickY * 450 && y <= clickY * 450 + 50) {
      ctx.drawImage(background, 0, 0, 700, 500)
      scoreLine++
      score.textContent = scoreLine
      console.log(scoreLine)
// check if the ball is clicked within the posX or and posY
      console.log(ballPosition.getPosX(), ballPosition.getPosY())
    }
  }
})
