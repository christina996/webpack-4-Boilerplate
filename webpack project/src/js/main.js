import {AddService} from './addservice';
import {Calculator} from './calculator';
const btn=document.getElementById('addinput');
const sumbtn=document.getElementById('sumBtn');
const mulbtn=document.getElementById('mulBtn');

const addservice=new AddService();
const calc=new Calculator();


btn.addEventListener('click',()=>{
addservice.addInput();
});

sumbtn.addEventListener('click',()=>{
calc.onSum();
})

mulbtn.addEventListener('click',()=>{
calc.onMul();
})


