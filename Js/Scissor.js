
const start = document.querySelector(".start")
const startbutton = document.querySelector(".startbutton")
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
const round = document.querySelector(".roundcount")
const winaudio = document.getElementById("winaudio")
const loseaudio = document.getElementById("loseaudio")
const drawaudio = document.getElementById("drawaudio")
const roundaudio = document.getElementById("roundaudio")

let i = 3
let l = 1
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
    startNewRound()
    round.textContent = `Round ${l}`
    if (playerWins > computerWins) {
        p1score.textContent -= `${b1+playerWins}`

    } else if (computerWins > playerWins){
        p2score.textContent -= `${b2+computerWins}`
    }
    playerWins = 0
    computerWins = 0
    roundsPlayed = 0
    const totalRounds = 3
    function startNewRound() {
        buttons.style.display = "block"
        counter.innerHTML = i
        i = 3
        setTimeout(() => {
            results.style.display = "none"
            counter.style.display = "block"
            results.textContent = ``
            p1.src = "../Files/QuestionMark.png"
            p2.src = "../Files/QuestionMark.png"
            pick = ""
            tooearly = ""
            if (roundsPlayed < totalRounds && p1score != 2 && p2score != 2) {
                counter.innerHTML = i
                counter.style.display = "block"
                if (pick == "") {
                    rotationp1 = setInterval(() => {
                        p1.src = rotate();
                        if (i == 0) {
                            clearInterval(rotationp1);
                        }
                    }, 250);
                }
                if (i >= 0 ) {
                    rotationp2 = setInterval(() => {
                        p2.src = rotate();
                        console.log("run");
                        if (i == 0) {
                            clearInterval(rotationp2);
                        }
                    }, 250);
                }
                timer = setInterval(function(){

                    if (i <= 1) {
                        
                        results.style.display = "block"
                        clearInterval(timer)
                        if (tooearly != ""){
                            console.log(tooearly)
                            if (tooearly == "Rock") {
                                computerchoice = "Paper"
                                setTimeout(() => {
                                    roundResoult = result(pick, computerchoice)
                                    console.log(roundResoult, "Won")
                                    counter.style.display = "none"
                                    if (results.textContent != `DRAW!`) {
                                        results.textContent = `${roundResoult} Won`
                                        counter.style.display = "none"
                                        if (roundResoult == "P1/User"){
                                            p1score.textContent -= `${b1-1}`
                                            playerWins++
                                            winaudio.play()
                                        } else {
                                            p2score.textContent -= `${b2-1}`
                                            computerWins++
                                            loseaudio.play()
                                        }
                                        roundsPlayed++;
                                        startNewRound()
                                    }
                                }, 1000)
                            }
                            if (tooearly == "Paper") {
                                computerchoice = "Scissor"
                                setTimeout(() => {
                                    roundResoult = result(pick, computerchoice)
                                    console.log(roundResoult, "Won")
                                    counter.style.display = "none"
                                    if (results.textContent != `DRAW!`) {
                                        results.textContent = `${roundResoult} Won`
                                        counter.style.display = "none"
                                        if (roundResoult == "P1/User"){
                                            p1score.textContent -= `${b1-1}`
                                            playerWins++
                                            winaudio.play()
                                        } else {
                                            p2score.textContent -= `${b2-1}`
                                            computerWins++
                                            loseaudio.play()
                                        }
                                        roundsPlayed++;
                                        startNewRound()
                                    }
                                }, 1000)
                            }
                            if (tooearly == "Scissor") {
                                computerchoice = "Rock"
                                setTimeout(() => {
                                    roundResoult = result(pick, computerchoice)
                                    console.log(roundResoult, "Won")
                                    counter.style.display = "none"
                                    if (results.textContent != `DRAW!`) {
                                        results.textContent = `${roundResoult} Won`
                                        counter.style.display = "none"
                                        if (roundResoult == "P1/User"){
                                            p1score.textContent -= `${b1-1}`
                                            playerWins++
                                            winaudio.play()
                                        } else {
                                            p2score.textContent -= `${b2-1}`
                                            computerWins++
                                            loseaudio.play()
                                        }
                                        roundsPlayed++;
                                        startNewRound()
                                    }
                                }, 1000)
                            } else {
                                console.log("Error");
                            }
                        } else {
                            computerchoice = ai()
                            setTimeout(() => {
                                roundResoult = result(pick, computerchoice)
                                console.log(roundResoult, "Won")
                                counter.style.display = "none"
                                if (results.textContent != `DRAW!`) {
                                    results.textContent = `${roundResoult} Won`
                                    counter.style.display = "none"
                                    if (roundResoult == "P1/User"){
                                        p1score.textContent -= `${b1-1}`
                                        playerWins++
                                        winaudio.play()
                                    } else {
                                        p2score.textContent -= `${b2-1}`
                                        computerWins++
                                        loseaudio.play()
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

                        function result(pick, computerchoice) {
                            console.log("Results function called")
                            setTimeout(() => {
                            }, 1000);
                            if (computerchoice == pick) {
                                counter.style.display = "none"
                                results.style.display = "block"
                                results.textContent = `DRAW!`
                                drawaudio.play()
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
                    }
                    
                    i-=1
                    counter.innerHTML = i
                    
                    
                },1000)
            } else {
                startbutton.src = "../Files/playagain.jpg"
                roundaudio.play()

                buttons.style.display = "none"
                start.style.display = "block"
                roundsPlayed = 0

                l++


                if (playerWins > computerWins) {
                    console.log("Player wins the game!")
                }else if (computerWins > playerWins) {
                    console.log("Computer wins the game!");
                } else {
                    console.log("It's a tie!");
                }
            }
            
        },500)
    
        
    }
})


rock.addEventListener("click", (e) => {
    p1.src = "../Files/rock.png"
    if (i > 1){
        tooearly = "Rock"
        console.log("you",tooearly);
    }
    pick = "Rock"
    buttons.style.display = "none"
    clearInterval(rotationp1);
    clearInterval(rotationp2)
})  
document.addEventListener("keydown", function(event) {
    if (event.key === "1"){
        p1.src = "../Files/rock.png"
        if (i > 1){
            tooearly = "Rock"
            console.log("you",tooearly);
        }
        pick = "Rock"
        buttons.style.display = "none"
        
    }
    clearInterval(rotationp1);
    clearInterval(rotationp2);
})

paper.addEventListener("click", (e) => {
    p1.src = "../Files/paper.png"
    if (i > 1){
        tooearly = "Paper"
        console.log("you",tooearly);
        
    }
    pick = "Paper"
    buttons.style.display = "none"
    clearInterval(rotationp1);
    clearInterval(rotationp2)
})  
document.addEventListener("keydown", function(event) {
    if (event.key === "2") {
        p1.src = "../Files/paper.png"
        if (i > 1){
            tooearly = "Paper"
            console.log("you",tooearly);
            
        }
        pick = "Paper"
        buttons.style.display = "none"
    }
    clearInterval(rotationp1);
    clearInterval(rotationp2)
})

scissor.addEventListener("click", (e) => {
    p1.src = "../Files/scissor.png"
    if (i > 1){
        tooearly = "Scissor"
        console.log("you",tooearly);
        
    }
    pick = "Scissor"
    buttons.style.display = "none"
    clearInterval(rotationp1);
    clearInterval(rotationp2)
})  
document.addEventListener("keydown", function(event){
    if (event.key === "3") {
        p1.src = "../Files/scissor.png"
        if (i > 1){
            tooearly = "Scissor"
            console.log("you",tooearly);
            
        }
        pick = "Scissor"
        buttons.style.display = "none"
    }
    clearInterval(rotationp1);
    clearInterval(rotationp2)
})


function ai() {
    console.log("AI function called");
    if (tooearly == "") {
        const choices = ["Rock", "Paper", "Scissor"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
}

function rotate() {
    if (pick == ""){
        const pic = ["../Files/scissor.png", "../Files/paper.png", "../Files/rock.png"];
        const randomIndex = Math.floor(Math.random() * pic.length);
        //console.log(`randomIndex = ${randomIndex}`);
        pick = "";
        return pic[randomIndex];
        
    }
    
}


