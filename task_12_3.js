/*
Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.
*/

// 12.3

const createEmptyObj = (obj) => {
  let obj = Object.create(null);
  //obj = {a:1};
  console.log(obj);
}

createEmptyObj("obj1");