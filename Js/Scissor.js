
const start = document.querySelector(".start")
const buttons = document.getElementById("interface")
const counter = document.querySelector(".counter")
start.addEventListener("click", (e) => {
    start.style.display = "none"
    buttons.style.display = "block"
    let i = 3
    timer = setInterval(function(){
        if (i <= 0) {
            clearInterval(timer)
        }
        counter.innerHTML = i
        i-=1
    },1000)
})

