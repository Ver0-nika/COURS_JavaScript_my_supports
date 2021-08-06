// структура PROMISE
const tmpPromise = {
    state: ['pending', 'fulfilled', 'rejected'], // ожидание, завершено, отклонено
    resolvedQueue: [ 
/* это св-во может наполняться функциями, 
то есть отловить Promise при переходе из состояния pending в fulfilled
и в этот момент выполнить очередь функций ниже с помощью THEN:
*/
        function () {
            console.log('1');
        },
        function () {
            console.log('2');
        }
    ],
    rejectedQueue: [ // это св-во может наполняться функциями
        function () {
            console.log('3');
        }
    ]
}
// синтаксис PROMISE
// декларация (только создание) PROMISE это всегда синхронная операция, асинхронность начинается c THEN
console.log('before Promise');
const promise = new Promise(function(){
    console.log('inside Promise'); // блокирующая функция выполняющаяся сразу же
}
console.log('after Promise');
/* вывод:
before Promise
inside Promise
after Promise
*/
const Promise = new Promise( function (resolve, reject) {
    resolve();
});
/*
как только promise создается он в состоянии ожидания (pending)
как только мы вызываем внутри function resolve() или rejected(), то мы переводим promise в состояние успешно resolve() или неудачно rejected()
*/
// пример
console.log('до Promise');
function delay(ms) {
/* при заходе в эту функцию интерпретатор заводит таймер на указанное количество секунд и идет дальше 
по истечении таймера наступает resolved() и очередь then (если есть)*/
    return new Promise((resolve) => {
       setTimeout(() => {
           resolve();
           console.log('resolved');
       }, ms)
    });
}
console.log('после Promise');
delay(2000);
/* выводит :
до Promise
после Promise
(через 2 секунды)
resolved
*/
// ----------------------------------------------------------
function delay(ms) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           //  нельзя указывать сразу два состояния подряд resolve и reject !!!
           resolve(); // стоит первым поэтому будет вызван
           reject(); // будет проигнорирован так как стоит вторым
           console.log('шаг 1: resolved');
       }, ms)
    });
}
const promise = delay(2000);
console.log('до then');
// PROMISE.THEN добавляет функции в resolvedQueue в один и тот же Promise
promise.then(() => console.log('шаг 2: выполнено 1'));
promise.then(() => console.log('шаг 3: выполнено 2'));
promise.then(() => console.log('шаг 4: выполнено 3'));
console.log('после then');
/* выводит:
до then
после then
(пауза на 2 сек по аргументу функции delay)
шаг 1: resolved
шаг 2: выполнено 1
шаг 3: выполнено 2
шаг 4: выполнено 3
 */
// другой вариант
console.log('до then нового промиса');
// THEN добавляет функции в resolvedQueue и возвращает совершенно новый Promise
promise
    .then(() => console.log('шаг 2: выполнено 1'))
    .then(() => console.log('шаг 3: выполнено 2')) // новый Promise созданный предыдущим then
    .then(() => console.log('шаг 4: выполнено 3')); // новый Promise созданный предыдущим then
console.log('после then нового промиса');
