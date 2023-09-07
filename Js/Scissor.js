//Here is were i get the classes and IDs from my html's
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

//i is the timer
let i = 3
//l is the round you are on.
let l = 1
// tooearly wil get a value if you click/make you choise befour the timer hits 1.
let tooearly = ""
// pick wil get the value of your choise.
let pick = ""

// playerwins wil go upp if the player wins a round
let playerWins = 0
//computerWins wil go upp if the computer wins a round.
let computerWins = 0
//roundsplayd ceeps trak of how menny games have been playd.
let roundsPlayed = 0
//the game ends wen roundsplayd and totalrounds ==
const totalRounds = 3

//b1... is were the score of p1 is displayd
let b1 = p1score.innerHTML 
//b2... is were the score of p2 is displayd
let b2 = p2score.innerHTML


//the game starts wen the player clicks the START Buton.
start.addEventListener("click", (e) => {
    start.style.display = "none"
    buttons.style.display = "block"
    //startNewRound() Runs the function that has Everything with the rounds in it.
    startNewRound()
    round.textContent = `Round ${l}`
    if (playerWins > computerWins) {
        p1score.textContent -= `${b1+playerWins}`

    } else if (computerWins > playerWins){
        p2score.textContent -= `${b2+computerWins}`
    }

    //this cleans playerwins,computerwins and roundsplayd for a hole new round.
    playerWins = 0
    computerWins = 0
    roundsPlayed = 0

    
})

//Bottons
//Buton for choosing Rock
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
//Choosing Rock with number 1 on keyboard
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

//Button for Choosing Paper
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
// Choosing Paper with button 2 on kayboard
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

//Button for chosing scissors
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
//Choosing scissords with button 3 on keyboard
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

//The Function that know the order and what wil happen wen i round starts.
function startNewRound() {
    buttons.style.display = "block"
    counter.innerHTML = i
    i = 3
    b1 = 0
    b2 = 0
    setTimeout(() => {
        results.style.display = "none"
        counter.style.display = "block"
        results.textContent = ``
        //Defalt picture questionMark.
        p1.src = "../Files/QuestionMark.png"
        p2.src = "../Files/QuestionMark.png"
        pick = ""
        tooearly = ""
        //This if statment wil be true if none of the players have won 2 rounds and the rounds playd is less then the total rounds in one game. (3)
        if (roundsPlayed < totalRounds && p1score != 2 && p2score != 2) {
            counter.innerHTML = i
            counter.style.display = "block"
            //This if makes it so wen the player has not yet chousen a hand, the picture of p1 wil randomly go thrue the choises.
            if (pick == "") {
                rotationp1 = setInterval(() => {
                    p1.src = rotate();
                    if (i == 0) {
                        clearInterval(rotationp1);
                    }
                }, 250);
            }
            //This if makes it so wen the timer is worth more or the same as 0 the p2's picture wil randomly go thrue the posible choises.
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

                    // This code changes the Ai's picture(choise) after what they pick.
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
                
                //i is the times that at the end of the code wil count down by 1.
                i-=1
                counter.innerHTML = i
                
                
            },1000)
        } else {
            //If this else is run, the PlayAgain button wil appere and if you click it, a new round wil begin.
            startbutton.src = "../Files/playagain.jpg"
            roundaudio.play()

            buttons.style.display = "none"
            start.style.display = "block"
            roundsPlayed = 0

            l++

            //This code wil console log the winner of the 3 rounds
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

//A Function that Takes inn the Players choise and the AI's to deside ho wins
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

//The Function that randomly chooses the hand of the AI/P2.
function ai() {
    console.log("AI function called");
    if (tooearly == "") {
        const choices = ["Rock", "Paper", "Scissor"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
}

//The Function that randomly chooses a picture for the choises befour you pick.
function rotate() {
    if (pick == ""){
        const pic = ["../Files/scissor.png", "../Files/paper.png", "../Files/rock.png"];
        const randomIndex = Math.floor(Math.random() * pic.length);
        //console.log(`randomIndex = ${randomIndex}`);
        pick = "";
        return pic[randomIndex];
        
    }
    
}


