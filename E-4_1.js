//Объект-прототип
const animals = {
 type: "dogs"
}
const dog_El = Object.create(animals);
dog_El.color = 'green';
dog_El.name = 'Elvis';

function getKeys(type) {
  for (let key in dog_El) {
  if (dog_El.hasOwnProperty(key)) { //выбираем собственные ключи объекта
    console.log(key) 
    }  
  }
}
getKeys(dog_El )
