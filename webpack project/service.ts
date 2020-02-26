interface ISevice{
    num1:number;
    num2:number;

}

const log = (service: ISevice) => console.log(service.num1, service.num2);

const start = console.time();

log({num1: 5, num2: 7});

const end = console.timeEnd();
const diff = Number(end) - Number(start);
console.log(diff);
