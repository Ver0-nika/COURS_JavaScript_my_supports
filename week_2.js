/* близкие по теме интересные ссылки
"Объекты как ассоциативные массивы"
https://learn.javascript.ru/object
 "Объекты: перебор свойств"
 https://learn.javascript.ru/object-for-in
 "Объекты: передача по ссылке"
 https://learn.javascript.ru/object-copy
 "Массивы с числовыми индексами"
 https://loftschool.com/dashboard/stream/377/module/30/video/241
 "Методы массивов"
 https://learn.javascript.ru/array-methods
 "Массив: перебирающие методы"
 https://learn.javascript.ru/array-iteration
 "Псевдомассив аргументов "arguments""
 https://learn.javascript.ru/arguments-pseudoarray
 */
// строковая интерполяция (использование макросов)
var name = 'Serguey';
var lastName = 'Petrov';
var age = 30;
var profession = 'Driver';

var fullInfo = `${name} ${lastName} ${age} ${profession}`;
console.log(fullInfo);  // вывод: Serguey Petrov 30 Driver

// ОБЪЕКТЫ в JavaScript
var object = {
    name: 'Ivan',
    lastName: 'Petrov',
    age: 40,
    profession: 'programmer'
};
// все три варианта обращения к объекту верны
console.log(object.name);
console.log(object['name']);
console.log(object["name"]);

// присвоить новое значение свойству объекта
object.name = 'Dima';
console.log(object.work); // вывод: undefined (обратились к несуществующему свойству объекта

// МАССИВЫ
var array = ['Ivan', 'Vova', 'Dima'];
console.log(array[0]); // выведет Ivan

// перезаписать элемент массива
array[0] = 'Andrey';
console.log(array[0]); // выведет Andrey

// обратиться к свойству массива
console.log(array.length); // выведет 3
array.push('Ivan'); // добавит элемент в конец массива
console.log(array[10]); // выведет undefined (нет такого элемента в массиве)

for (var i = 0; i < array.length; i++){
    console.log(i); // выведет 0 1 2 3
}

for (var i = 0; i < array.length; i++){
    console.log(array[i]); // выведет имена
}

// МАССИВ из ОБЪЕКТОВ
var array = [
    {
        name: 'Ivan',
        lastName: 'Petrov'
    },
    {
        name: 'Andrey',
        lastName: 'Vasiliev'
    }
];
for (var i = 0; i < array.length; i++){
    console.log(array[i].name); // выведет имена
}
// другая форма записи (визуально более понятная)
for (let i = 0; i < array.length; i++){   // LET чтобы переменная i не выходила в глобальную облать видимости за пределы итерации и не засоряла ее
    const name = array[i].name;   // можно применять CONST так как переменная name не меняется, CONST чтобы переменная i не выходила в глобальную облать видимости за пределы итерации и не засоряла ее
    console.log(name); // выведет имена
}

// свойствами объекта могут быть функции, пример:

console = {
  log: function (){
      // ...
  }
};

// ДЕСТРУКТУРИРУЮЩЕЕ присваивание
var input = 'Ivan Petrov';
var parts = input.split(' ');

var name = parts[0];
var lastName = parts[1];

console.log(name);
console.log(lastName);

//-----------------------
var [a, b] = ['Ivan', 'Petrov'];
console.log(a, b);

//----------------------
var [name, lastName] = [parts[0], parts[1]];
console.log(name, lastName);

// более короткий вариант ДЕСТРУКТУРИРУЮЩЕЕ присваивания
var [name, lastName] = input.split(' ');
console.log(name, lastName);

// если нам надо проигнорировать какие-либо элементы массива при присваивании
var input = 'Ivanov Ivan Ivanich';
var [ , name, lastName] = input.split(' ');
console.log(name, lastName);

// интересный пример ДЕСТРУКТУРИРУЮЩЕГО присваивания
var user = {email: "abc@mail.ru", nickname: "abc", age: 30};
var {nick, mail = "xxx", email = "yyy"} = user;   // свойства объекта не могут перезаписываться таким образом
console.log(mail, email, nick);   // вывод: xxx abc@mail.ru undefined

// ДЕСТРУКТУРИРУЮЩЕЕ присваивание в ФУНКЦИЯХ
function hi([lastName, name, ]){
    console.log(`Привет меня зовут ${name} ${lastName}`);
}
var input = 'Петров Сергей Иванович';
hi(input.split(' '));

// если первый параметр secondName не передан
function hi2([, name, secondName = '']){
    console.log(`Привет меня зовут ${name} ${secondName}`);
}
var input = 'Петров Сергей';
hi2(input.split(' '));

// ДЕСТРУКТУРИРУЮЩЕЕ присваивание в ОБЪЕКТАХ
var user = {
    name: 'Сергей',
    secondName: 'Иванович'
};
 var name = user.name;
 var secondName = user.secondName;

 // альтернативная запись ДЕСТРУКТУРИРУЮЩЕГО присваивания по ОБЪЕКТУ (получения доступа к свойствам объекта) :
var {name, secondName, lastName = ''} = user;   // lastName указано значение свойства по умолчанию, если такого свойства у объекта нет

console.log(`Привет меня зовут ${lastName} ${name} ${secondName}`);

// SPREAD-ОПЕРАТОР
var numbers = [2, 3, 4];
function sum(){
    var result = 0;
    for (let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
var result = sum(...numbers);   // SPREAD-оператор : ... перед параметрами функции (нельзя просто вставить numbers так как это МАССИВ)
var result = sum(2, 3, 4);  // SPREAD-оператор переводит массив в набор аргументов
console.log(result);

// REST-ОПЕРАТОР
var arr = [1,2,3,4,5];
var [first, second, ...rest] = arr;   // обратное использование SPREAD-оператора
console.log(first, second, rest);  // результат: 1 2 [ 3, 4, 5 ]
console.log(arr);   // результат: [ 1, 2, 3, 4, 5 ]

// REST-оператор на примере функции
var exempleArr = [1,2,3,4,5];
function exempleRest(first, second, ...rest){
    console.log(first, second, rest);
}
exempleRest(1,2,3,4,5);  // результат:  1 2 [ 3, 4, 5 ]
совместное использование SPREAD и REST :
exempleRest(...exempleArr);  // результат:  1 2 [ 3, 4, 5 ]

// совместное использование SPREAD и REST в функции:
function func(a, b, ...c) {
    console.log(arguments.length, c);
}

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6];

func(...arr1, arr2);

// CONCAT - объединение двух массивов
var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];
var result = arr1.concat(arr2);
var resultSpread = [...arr1, ...arr2];
 console.log(result);     // вывод [1, 2, 3, 4, 5, 6, 7, 8]
 console.log(resultSpread);   // вывод [1, 2, 3, 4, 5, 6, 7, 8]

// цикл FOR OF
var arrayForOf = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayForOf.length; i++){
    console.log(arrayForOf[i]);
}
// результат точно такой же как в предыдущем цикле FOR
for (i of arrayForOf){
    console.log(i);
}
// пример FOR OF в функции
function sum(){
    let result = 0;
    for (let arg of arguments){   // arguments - ключевое слово для обозначения аргументов функции
        result += arg;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5));

// FOR IN цикл в JavaScript предназначен для перечисления свойств объектов
// SYMBOL - для присвоения уникальности объекта (генерирует уникальные значения)
const mySymbol = Symbol();
const myNewSymbol = Symbol();
const obj = {
    name: 'Сергей',
    lastName: 'Петров'
};
obj[mySymbol] = 'первый символ';
obj[myNewSymbol] = 'второй символ';

for (const propertyObj in obj){  // цикл FOR IN берет указанный объект и для каждого его свойства запускает тело цикла (FOR IN перебирает свойства объекта)
    console.log(propertyObj);   // вывод в столбик: name lastName (символы не выводятся хотя они в объект записаны)
}
// ключи не видны при переборе свойсвт объекта, но видны вот так
console.log(obj[mySymbol]);  // вывод: первый символ
console.log(obj[myNewSymbol]);  // вывод: второй символ

// пример внутреннего кода работы итератора
function range(from, to){
    var objectWithIterator = {};

    objectWithIterator[Symbol.iterator] = function (){
        var i = from;
        return {
            next(){
                return {
                    value: i,
                    done: i++ === to
                };
            }
        };
    };
    return objectWithIterator;
}
for (const number of range(3, 9)){
    console.log(number);   // вывод: 3 4 5 6 7 8 (в столбик)
}
