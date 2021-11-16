
//Write function which accepts Array input and prints new array with reversing the string elements

// function array_reverse(){
//     const array = ['priya','asha','lavanya','chandra'];
//     let arrays = array.reverse();
//     console.log(arrays);
// }
// array_reverse();


// function string_reverse1(){
//     const string = 'priya';
//     let arrays = string.split('').reverse().join('');
//     console.log(arrays);
// }
// string_reverse1();

// function array_reverse2(){
//     const array = ['priya','asha','lavanya','chandra'];
//     const array1 = array.reverse();
//     for(let i=0;i<array1.length;i++){
//         for(let j=0;j<=i;j++){
//             var array2 = array1[i].split('').reverse().join('');
//         }
//         console.log(array2);
//     }
// }
// array_reverse2();


//map


function array_reverse(){
    const array = ['priya','asha','lavanya','chandra'];
    const array1 = array.reverse();
    const array2 = array1.map((value) => {
       return (value.split('').reverse().join(''));

    });
    console.log(array2);
}
array_reverse();