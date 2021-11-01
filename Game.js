let squares=["","","","","","","","",""];
let board=["","","","","","","","",""];
let winningCombonations=[];
let previousTurn="O";
let turn="X";
let endGame=document.getElementById("end");

for (let i=1;i<10;i++){squares[i-1]=document.getElementById(i);}



function setSquare(i)
{
    if (board[i]=="" && check(board)==false){
        squares[i].innerHTML=turn;
        board[i]=turn;
        if (turn=="X"){turn="O";previousTurn="X";}
        else if(turn=="O"){turn="X";previousTurn="O";}
    }

    else{}
    
    if (check(board)==true)
    {
        endGame.innerHTML=("Game Over! " + previousTurn + " is the winner.");
    }
}

function check(sq)
{
    if ((sq[0]==sq[1])&&(sq[0]==sq[2])&&(sq[0]!="")){return true;}
    else if((sq[3]==sq[4])&&(sq[3]==sq[5])&&(sq[3]!="")){return true;}
    else if((sq[6]==sq[7])&&(sq[6]==sq[8])&&(sq[6]!="")){return true;}
    else if((sq[0]==sq[3])&&(sq[0]==sq[6])&&(sq[0]!="")){return true;}
    else if((sq[1]==sq[4])&&(sq[1]==sq[7])&&(sq[1]!="")){return true;}
    else if((sq[2]==sq[5])&&(sq[2]==sq[8])&&(sq[2]!="")){return true;}
    else if((sq[0]==sq[4])&&(sq[0]==sq[8])&&(sq[0]!="")){return true;}
    else if((sq[2]==sq[4])&&(sq[2]==sq[6])&&(sq[2]!="")){return true;}
    else{return false;}
}
