export class Math{

    sum(...numbers){
        numbers.reduce((elem,acc)=>elem+acc,0);
    }
    mul(...numbers){
        numbers.reduce((elem,acc)=>elem*acc,1);
    }
}