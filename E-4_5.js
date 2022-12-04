class Device {
  constructor(pw, col, status){ 
    this.power = pw;
    this.color = col;
    this.status = status;
  }
 
  on() {
     return this.status = 1 
  }  
  off() { 
     return this.status = 0   
  }
  powDevice(){
    if (this.status == 0) {
      return 0 
    }
    else {
      return this.power
    }
  }
}

class Fridge extends Device {
  constructor(pw, col, status, temp_min){  
    super(pw, col, status);
    this.temp_min = temp_min
  }
  temperature() {
   console.log(`Минимальная температура данной модели составляет: ${this.temp_min} градусов`)
  }
}
class Teapot extends Device {
  constructor(pw, col, status, time) {
  
    super(pw, col, status);
    this.time = time
  }
}

class Computer extends Device {
  constructor(pw, col, status, size) {  
    super(pw, col, status);
    this.size = size
  }
}

const f1 = new Fridge(200, 'silver', 0, -20);
const t1 = new Teapot(180, 'black', 0, 60);
const c1 = new Device(220, 'green', 0, 156);
f1.temperature()
console.log(`Включили холодильник ${f1.on()}`);
console.log(`Включили компьютер ${c1.on()}`);
const sumPower = f1.powDevice() + t1.powDevice() + c1.powDevice();
console.log(`Сумма мощности работающих приборов ${sumPower}`);