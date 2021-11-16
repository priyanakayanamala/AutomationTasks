

//Write function which accepts Array input (check all array elements are numbers) 
//and print elements which are between 50 to 100

function arrayInput(x){
    if(Array.isArray(x)){
        for(let i=0;i<=x.length;i++){
            if(!isNaN(x[i])){
                if(x[i]>50 && x[i]<100){
                console.log(x[i]);
                }
            }
        }
    }
    else{
        console.log("enter valid array");
    }
}
arrayInput([1,27,78,56,566,99]);


function arrayInput(input){
    if(Array.isArray(input)){
        if(input.length == 0){
            console.log('enter the array, array is empty')
        }
        else{
            const arr1 = input.filter(array_element);
            function array_element(value){
                return (!isNaN(value) && (value>50 && value<100));
            }
            console.log(arr1);
        }
    }
    else{
        console.log("enter valid array");
    }
}
arrayInput([1,27,78,56,566,99]);
arrayInput([]);



function arrayInput(input){
    if(Array.isArray(input)){
        if(input.length == 0){
            console.log('enter the array , array is empty')
        }
        else{
            const arr1 = input.forEach((value) => {
                if(!isNaN(value) && (value>50 && value<100)){
                    console.log(value);
                }

            });
        }
    }
    else{
        console.log('enter the valid array')
    }
}
arrayInput([1,27,78,56,566,99]);
arrayInput([]);


//
// let x = [1,34,45,67];
// const arr = x.every(array);
    
// function array(value){
//     if( value == (value>50 && value<100)){
//         return value;
//     }
// }
