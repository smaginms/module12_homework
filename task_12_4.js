/*
Реализовать следующее консольное приложение подобно примеру, 
который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. 
Включить некоторые в розетку. 
Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два 
(например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, 
которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, 
желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;


*/

// 12.4


function ElectroTech(name, firm){
  this.category = 'Бытовая техника',
  this.subCategory = 'Электротехника', 
  this.name = name,
  this.firm = firm
}

ElectroTech.prototype.getPower = function(amperage) {
  let power = 'Мощность ' + (amperage*220)/1000 + ' КВт/ч';
  let power2 = (amperage*220)/1000;
  return power2;
  console.log(power);
}

ElectroTech.prototype.switched = function(switched){
    let answ = '';
    if (switched) { answ = 'Включен в сеть'; }
    else { answ = 'Отключен от сети'; }
    console.log(answ);
  }  

function ElectroTechComp(name, firm, power) {
    this.name = name,
    this.firm = firm,
    this.power = power
}

ElectroTechComp.prototype = new ElectroTech();

const cleaner = new ElectroTech('Пылесос','Panasonic',6);
const notebook = new ElectroTechComp('Компьютер','HP',15);

cleaner.switched(false);
cleaner.getPower(6);
notebook.switched(true);
notebook.getPower(15);
let powerSum = cleaner.getPower(6)+notebook.getPower(15);
console.log('Cумма мощностей = ' + powerSum + ' КВт/ч');