const cell = document.querySelector('.cell')
const restart = document.querySelector('.restart')
let countCross = 0
let countZero = 0
let countParitet = 0

restart.addEventListener('click', () => reestart())     
   function reestart() {
   document.querySelectorAll('.cell .cross').forEach(element => element.classList.remove('cross'))
   document.querySelectorAll('.cell .zero').forEach(element => element.classList.remove('zero'))
   crossZero = ['cross', 'zero', 'cross', 'zero', 'cross', 'zero', 'cross', 'zero', 'cross']
   let win = document.querySelector('.win')
   win.remove()
}

let coordinate = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

for (let i = 0; i < 9; i++) {
    let square = document.createElement('div')
    square.classList.add('square')
    cell.append(square)
  
    let position = coordinate.shift()
    square.classList.add(position)
  
    square.addEventListener('click', () => 
    setSign(square))   
    square.addEventListener('click', () => 
    win())
}
    
    function win() {

    const elem1 = document.querySelector('.one')
    const elem2 = document.querySelector('.two')
    const elem3 = document.querySelector('.three')
    const elem4 = document.querySelector('.four')
    const elem5 = document.querySelector('.five')
    const elem6 = document.querySelector('.six')
    const elem7 = document.querySelector('.seven')
    const elem8 = document.querySelector('.eight')
    const elem9 = document.querySelector('.nine')

    if ((elem1.classList.contains('cross') && elem2.classList.contains('cross') && elem3.classList.contains('cross')) ||
        (elem4.classList.contains('cross') && elem5.classList.contains('cross') && elem6.classList.contains('cross')) ||
        (elem7.classList.contains('cross') && elem8.classList.contains('cross') && elem9.classList.contains('cross')) ||
        (elem1.classList.contains('cross') && elem4.classList.contains('cross') && elem7.classList.contains('cross')) ||
        (elem2.classList.contains('cross') && elem5.classList.contains('cross') && elem8.classList.contains('cross')) ||
        (elem3.classList.contains('cross') && elem6.classList.contains('cross') && elem9.classList.contains('cross')) ||
        (elem1.classList.contains('cross') && elem5.classList.contains('cross') && elem9.classList.contains('cross')) ||
        (elem3.classList.contains('cross') && elem5.classList.contains('cross') && elem7.classList.contains('cross'))) {  
        let win = document.createElement('div')
        win.className = 'win'
        win.innerHTML = 'Крестики победили'
        document.body.before(win)
        countCross++
        let divCountCross = document.querySelector('.countCross')
        divCountCross.innerHTML = ('Крестики: ' + countCross)} 

    else if ((elem1.classList.contains('zero') && elem2.classList.contains('zero') && elem3.classList.contains('zero')) ||
        (elem4.classList.contains('zero') && elem5.classList.contains('zero') && elem6.classList.contains('zero')) ||
        (elem7.classList.contains('zero') && elem8.classList.contains('zero') && elem9.classList.contains('zero')) ||
        (elem1.classList.contains('zero') && elem4.classList.contains('zero') && elem7.classList.contains('zero')) ||
        (elem2.classList.contains('zero') && elem5.classList.contains('zero') && elem8.classList.contains('zero')) ||
        (elem3.classList.contains('zero') && elem6.classList.contains('zero') && elem9.classList.contains('zero')) ||
        (elem1.classList.contains('zero') && elem5.classList.contains('zero') && elem9.classList.contains('zero')) ||
        (elem3.classList.contains('zero') && elem5.classList.contains('zero') && elem7.classList.contains('zero'))) {
        let win = document.createElement('div')
        win.className = 'win'
        win.innerHTML = 'Нолики победили'
        document.body.before(win)
        countZero++
        let divCountZero = document.querySelector('.countZero')
        divCountZero.innerHTML = ('Нолики: ' + countZero)} 
      
    else if (crossZero.length < 1) {
        let win = document.createElement('div')
        win.className = 'win'
        win.innerHTML = 'Ничья'
        document.body.before(win)
        countParitet++
        let divCountParitet = document.querySelector('.countParitet')
        divCountParitet.innerHTML = ('Ничья: ' + countParitet)}     
}

let crossZero = ['cross', 'zero', 'cross', 'zero', 'cross', 'zero', 'cross', 'zero', 'cross']

function setSign(element) {
    if (!element.classList.contains('cross') && 
        !element.classList.contains('zero')) {
    let sign = crossZero.shift()
    element.classList.add(sign)}
}