let body = document.getElementById('body')
let chessboard = document.querySelector('.chessboard')
let queen, king
let blackColor = false


//ad squares to chessboard
let sum = []

function addSquares_chessboard() {
    for (let i = 0; i < 8; i++) {
        if (blackColor) {
            addToSum('black', 'white')
            blackColor = false
        } else {
            addToSum('white', 'black')
            blackColor = true
        }


    }
    chessboard.innerHTML = sum.join('')
}
addSquares_chessboard()


function addToSum(firstColor, secondColor) {
    for (let i = 0; i < 4; i++) {
        sum.push(`<div class="${firstColor} boxes"></div><div class="${secondColor} boxes"></div>`)
    }

}


//add king & queen to chessboard
let boxes = document.querySelectorAll('.boxes')
while (true) {
    queen = rnd(0, 64)
    king = rnd(0, 64)

    if (queen !== king) {

        //add king and queen to chessboard
        boxes[queen].innerHTML = '<img width="55px" src="images/queen.png">'
        boxes[king].innerHTML = '<img width="55px" src="images/crown.svg">'
        break
    }
}

//function for random number
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

body.onclick = () => location.reload()

//creating y & x of king &queen
let king_y = (king % 8) + 1
let queen_y = (queen % 8) + 1
let king_x = Math.floor(king / 8) + 1
let queen_x = Math.floor(queen / 8) + 1
let m = (king_y - queen_y) / (king_x - queen_x)
m = Math.abs(m)



setTimeout(() => {
    if (king_x === queen_x) {
        alert('kish')
    } else if (king_y === queen_y) {
        alert('kish')
    } else if (m === 1) {
        alert('kish')
    }
}, 500);