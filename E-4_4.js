function Device (pw, col, status){
  this.power = pw,
  this.color = col,
  this.status = status
}

Device.prototype.on = function(){
     return this.status = 1 
  }
    
Device.prototype.off = function(){ 
     return this.status = 0   
  }

Device.prototype.powDevice = function(){
  
  if (this.status == 0) {
    return 0 
  }
  else {
    return this.power
  }
}

function Fridge (pw, col, status, temp_min){  
  this.power = pw,
  this.color = col,
  this.status = status,
  this.temp_min = temp_min
}
Fridge.prototype = new Device();

Fridge.prototype.temperature = function(){
  console.log(`Минимальная температура данной модели составляет: ${this.temp_min} градусов`)
}

function Teapot (pw, col, status, time){  
  this.power = pw,
  this.color = col,
  this.status = status,
  this.time = time
}
Teapot.prototype = new Device();

function Computer (pw, col, status, size){  
  this.power = pw,
  this.color = col,
  this.status = status,
  this.size = size
}
Computer.prototype = new Device();

const f1 = new Fridge(200, 'silver', 0, -20);
const t1 = new Teapot(180, 'black', 0, 60);
const c1 = new Device(220, 'green', 0, 156);
f1.temperature()
console.log(`Включили холодильник ${f1.on()}`);
console.log(`Включили компьютер ${c1.on()}`);
const sumPower = f1.powDevice() + t1.powDevice() + c1.powDevice();
console.log(`Сумма мощности работающих приборов ${sumPower}`);