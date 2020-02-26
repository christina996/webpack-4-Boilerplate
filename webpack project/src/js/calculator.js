import {Math} from './math'
import {getnum} from './getnumbers' 
export class Calculator{

    constructor(){
        // this.numbers=document.getElementsByClassName('number');
        this.res=document.getElementById('result');
        this.math=new Math();
    }
    onSum(){
       const numbers= getnum();
       this.res.textContent=this.math.sum(...numbers);

    }
    onMul(){
const numbers=getnum();
this.res.textContent=this.math.mul(...numbers);
    }
}