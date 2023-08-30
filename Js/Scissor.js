
const start = document.querySelector(".start")
const buttons = document.getElementById("interface")
const counter = document.querySelector(".counter")
const rock = document.querySelector(".fa-hand-back-fist")
const paper = document.querySelector(".fa-hand")
const scissor = document.querySelector(".fa-hand-scissors")
const p1 = document.querySelector(".p1img")
const p2 = document.querySelector(".p2img")
const p1score = document.querySelector(".tallyp1")
const p2score = document.querySelector(".tallyp2")

let i = 3
let tooearly = ""
start.addEventListener("click", (e) => {
    start.style.display = "none"
    buttons.style.display = "block"
    counter.style.display = "block"
    timer = setInterval(function(){
    
        if (i <= 1) {
            clearInterval(timer)
            if (tooearly != ""){
                if (tooearly == "Rock") {
                    computerchoice = "Paper"
                }
            } else{
                computerchoice = ai();
            }
            
            console.log("AI chose: " + computerchoice);
            if(computerchoice === "Rock"){
                p2.src = "../Files/rock.png"
            }
            if(computerchoice === "Paper"){
                p2.src = "../Files/paper.png"
            }
            if(computerchoice === "Scissor"){
                p2.src = "../Files/scissor.png"
    
            }
        }
        i-=1
        counter.innerHTML = i
    },1000)


    
})

rock.addEventListener("click", (e) => {
    p1.src = "../Files/rock.png"
    if (i > 1){
        tooearly = "Rock"
        console.log("you",tooearly);
    }
    
})  
paper.addEventListener("click", (e) => {
    p1.src = "../Files/paper.png"
    if (i > 1){
        tooearly = "Paper"
        console.log("you",tooearly);
    }
})  
scissor.addEventListener("click", (e) => {
    p1.src = "../Files/scissor.png"
    if (i > 1){
        tooearly = "Scissor"
        console.log("you",tooearly);
    }
})  



function ai() {
    console.log("AI function called");
    if (tooearly == "") {
        const choices = ["Rock", "Paper", "Scissor"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
}



