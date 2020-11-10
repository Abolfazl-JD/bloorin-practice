let boxes = document.querySelectorAll('.boxes')
let body = document.getElementById('body')
let x, y

while (true) {
    x = rnd(0, 64)
    y = rnd(0, 64)

    if (x !== y) {

        //add king and queen to chessboard
        boxes[x].innerHTML = '<img width="55px" src="images/queen.png">'
        boxes[y].innerHTML = '<img width="55px" src="images/crown.svg">'
        break
    } else {
        x = rnd(0, 64)
        y = rnd(0, 64)
    }
}

//function for random number
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

body.onclick = () => location.reload()

let check_Vertical = true
let check_Oblique = true
    //indexes to kish for horizental
let indexesToKish_horizental = [
    [0, 7],
    [8, 15],
    [16, 23],
    [24, 31],
    [32, 39],
    [40, 47],
    [48, 55],
    [56, 63]
]

//indexes to kish for vertical
let indexesToKish_vertical = [
    [0, 8, 16, 24, 32, 40, 48, 56],
    [1, 9, 17, 25, 33, 41, 49, 57],
    [2, 10, 18, 26, 34, 42, 50, 58],
    [3, 11, 19, 27, 35, 43, 51, 59],
    [4, 12, 20, 28, 36, 44, 52, 60],
    [5, 13, 21, 29, 37, 45, 53, 61],
    [6, 14, 22, 30, 38, 46, 54, 62],
    [7, 15, 23, 31, 39, 47, 55, 63],
]


//indexes to kish for oblique
let indexesToKish_oblique = [
    [1, 8],
    [2, 9, 16],
    [3, 10, 17, 24],
    [4, 11, 18, 25, 32],
    [5, 12, 19, 26, 33, 40],
    [6, 13, 20, 27, 34, 41, 48],
    [7, 14, 21, 28, 35, 42, 49, 56],
    [15, 22, 29, 36, 43, 50, 57],
    [23, 30, 37, 44, 51, 58],
    [31, 38, 45, 52, 59],
    [39, 46, 53, 60],
    [47, 54, 61],
    [55, 62],
    [6, 15],
    [5, 14, 23],
    [4, 13, 22, 31],
    [3, 12, 21, 30, 39],
    [2, 11, 20, 29, 38, 47],
    [1, 10, 19, 28, 37, 46, 55],
    [0, 9, 18, 27, 36, 45, 54, 63],
    [8, 17, 26, 35, 44, 53, 62],
    [16, 25, 34, 43, 52, 61],
    [24, 33, 42, 51, 60],
    [32, 41, 50, 59],
    [40, 49, 58],
    [48, 57]

]
setTimeout(() => {
    iterator_horizental()
    if (check_Vertical) {
        iterator(indexesToKish_vertical)
    }
    if (check_Oblique) {
        iterator(indexesToKish_oblique)
    }
}, 500);

//check for indexes that are them in kish? or not
function iterator(kish) {
    for (let i = 0; i < kish.length; i++) {
        const index_kish = kish[i];
        if (index_kish.includes(x) && index_kish.includes(y)) {
            alert('kish')
            check_Oblique = false
            break
        }
    }
}

function iterator_horizental() {
    for (let i = 0; i < indexesToKish_horizental.length; i++) {
        const index_kish = indexesToKish_horizental[i];
        let first_index = index_kish[0]
        let second_index = index_kish[1]
        if (first_index <= x && second_index >= x && first_index <= y && second_index >= y) {
            alert('kish')
            check_Oblique = false
            check_Vertical = false
            break
        }
    }
}