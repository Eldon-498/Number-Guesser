let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random()*9);
    
}
const compareGuesses = (humanGuess, computerGuess, secretTarget) =>{
   // secretTarget = generateTarget();   
    const  humanToTargetDiff = Math.abs(humanGuess - secretTarget);
    const computerToTargetDiff = Math.abs(computerGuess - secretTarget);      
    return humanToTargetDiff <= computerToTargetDiff;

    /*if(humanToTargetDiff === computerToTargetDiff || humanToTargetDiff < computerToTargetDiff){
       return true;
    }
    else if(computerToTargetDiff > humanToTargetDiff){
        return false;
    } 
    */
       
}
const updateScore = winner => {
    if(winner === 'human'){
        humanScore += 1;
    }
    if(winner === 'computer'){
        computerScore += 1;
    }

}
const advanceRound = () => currentRoundNumber += 1;


generateTarget();
compareGuesses();
updateScore();
advanceRound();


