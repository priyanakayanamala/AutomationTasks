
//Write function which check string is palindrome (do not use string reverse check) 
//Also print if palindrome is exact case sensitive (example LeveL is trie and Level is false)

function checkPalindrome(str) {
    let str1 = str.toLowerCase();
    for (let i = 0; i < str.length/2 ; i++) {
        if (str1[i] !== str1[str1.length - 1 - i]) {
            return 'It is not a palindrome';
        }
        if(str[i] !== str[str.length - 1 - i]){
            return 'It is not a palindrome because considering the cases';
            }
        else{
            return 'It is a palindrome';
        }
    }
    
}
console.log(checkPalindrome("Level")); 
console.log(checkPalindrome("priya"));
console.log(checkPalindrome('level'));


// function ischeckPalindrome(str) {
//     var x;
//     var first, second;
//     if (typeof str === 'string') {
//         if (str.length % 2 == 0) {
//             x = (str.length) / 2;
//             first = str.slice(x);
//             //console.log(y);
//             second = str.slice(0, x);
//         } else {
//             x = (str.length / 2) + 1;
//             first = str.slice(-x);
//             //console.log(y);
//             second = str.slice(0, x);
//         }
//         let half = first.split('').reverse().join('');
//         if (half === second) {
//             return 'palindrome';
//         } else {
//             return 'not palindrome'
//         }

//     }
// }
// const result = ischeckPalindrome('madam');
// console.log(result);
