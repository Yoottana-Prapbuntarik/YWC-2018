
let ans;
let n;
let at = ['C','D','H','S'];
function cardAt (Number){
let card = ['2','3','4','5','6','7','8','9','0','J','Q','K','A'];
ans = card[Number];
return ans;
}

var readline = require('readline-sync');

n = readline.question('input number : ');
if((n >= 0 ) && (n <= 12)){
    console.log(cardAt(n) + at[0]);
}

else if((n > 12 ) && (n <= 25)) {
    console.log(cardAt(n-13) + at[1]);
}

else if((n > 25 ) && (n <= 38)) {
    console.log(cardAt(n-26) + at[2]);
}

else if((n > 38 ) && (n <= 51)) {
    console.log(cardAt(n-39) + at[3]);
}
