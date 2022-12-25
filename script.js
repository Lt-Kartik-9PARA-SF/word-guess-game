let ans = "CHEST";
let i = 0;
let chances = 5;
let correct = 0;
let one = document.getElementById('0');
let two = document.getElementById('1');
let three = document.getElementById('2');
let four = document.getElementById('3');
let five = document.getElementById('4');
let remainingChances = document.getElementById('rem');
let answer = document.getElementById('answer')
let inputs = [one,two,three,four,five];
let box22 = document.getElementById('id');
one.focus();
const func = (event) =>{
   // console.log(event.target.id);
   if(event.key == "Backspace"){
    alert("Going back is not allowed");
    return;
    }
    let inp = event.target.value;

        event.target.parentElement.style.backgroundColor = "red";
    if(inp.toUpperCase() === ans.charAt(event.target.id)){
        event.target.value = ans.charAt(event.target.id);
        event.target.parentElement.style.backgroundColor = "green";
        event.target.style.backgroundColor = "cyan";
        correct++;
       
        if(correct === 5){
            //alert("Congratulations!");
            box22.innerHTML = `<h1>CONGRATULATIONS<br>You Won</h1>`
            return;
        }
        if(event.target.id < 4){
            inputs[Number(event.target.id )+1].focus();
           }
       // console.log(i);
    }
    else{
        
        if(chances != 0){
         chances--;
        }
        
        remainingChances.innerText = chances;
        alert(`Wrong guess! ${chances} guesses remaining.\nHint:- C**S*`);
        
        event.target.value = "";
        if(chances === 0){
            alert("You've run out of guesses! Game over!");
            box22.innerHTML=`<h1>Game Over</h1>`
            answer.innerText = `Answer is ${ans}`;
        
            one.focus();
           
            return;
        }
       
    }
    i++;
}


inputs.forEach(element => {
    element.addEventListener('keyup',func)
});