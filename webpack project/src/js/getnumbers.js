export function getnum(){
    const numbers=document.getElementsByClassName('number');
    const arr=Array.from(numbers);
    return arr.map((input)=>+input.value);
}