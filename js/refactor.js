$(document).ready(function () {
  var score = 0
  var $startBtn = $('#startBtn')
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  var background = new Image()
  background.src = 'assets/pitch.png'
  ctx.drawImage(background, 0, 0, 700, 500)

  $startBtn.on('click', startGame)

  function startGame () {
    ballGenerator()
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

  // function clearBall () {
  //   window.setTimeout(setBackground, 2000)
  //   alert ('new pitch!')
  // }
  //
  // function setBackground () {
  //   ctx.drawImage(background, 0, 0, 700, 500)
  //   }


  canvas.addEventListener('click', canvasClick)

  function canvasClick (e) {
    var rect = this.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    var clickX = ballPosition.getPosX()
    var clickY = ballPosition.getPosY()
  if (x >= clickX * 650 && x <= clickX * 650 + 50 && y >= clickY * 450 && y <= clickY * 450 + 50) {
    // window.alert('hamtam bola!')
    ballGenerator()
    score++
    console.log(score)
    console.log(ballPosition.getPosX(), ballPosition.getPosY())
}
  // check if the ball is clicked within the posX or and posY
  }
})
