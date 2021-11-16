
//Write function which print 1 to 10 with 3 seconds 
//delay between each character printing (user promise async and await)

// async function fun12(){
//     for(let i=0;i<=10;i++){
//         let input = await new Promise((res) => {
//             const one = setInterval(() => {
//                 res(i);
//                 if(i === 10 + i){
//                     clearInterval(one);
//                 }
//             }, 3000);
//         });
//         console.log(input);
//     }
// } 
// fun12();


async function delay(){
    return await promiseA;
 }
 const promiseA = new Promise ( resolve =>{
     resolve('');
     const num1 = 0, num2 = 10;
     let i = num1;
     const intervalId = setInterval(() => {
     console.log(i++);
     if (i === num2 + 1)
         clearInterval(intervalId);
 }, 3000);
 });
 delay();
 
 
function promiseA() {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, 3000);
    })
}
  
async function counter() {
    for (let i = 0; i <= 10; i++) {
        await promiseA();
        console.log(i);
        console.log("returning promise");
    }
}
  
counter();


// async function delay(){
//     return await new Promise(resolve => setInterval(() => {
//         resolve()
//     }, 3000))
// }
// function resolve(){
//     for(let i=0;i<=10;i++){
//         console.log(i);
        
//     }
// }
// let run = async ()=>{
//     await delay();
//     resolve();
// }
// console.log(run());


// function fun(){
//     for(let i=0;i<=10;i++){
//      console.log(i);
//      let one= setInterval(fun,3000);
//      if(i === 10 +i){
//          clearInterval(one);
//      }
//     }
// }

// let interval = async () =>{
//     await fun();
// }
// interval();

// function fun12(){
// const num1 = 1, num2 = 10;
// let i = num1;
// const intervalId = setInterval(() => {
//     console.log(i++);
//     if (i === num2 + 1)
//         clearInterval(intervalId);
// }, 3000);
// }




// function fun12(){
//     const promiseB = new Promise(resolve => {
//         resolve();
//         for(let i=0;i<=10;i++){
//             console.log(i)
//         }
//     })
//     console.log(promiseB)
// }
// function funB(){
//     const Interval = setInterval(() => {
//         fun12();
//     }, 3000);
// }
// async function fun(){
//     await fun12();
// }

