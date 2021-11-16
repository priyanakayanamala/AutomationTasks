
//Add new custom method for Date() buit in object - toIndDateString which 
//print current date in dd/mm/yy format (tip use prototype to add new method)


const today = new Date();
Date.prototype.toIndDateString = (date, format) =>{
   return  format.replace('dd', date.getDate())
    .replace('mm', date.getMonth() + 1)
    .replace('yy', date.getFullYear().toString().substr(-2));

}
console.log(today.toIndDateString(today, 'dd/mm/yy'));



// let date = new Date();
// Date.prototype.toIndDateString=()=>{  return (date.getDate() + '/' +
//                                 (date.getMonth()+1) + '/' +
//                                 date.getFullYear());}
// console.log(date.toIndDateString());