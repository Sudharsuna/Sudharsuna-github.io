    let score=JSON.parse(localStorage.getItem('score')) || {
      wins:0,
      loses :0,
      ties :0
    };

    update();

    let commove='';
    let result='';
    function pickcommove(){
    const randomnum = Math.random();

    if(randomnum>=0 && randomnum<1/3){
    commove='Rock';
    }
    else if(randomnum>=1/3 && randomnum<2/3){
    commove='Paper';
    }
    else if(randomnum>=2/3 && randomnum<1){
    commove='Scissors';
    }


    return commove;

    }
    function playgame(playermove){
      const commove=pickcommove();
        if (playermove === 'Scissors' ){
        if(commove==='Rock')
        {result ='you lose';}
        else if(commove==='Scissors')
        {
        result='tie'  }
        else if(commove==='Paper')
        {result='you won';}

    }
    else if(playermove === 'Paper'){
    if(commove==='Rock')
    {result ='you won';}
    else if(commove==='Scissors'){
    result='you lose';       }
    else if(commove==='Paper')
    {result='tie';}

    }
    else if(playermove==='Rock'){
    if(commove==='Rock')
    {result ='tie';}
    else if(commove==='Scissors'){
    result='you won';       }
    else if(commove==='Paper')
    {result='you lose';}
    }

    if(result === 'you won'){
    score.wins += 1; 
    }
    else if(result === 'you lose'){
    score.loses +=1;
    } 
    else if (result === 'tie'){
    score.ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score))
        update();
        document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-moves').
        innerHTML=`you
    <img src="images/${playermove}-emoji.png " class="moveicon">
    <img src="images/${commove}-emoji.png"  class="moveicon">computer`

    }


    function update(){
      document.querySelector('.js-score')
    .innerHTML=`wins:${score.wins}, lose: ${score.loses} , ties: ${score.ties} `;

    }