// let box_red = document.getElementsByClassName('box_red') [0]

// let box_green = document.getElementsByClassName('box_green') [0]

// let button = document.getElementsByClassName('button') [0]

// let body = document.getElementsByTagName('body') [0]
let box = document.getElementsByClassName('box') [0]

let box1 = document.getElementsByClassName('box1') [0]

let box2 = document.getElementsByClassName('box2') [0]

let button = document.getElementsByClassName('button') [0]

    box2.classList.toggle('box2')

    button.addEventListener('click', () => {
        box.classList.toggle('box')
        box1.classList.toggle('box1')
        box2.classList.toggle('box2')
    })