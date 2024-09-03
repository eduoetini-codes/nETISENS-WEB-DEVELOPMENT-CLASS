const myFirstOrder = {
    name: 'Toyota',
    price: 22000,
    color: 'Blue',
    year: 2020,
    mileage: 100000,
    features: ['Auto Start', 'Bluetooth', 'LED Headlight'],
    isElectic: true,
    isAvaliable: true,
    engine: {
        type: 'Electric',
        power: 120,
        efficiency: 90,
        battery: '1200 mAh',
        capacity: {
            obj1: {
                value: 2.5,
                unit: 'obj-1 liters'
            },
            obj2: {
                value: 3.0,
                unit: 'obj-2 liters'
            },
               
        },
    },

    drive: function(){
        console.log('The car is driving');
    }
}

console.log( myFirstOrder.engine.type);
console.log( myFirstOrder.engine.power );
console.log( myFirstOrder ['color']);
console.log( myFirstOrder['engine']['battery']);

myFirstOrder.drive();

let myNewCar ={}
console.log( myNewCar);
myNewCar.name = 'Mercedes';
myNewCar.model = 'Benz';
myNewCar.color = 'coconut'
console.log( myNewCar); 

// Object destructuring
// const name = myNewCar.name;
const {name} = myNewCar
const color = myNewCar.color;
console.log( name);
console.log(color);

// const {mileage, engine} = myFirstOrder
// console.log( mileage + " " + engine.battery);

// const {engine: {capacity}} = myFirstOrder;
// console.log(capacity);

const {engine: {capacity: { obj2: {unit}} }} = myFirstOrder;
console.log(unit);
