/*
Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.

*/

// 12.1

const ShowOwnProp = (obj) => {
  for ( let key in obj ) {
    if (obj.hasOwnProperty(key)) {
    console.log(key + ' - собственный ключ');  
    }
  }
}


const obj1 = { a:1 }
const obj2 = Object.create(obj1);
obj2.b = "2";

ShowOwnProp(obj2);
