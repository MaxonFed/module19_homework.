
//Определяем родительскую функцию с методами, которые включают/выключают прибор из розетки.
function parent() {
    
        this.state = 'Выключено';
        this.spend = 0; //затрат электроэнергии, кВт
};


//Создаём делегирующую связь [[Prototype]] для двух конкретных приборов.
parent.prototype.switch = function () {
    if (this.state === 'Выключено') {

        this.state = 'Включено';//состояние электропребора
        TvBox.channel = 1;
        return this.spend += 10;//затрата электроэнергии при включении электропребор, кВт

    } else if (this.state === 'Включено') {
        this.state = 'Выключено';
        TvBox.channel = 0;
        Fridge.temperature = 0;
        Fridge.light = 'Выключено';
    }

}


//Создаём для каждого из приборов собственные свойства и методы, отличные от родительских методов.
function Subject (weight, color, year) {
    this.weight = weight + " кг";
    this.color = color;
    this.releas = year;
}

Subject.prototype = new parent();

let Tv = new Subject(24, "Черный", 2020);
Tv.channel = 0; //каннал на телевизоре
Tv.nextChannel = function () { // включить следующий каннал
     this.channel += 1;
};
Tv.previousChannel = function () { //включить предыдущий каннал
    this.channel -= 1;
}


let Cold = new Subject(70, "Белый", 2022);
Cold.temperature = 0; //Температура в холодильнике
Cold.light = 'Выключено'; //Подсветка в холодильнике
Cold.temperatureAdd = function() { //добавить температуру в холодильнике
   this.temperature += 1;
} 
Cold.temperatureReduce = function() { // Убавить температуру в холодильнике
   this.temperature -= 1;
} 
Cold.lightOff = function () { // Включить/Выключить подсветку в телевизоре
    if(this.light === 'Выключено' && this.state === 'Включено') {
            this.light = 'Включено';
        } else if (this.light === 'Включено' ) {
             this.light = 'Выключено';
         }
}




//Создаём экземпляры каждого прибора.
let TvBox = Object.create(Tv); //Телевизор
let Fridge = Object.create(Cold); //Холодильник


TvBox.switch()//Включаем телевизор
TvBox.nextChannel();//Переключаем на следующий телеканал
console.log("Телевизор");
console.log(TvBox.state);//Состояние телевизора
console.log(TvBox.spend);//Затрат электроэнергии телевизора
console.log(TvBox.channel);//Включенный канал

console.log(' ');
console.log("Холодильник");
Fridge.switch();//Включаем холодильник
Cold.temperatureAdd();//Добовляем температуры в холодильнике на 1 градус
Cold.temperatureAdd();
Fridge.lightOff();//Включаем подсветку в холодильнике
console.log(Fridge.state);//Состояние холодильника
console.log(Fridge.spend);//Затрат электроэнергии холодильника
console.log(Fridge.temperature);//Температура в холодильнике
console.log(Fridge.light);//Состояние подсветки в телевизоре























