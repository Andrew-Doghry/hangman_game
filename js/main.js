let hangman = document.querySelectorAll('.hangman > div');
let solution = document.querySelector('.solution');
let cards = document.querySelectorAll('.gameContainer > div');
let won = document.querySelector('.won');
let lost = document.querySelector('.lost');
console.log()
let pun = 0,charsNum= 0;
let result = 'go'
for(let i = 0 ; i<result.length;i++){
solution.appendChild(document.createElement('div'));
}
hangman.forEach((hangman)=>{
    hangman.style.display='none';
})
document.addEventListener('click',(e)=>{
if(e.target.classList.contains('card')){
    if(takeArg(e.target.innerText)){
    if(charsNum===result.length){
    console.log('won');
    won.style.display='block'
    
for(let i = 0 ; i < cards.length;i++){
    cards[i].style.pointerEvents='none';
    cards[i].classList.add('disabled');
    }
    }
    }else{
        pun++;
        punish(pun);
        if(pun===hangman.length){
            console.log('lost')
            lost.style.display='block'
            for(let i = 0 ; i < cards.length;i++){
            cards[i].style.pointerEvents='none';
            cards[i].classList.add('disabled');
            }
            }
    }
    e.target.style.pointerEvents ='none';
    e.target.classList.add('disabled');
}
})
function takeArg(letter){
if(result.includes(letter.toLowerCase())){
solution.children[result.indexOf(letter.toLowerCase())].innerText = letter;
charsNum++;
return true;
}else{
return false;
}
}
function punish(pun){
for(let i = 0;i<pun;i++){
hangman[i].style.display='block';
}

}
