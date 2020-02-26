export class AddService{
    constructor(){
        this.inputs=document.getElementById('numbers');

    }
    addInput(){
        const newNumber=document.createElement('input');
        newNumber.setAttribute('class','number');
        newNumber.setAttribute('type','number');
        this.inputs.append(newNumber);
    }
}