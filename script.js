
function computerPlay() {
    var value = ["Rock", "Paper", "Scissors"];
    var rand = value[Math.floor(Math.random() * value.length)];
    return rand;
    
}

 function playerPlay() {
	while (true) {
		let selection = prompt("Enter your choiche: Rock, Paper, or Scissors");
		if (selection!=null) {
			selection = selection.toLowerCase();
		}
		if (selection=='rock') {
			return 'Rock';
		} else if (selection=='paper') {
			return 'Paper';
		} else if (selection=='scissors') {
			return 'Scissors';
		} else {
			alert(`Invalid choice`);
		}
    }
}

function playRound(playerSelection, computerSelection, score) {
	if (((playerSelection == 'Rock') && (computerSelection == 'Scissors'))  ||
	   ((playerSelection == 'Paper') && (computerSelection == 'Rock'))      ||
	   ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))) {
		alert(`You win! ${playerSelection} beats ${computerSelection}`);
		score[0]++;
	} else if (playerSelection==computerSelection) {
		alert("Tie!");
	} else {
		alert(`You lose! ${computerSelection} beats ${playerSelection}`);
		score[1]++;

	}
	return score;
}

function game() {
	let score = [0,0]; 

	for (let i=0;i<5;i++) {
		score=playRound(playerPlay(),computerPlay(), score);
	}
	let result;

	if (score[0]>score[1]) {
		result='win';
	} else if (score[0]<score[1]) {
		result='lose';
	} else {
		result='got a tie';
	}
		alert(`The final score is ${score[0]} to ${score[1]}. You ${result}!`);
	}