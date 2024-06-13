
//задание 1
const car = {
    mark: 'BMW',
    model: 'X1'
}

const givenCar = Object.create(car);
givenCar.year = 2016;
givenCar.color = 'White';

const ownProperty = function(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

ownProperty(givenCar);