//задание 2
const auto = {
    mark: 'BMW',
    model: 'X1'
}

const givenAuto = Object.create(auto);
givenAuto.year = 2016;
givenAuto.color = 'White';


const checkStr = function (Object, str) {
    if(str in Object) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkStr(givenAuto, 'mark');