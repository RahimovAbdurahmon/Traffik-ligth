let red = document.querySelector(".red")
let green = document.querySelector(".green")
let yellow = document.querySelector(".yellow")
let h1 = document.querySelector(".h1")

// red.style.backgroundColor = "red"
let cnt = 10
let cnt2 = 10

let red1 = true
let yellow1 = true
let green1 = true

setInterval(() => {
    if (red1) {
        h1.innerHTML = cnt
        red.style.backgroundColor = "red"
        h1.style.color = "red"
        cnt--
        yellow1 = false
        green1 = false
        green.style.backgroundColor = "gray"
        cnt2 = 10
    }
}, 1000)

setTimeout(() => {
    red1 = false
    yellow.style.backgroundColor = "yellow"
    red.style.backgroundColor = "gray"
    h1.innerHTML = ""
}, 11000)

setTimeout(() => {
    green1 = true
}, 13000)


setInterval(() => {
    if (green1) {
        green.style.backgroundColor = "green"
        yellow.style.backgroundColor = "gray"
        red.style.backgroundColor = "gray"
        h1.innerHTML = cnt2
        h1.style.color = "green"
        cnt2--
    }
}, 1000)

setTimeout(() => {
    yellow.style.backgroundColor = "yellow"
    green.style.backgroundColor = "gray"
    h1.innerHTML = ""
    green1 = false
}, 23000)

setTimeout(() => {
    yellow.style.backgroundColor = "gray"
    red1 = true
    cnt = 10
}, 24000)

setTimeout(() => {
    red1 = false
    yellow.style.backgroundColor = "yellow"
    red.style.backgroundColor = "gray"
    h1.innerHTML = ""
}, 35000)

setTimeout(() => {
    green1 = true
}, 37000)

setTimeout(() => {
    yellow.style.backgroundColor = "yellow"
    green.style.backgroundColor = "gray"
    h1.innerHTML = ""
    green1 = false
}, 48000)

setTimeout(() => {
    yellow.style.backgroundColor = "gray"
    red1 = true
    cnt = 10
}, 49000)

setTimeout(() => {
    red1 = false
    yellow.style.backgroundColor = "yellow"
    red.style.backgroundColor = "gray"
    h1.innerHTML = ""
}, 60000)

setTimeout(() => {
    green1 = true
}, 62000)

setTimeout(() => {
    green1 = false
}, 73000)