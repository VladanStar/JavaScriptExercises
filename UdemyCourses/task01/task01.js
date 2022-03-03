class Human {
    gender ='Male';
    printGender = ()=>{
        console.log(this.gender);
    }
}
class Person extends Human {
    name = "Max";
    gender = 'female';

   printMyName = ()=> {
       console.log(this.name);
   }
}

const person = new Person();
person.printMyName();
person.printGender();

const number = 1;
const num2 = number;
console.log(num2)
//number = num2;
console.log(number)