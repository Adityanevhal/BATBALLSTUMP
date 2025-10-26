function batc(){
    let  randomnum = Math.random()*3;
    let compchoice ;
    if(randomnum > 0 && randomnum <= 1){
        compchoice = 'BAT';
        }
        else if (randomnum > 1 && randomnum <= 2){
            compchoice = 'BALL';
        }
        else{
            compchoice = 'STUMP';
        }
        let result;
        if(compchoice === 'BAT'){
            result ='It`s a Tie !';
            }
        else if( compchoice === 'BALL'){
                result = 'You Win!';
                }
        else if(compchoice === 'STUMP'){
                result = 'You Lose!';
                }
        alert(`You chosen Bat. Computer chosen ${compchoice} and ${result}`);
}
function ballc(){
    let  randomnum = Math.random()*3;
    let compchoice ;
    if(randomnum > 0 && randomnum <= 1){
        compchoice = 'BAT';
        }
        else if (randomnum > 1 && randomnum <= 2){
            compchoice = 'BALL';
        }
        else{
            compchoice = 'STUMP';
        }
        let result;
        if(compchoice === 'BAT'){
            result ='You Lose!';
            }
        else if( compchoice === 'BALL'){
                result = 'It`s a Tie !';
                }
        else if(compchoice === 'STUMP'){
                result = 'You Win!';
                }
        alert(`You chosen Ball. Computer chosen ${compchoice} and ${result}`);
}
function stumpc(){
    let  randomnum = Math.random()*3;
    let compchoice ;
    if(randomnum > 0 && randomnum <= 1){
        compchoice = 'BAT';
        }
        else if (randomnum > 1 && randomnum <= 2){
            compchoice = 'BALL';
        }
        else{
            compchoice = 'STUMP';
        }
        let result;
        if(compchoice === 'BAT'){
            result ='You Win!';
            }
        else if( compchoice === 'BALL'){
                result = 'you Lose!';
                }
        else if(compchoice === 'STUMP'){
                result = 'It`s a Tie !';
                }
        alert(`You chosen Stump. Computer chosen ${compchoice} and ${result}`);
}