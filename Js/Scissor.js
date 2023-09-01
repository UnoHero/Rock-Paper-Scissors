
const start = document.querySelector(".start")
const buttons = document.getElementById("interface")
const counter = document.querySelector(".counter")
const counterbox = document.querySelector(".counterbox")
const rock = document.querySelector(".fa-hand-back-fist")
const paper = document.querySelector(".fa-hand")
const scissor = document.querySelector(".fa-hand-scissors")
const p1 = document.querySelector(".p1img")
const p2 = document.querySelector(".p2img")
const score = document.getElementById("tally")
const p1score = document.querySelector(".tallyp1")
const p2score = document.querySelector(".tallyp2")
const scoreseperator = document.querySelector(".tallyseperator")
const results = document.querySelector(".results")

let i = 3
let tooearly = ""
let pick = ""

let playerWins = 0
let computerWins = 0
let roundsPlayed = 0

let b1 = p1score.innerHTML 
let b2 = p2score.innerHTML

start.addEventListener("click", (e) => {
    start.style.display = "none"
    buttons.style.display = "block"
    counter.style.display = "block"
    
    const totalRounds = 3
    function startNewRound() {
        if (roundsPlayed < totalRounds) {

            
            counter.style.display = "block"
            timer = setInterval(function(){
                if (i <= 1) {
                    results.style.display = "block"
                    clearInterval(timer)
                    if (tooearly != ""){
                        if (tooearly == "Rock") {
                            computerchoice = "Paper"
                        }
                        if (tooearly == "Paper") {
                            computerchoice = "Scissor"
                        }
                        if (tooearly == "Scissor") {
                            computerchoice = "Rock"
                        }
                    } else {
                        computerchoice = ai()
                        setTimeout(() => {
                            roundResoult = result(pick, computerchoice)
                            console.log(roundResoult, "Won")

                            if (results.textContent != `DRAW!`) {
                                counter.style.display = "none"
                                results.textContent = `${roundResoult} Won`
                                if (roundResoult == "P1/User"){
                                    p1score.textContent -= `${b1-1}`
                                    playerWins++
                                } else {
                                    p2score.textContent -= `${b2-1}`
                                    computerWins++
                                }
                                roundsPlayed++;
                                startNewRound()
                            }
                        }, 1000)
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
            i = 3
        } else {
            if (playerWins > computerWins) {
                console.log("Player wins the game!")
            }else if (computerWins > playerWins) {
                console.log("Computer wins the game!");
            } else {
                console.log("It's a tie!");
            }
        }
        
    }
    
    startNewRound()
})


rock.addEventListener("click", (e) => {
    p1.src = "../Files/rock.png"
    if (i > 1){
        tooearly = "Rock"
        console.log("you",tooearly);
    }
    pick = "Rock"
})  
paper.addEventListener("click", (e) => {
    p1.src = "../Files/paper.png"
    if (i > 1){
        tooearly = "Paper"
        console.log("you",tooearly);
        
    }
    pick = "Paper"
})  
scissor.addEventListener("click", (e) => {
    p1.src = "../Files/scissor.png"
    if (i > 1){
        tooearly = "Scissor"
        console.log("you",tooearly);
        
    }
    pick = "Scissor"
})  



function ai() {
    console.log("AI function called");
    if (tooearly == "") {
        const choices = ["Rock", "Paper", "Scissor"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
}

function result(pick, computerchoice) {
    console.log("Results function called")
    if (computerchoice == pick) {
        counter.style.display = "none"
        results.style.display = "block"
        results.textContent = `DRAW!`
        startNewRound()
    } else if (
        (pick === "Rock" && computerchoice === "Scissor") ||
        (pick === "Scissor" && computerchoice === "Paper") ||
        (pick === "Paper" && computerchoice === "Rock") 
    ) {
        return "P1/User"
    } else {
        return "P2/Ai"
    }
}

