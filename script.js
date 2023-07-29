/* LET CREATE THE FREAKING GAME, LET'S GO */

let playerScore= 0;
let computerScore= 0;
let roundWinner= ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') ||
      (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSOR') ||
      (computerSelection === 'SCISSOR' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
  }

  function getRandomChoice() {
      let randonNumber = Math.floor(Math.random() * 3)
      switch (randonNumber) {
          case 0:
              return 'ROCK'
          case 1:
              return 'PAPER'
          case 2:
              return 'SCISSOR'
        }
      }
  function Gameover() {
      return playerScore === 5|| computerScore === 5
  }

 const scoreInfo = document.querySelector('#scoreInfo')
 const scoreMessage = document.querySelector('#scoreMessage')
 const playerScoreDisplay = document.querySelector('#playerScore')
 const computerScoreDisplay = document.querySelector('#computerScore')
 const playerSign = document.querySelector('#playerSign')
 const computerSign = document.querySelector('#computerSign')
 const Rock = document.querySelector('#Rock')
 const Paper = document.querySelector('#Paper')
 const Scissor = document.querySelector('#Scissor')
 const endgameModal = document.getElementById('endgameModal')
 const endgameMsg = document.getElementById('endgameMsg')
 const overlay = document.getElementById('overlay')
 const restartBtn = documentgetElementById('restartBtn')
 
 Rock.addEventListener('click', () => handleClick('ROCK'))
 Paper.addEventListener('Click', () => handleClick('PAPER'))
 Scissor.addEventListener('Click', () => handleClick('SCISSOR'))

 restartBtn.addEventListener('Click',restartGame)
 overlay.addEventListener('Click', closeEndgameModal)

 function handleClick(playerSelection) {
     if (Gameover()) {
         openEndgameModal()
         return
     }

     const computerSelection = getRandomChoice();
     playRound(playerSelection, computerSelection)
     updateScore()

     if (Gameover()) {
         openEndgameModal()
         setFinalMessage()
     }
 }

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a Tie"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'YOU WON!'
    } else if (roundWinner = 'computer') {
        scoreInfo.textContent === 'YOU LOST!'
    }

    playerScoreDisplay.textContent = `Player: ${playerScore}`
    computerScoreDisplay.textContent =`Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection){
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)}
        beats ${computerSelection.tolowerCase()}`
        return
    }
    if(winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)}
        loses ${computerSelection.tolowerCase()} WINS`
        return
    }
    else {
        scoreMessage.textContent =`${capitalizeFirstLetter(playerSelection)} TIES WITH 
        ${computerSelection.tolowerCase()}`
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  
function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  
function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }

function restartGame() {
      playerScore = 0
      computerScore = 0
      scoreInfo.textContent = 'Pick the Ability'
      scoreMessage.textContent = 'GET TO 10 AND WIN THE GAME'
      playerScoreDisplay.textContent = 'Player: 0'
      computerScoreDisplay.textContent = 'Computer: 0'
      playerSign.textContent = '?'
      computerSign.textContent = '?'
      endgameModal.classList.remove('active')
      overlay.classList.remove('active')
  }