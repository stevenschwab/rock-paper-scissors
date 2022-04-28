const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Please input a valid choice.');
    }
  }
  
  const getComputerChoice = () => {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return 'rock';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You won';
    } else if (userChoice === computerChoice) {
        return 'The game was a tie.'
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won';
      } else {
        return 'You won';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won';
      } else {
        return 'You won';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won';
      } else {
        return 'You won';
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();