// Всплытие
// Глобальная область видимости : var , function
// Пример - Локальная область видимости : let, const
if (10 > 1){
    const a = 10;
    console.log(a); // хорошо отработает, ошибки не будет потому что CONST в пределах текущей функции
}
console.log(a); // выдаст ОШИБКУ потому что CONST не видна за пределами функции (даже если она была выведена ранее console.log
// тот же результат
for (let i = 0; i < 3; i++){
    console.log(i); // хорошо отработает, ошибки не будет потому что LET в пределах текущей функции
}
console.log(i);// выдаст ОШИБКУ потому что LET не видна за пределами функции (даже если она была выведена ранее console.log
//----------------------------------------------
function filter()
{
    console.log('!!!');
}
function fn(filter)
{
    filter();
}
// более коротка форма записи тех же функций называется "Function Expression"
fn(function ()
{
    console.log('!!!');
});

//----------------------------------------
// Function Expression - обьявление функции внутри другого выражения (при такой записи нет всплытия функции, а только переменной sum)
var sum = function(a, b)
{
    return a + b;
};

// Стрелочные функции
var sum = (a,b) => {
    return a + b;
};

// если в функции ТОЛЬКО одно выражение, то форму записи можно еще сократить
var sum = (a,b) => a + b;

// Function Declaration
function sum(a, b)
{
    return a + b;
}

var result = sum(2, 3);
console.log(result);

// ----------------------------------------
// MAP метод
var ar = [1, 2, 3, 4];
var newAr = ar.map(function(number)
{
    return number * number;
});
console.log(ar);
console.log(newAr);

// короткий вариант записи (стрелочная функция) варианта выше
var newAr = ar.map((number) => number * number);
console.log(newAr);
// если в стрелочной функции только один параметр, то скобки можно убрать
var newAr = ar.map(number => number * number);
console.log(newAr);
