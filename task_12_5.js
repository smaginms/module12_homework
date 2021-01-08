/*
12.4
*/

// 12.5

class ElectroTech {
  constructor(name, firm) {
  this.name = name;
  this.firm = firm;
  this.category = 'Бытовая техника';
  this.subCategory = 'Электротехника'; 
  }
  
  getPower(amperage) {
    let power = 'Мощность' + ' ' + this.name + ' = ' + (amperage*220)/1000 + ' КВт/ч';
    let power2 = (amperage*220)/1000;
    console.log(power);
    return power2;
  }
  
  switched(switched) {
    let answ = 'Отключен от сети';
    if (switched) {answ = 'Включен в сеть'; }
    return answ;
  }
  
}

class ElectroTechComp extends ElectroTech {
  constructor(power, name, firm) {
    super(name);
    super(firm);
    this.power = power;
  }
}


const cleaner = new ElectroTech('Пылесос','Panasonic');
const notebook = new ElectroTechComp(15,'Компьютер','HP');
cleaner.getPower(5);
cleaner.switched(false);
notebook.switched(true);
notebook.getPower(15);
let powerSum = cleaner.getPower(6)+notebook.getPower(15);
console.log('Cумма мощностей = ' + powerSum + ' КВт/ч');
console.log(cleaner,notebook);
