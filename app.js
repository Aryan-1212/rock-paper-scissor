const user_img = document.createElement('img');
const com_img = document.createElement('img');
let user_score=0;
let com_score=0;
let draw_score=0;

resetScore = () =>{
    user_score=0;
    com_score=0;
    draw_score=0;
}

choice_selected = (e) =>{
    const random = Math.random();
    let com_choice;
    if(random>0 && random<=0.333){
        com_choice = 'rock';
    }else if(random>0.333 && random<0.666){
        com_choice = 'paper';
    }else{
        com_choice = 'scissor';
    }

    const user_choice = e.target.id;
    let winner;

    if(user_choice==='rock'){
        if(com_choice==='paper'){
            winner = "Computer";
            com_score++;
        }else if(com_choice==='scissor'){
            winner = "User";
            user_score++;
        }else if(com_choice==='rock'){
            winner = 'draw';
            draw_score++;
        }
    }else if(user_choice==='paper'){
        if(com_choice==='rock'){
            winner = "User";
            user_score++;
        }else if(com_choice==='scissor'){
            winner = "Computer";
            com_score++;
        }else if(com_choice==='paper'){
            winner = 'draw';
            draw_score++;
        }
    }else if(user_choice==='scissor'){
        if(com_choice==='rock'){
            winner = "Computer";
            com_score++;
        }else if(com_choice==='paper'){
            winner = "User";
            user_score++;
        }else if(com_choice==='scissor'){
            winner = 'draw';
            draw_score++;
        }
    }

    const res_title = (winner==='draw')?'Game DRAW!':`${winner} WINS!`;
    user_img.src = `image/${user_choice}.png`;
    com_img.src = `image/${com_choice}.png`;
    
    document.getElementById('user-selected-image').appendChild(user_img);
    document.getElementById('res-title').innerHTML = res_title;
    document.getElementById('com-selected-image').appendChild(com_img);
    document.getElementById('com-selected-image');
    document.getElementById('com-score').innerHTML = com_score;
    document.getElementById('user-score').innerHTML = user_score;
    document.getElementById('draw-score').innerHTML = draw_score;
}