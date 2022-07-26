const str = document.getElementById('input').value;


function reverseString(str){
    let string = str.toLowerCase();
    let splitStr = string.split('');
    let revString = splitStr.reverse('');
    let joinStr = revString.join('');
    return joinStr;
}

function compare(str){
 if (reverseString(str) === str){
        console.log('Its a Palindrom')
    } else {
        console.log('Its not a Palindrom')
    }
}