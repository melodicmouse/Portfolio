const inputField = document.querySelector("#input").value;

function spinAround(inputField) {
    let str =inputField.toString();
    let arr = str.split('');
    let swap = arr.reverse();
    let reJoin = swap.join('');
    return reJoin;
}


function compare() {
if (spinAround() === inputField){
    //document.getElementById('answer').innerHTML = "It's a Palendrom!";
    console.log("It's a Palendrom!");
} else {
    //document.getElementById('answer').innerHTML = "It's not a Palendrom";
    console.log("It's not a Palendrom")
}
}






/*const btn = document.getElementById('#submit');
let input = document.getElementById('#input').value;




function reverseString(input) {
    lowerInput.toString().toLowerCase();
    let splitString = lowerInput.split('');
    let reverse = splitString.reverse();
    let reJoin = reverse.join('');
    return reJoin;
}


function compare(lowerInput){
    if (reverseString(lowerInput) === lowerInput){
       document.getElementById('answer').innerHTML = ('Its a Palendrom');
    } else {
        document.getElementById('answer').innerHTML= ("It's not a Palendrom");
    }
}

// btn.addEventListener('click' , compare(lowerInput));
*/







    

