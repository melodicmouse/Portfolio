const str = document.getElementById('input').value;


function reverseString(str){
    let string = str;
    let splitStr = string.split('');
    let revString = splitStr.reverse('');
    let joinStr = revString.join('');
    return joinStr;
}

function compare(){
    const str = document.getElementById('input').value;
    var newString = str.replace(/[^A-Z0-9]/ig, "");
    if (reverseString(newString).toLowerCase() === newString.toLowerCase()){
          document.querySelector("#answer").innerHTML = 'Its a Palindrom';
    } else {
          document.querySelector("#answer").innerHTML =  'Its not a Palindrom';
    }
  }


