
//Write function which accepts Array input as strings print new array 
//in alphabetical order by first character. lower case should be considered first.

// var myArray = ['priya','Priya','Lavanya','lavanya','asha','Asha'];

// let sorted_array = myArray.sort(function(a, b){

//     var test = a.charCodeAt(0) <= 90 && b.charCodeAt(0) <= 90;

//     if(test) return a.charCodeAt(0)-b.charCodeAt(0);
//     else if(a.charCodeAt(0) <= 90) return 1;
//     else if(b.charCodeAt(0) <= 90) return -1;
//     else return a.charCodeAt(0)-b.charCodeAt(0);

// });
// console.log(sorted_array);




let variable = ['priya','Priya','lavanya','Lavanya','asha','Asha'].sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(variable.sort());



// function array_reverse(array1) {
//     if (Array.isArray(array1)) {
//         let result = array1.sort().reverse();
//         return result;
//     } else {
//         console.log("Enter valid array")
//     }
// }
// console.log(array_reverse(['Lavanya', 'lavanya', 'lAvanya']));


//var myArray = ['priya','Priya','Lavanya','lavanya','asha','Asha'];
//let sorted_array = myArray.sort((a,b) => b.charCodeAt(0)-a.charCodeAt(0));