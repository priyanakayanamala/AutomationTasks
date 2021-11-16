//Write Basic calc class to perform ADD, SUB, MUL, DIV


class Calc {
    constructor(value1,value2){
        this.value1 = value1;
        this.value2 = value2;
    }
   
    Add(){
        console.log(this.value1 + this.value2);
    }
    Sub(){
        console.log(this.value1 - this.value2);
    }
    Mul(v1=this.value1, v2=this.value2){
        return (v1 * v2);
        //console.log(this.value1 * this.value2);
        //console.log(result);
    }
    Div(){
        console.log(this.value1 / this.value2);
    }
    // test(x){
    //     console.log(x + this.input1 + "base");
    // }
}
// let calc = new Calc(2,1);
// calc.Add();
// calc.Sub();
// calc.Mul(2,3);
// calc.Div();


//Write Advanced calc class extending base calc to perform power of two numbers 
//(base and power value as inputs - implement get and set methods for base and power properties)


class Advanced_calc extends Calc{
    constructor(value1,value2){
        super(value1,value2)
    }
    
    set base(x){
        this.value1 = x;
    }
    set power(y){
        this.value2 = y;
    }
    basepower(){
        let temp = 1;
        while(this.value2>0){
            temp = this.Mul(temp,this.value1);
            this.value2--;
        }
        return (temp);
    }
    // basepower(){
    //     let variable =1;
    //     for(let i=0;i<this.value2;i++){
    //         variable = super.Mul(variable,this.value1);
    //     }
    //     return variable;
        
    // }
   
    // test(x,y){
    //     console.log(x + this.input1 + y+ this.input1+"subclass");
    // }
}

let calc2 = new Advanced_calc();
calc2.base = 2;
calc2.power = 4;
console.log(calc2.basepower());