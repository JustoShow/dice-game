var player1 = Roll();
var player2 = Roll();

GetWinner();
DisplayPlayerDice(player1, player2);

function Roll(){
    var dieRolled = Math.random();
    dieRolled *= 6;
    dieRolled = Math.floor(dieRolled) + 1;
    return dieRolled;
}

function GetWinner(){
    if (player1 === player2){
        //Game tied
        DisplayWinner("Game is TIED.");
    }
    else if (player1 > player2){
        //Player 1 won
        DisplayWinner("Player 1 is the WINNER!");
        document.getElementById("player1Wins").classList.toggle("crown-winner");
    }
    else{
        //Player 2 won
        DisplayWinner("Player 2 is the WINNER!");
        document.getElementById("player2Wins").classList.toggle("crown-winner");
    }
}

function DisplayWinner(message){
    document.getElementById("winner").textContent = message;
}

function DisplayPlayerDice(player1Die, player2Die){
    var die1 = document.getElementById("player1Die");
    var die2 = document.getElementById("player2Die");

    die1.classList.remove("fa-dice");
    die2.classList.remove("fa-dice");

    die1.classList.add(GetDiceIcon(player1Die));
    die2.classList.add(GetDiceIcon(player2Die));
}

function GetDiceIcon(rollNumber){
    var dieIcon;

    switch(rollNumber){
        case 1:
            dieIcon = "fa-dice-one";
            break;
        case 2:
            dieIcon = "fa-dice-two";
            break;
        case 3:
            dieIcon = "fa-dice-three";
            break;
        case 4:
            dieIcon = "fa-dice-four";
            break;
        case 5:
            dieIcon = "fa-dice-five";
            break;
        case 6:
            dieIcon = "fa-dice-six";
            break;
    }

    return dieIcon;
}


