const game = ()=> {
    let pScore = 0;
    let cScore = 0;


    const startGame = () => {
        const playBtn = document.querySelector('.intro button ');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    };


    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
            this.style.animation = ""
        });
        });
        
        const computerOptions = ['rock','paper','scissors'];
        
        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./static/assets/${this.textContent}.png`;
                    computerHand.src = `./static/assets/${computerChoice}.png`;
                  }, 2000);
                  playerHand.style.animation = "shakePlayer 2s ease";
                  computerHand.style.animation = "shakeComputer 2s ease";
                });
            });


        };

    
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        restartGame();
    }

    const restartGame = () => {
        const winner = document.querySelector('.winner');
        if (pScore >= 5){
        cScore = 0
        pScore = 0
        winner.innerHTML = "CONGRATULATIONS!<br>YOU WIN THE GAME!";
        winner.style.color = 'red';
        startGame();
        }else if (cScore >= 5){
            cScore = 0
            pScore = 0
            winner.innerHTML = "BAD LUCK!<br>TRY AGAIN?";
            winner.style.color = 'red';
            startGame();
        }
    }

    const compareHands = (playerChoice,computerChoice) => {
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = "it's a tie"
            winner.style.color = "white"
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors'){
                winner.textContent = "Player wins"
                winner.style.color = "white"
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Computer wins"
                winner.style.color = "white"
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors'){
                winner.textContent = "Computer wins"
                winner.style.color = "white"
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Player wins"
                winner.style.color = "white"
                pScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock'){
                winner.textContent = "Computer wins"
                winner.style.color = "white"
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Player wins"
                winner.style.color = "white"
                pScore++;
                updateScore();
                return;
            }
        }

        
        
    }
    
    playMatch();
    startGame();
};
    game();







