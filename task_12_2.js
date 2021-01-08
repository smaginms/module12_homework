/*
Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/

// 12.2

const keyInObj = (str,obj) => {
  if ( str in obj ) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

const obj1 = { a:1, b:2 }

keyInObj("a",obj1);