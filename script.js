const screen = document.querySelector('.screen')
const keys = document.querySelectorAll('.number>span')
let result = 0, character = ''

keys.forEach((key) => {
  key.addEventListener("click", function () {
    if (key.innerHTML == 'DEL') {
      screen.innerHTML.length === 1 ? screen.innerHTML = 0 : screen.innerHTML = screen.innerHTML.slice(0, -1)
    } else if (key.innerHTML == '+') {
      operation('+')
    } else if (key.innerHTML == '-') {
      operation('-')
    } else if (key.innerHTML == 'x') {
      operation('x')
    } else if (key.innerHTML == '÷') {
      operation('÷')
    } else if (key.innerHTML == '.') {
      screen.innerHTML.indexOf('.') == -1 ? screen.innerHTML += '.' : false
    } else if (key.innerHTML == 'RESET') {
      screen.innerHTML = 0
      result = 0
      character = ''
    } else if (key.innerHTML == '=') {
      calculate()
      screen.innerHTML = result
      result = 0
    } else {
      screen.innerHTML === '0' ? screen.innerHTML = key.innerHTML : screen.innerHTML += key.innerHTML
    }
  })
})

function operation(op) {
  character !== '' ? calculate() : result = Number(screen.innerHTML)
  character = op
  screen.innerHTML = 0
}

function calculate() {
  var screenNumer = Number(screen.innerHTML)
  if (character === '+') {
    result = result + screenNumer
  } else if (character === '-') {
    result = result - screenNumer
  } else if (character === 'x') {
    result = result * screenNumer
  } else if (character === '÷') {
    result = result / screenNumer
  }
}