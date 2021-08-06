
// Какое число будет выведено в консоль при выполнении следующего кода?
let a = 10;
setTimeout(() => {
   console.log(a);
}, 3000);
setTimeout(() => {
   a = 30;
}, 2000);
a = 20;
// Ваш ответ: 30

// В каком состоянии будет находиться следующий промис через две с половиной секунды после своего создания? 
let promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve(), 1000);
   setTimeout(() => reject(), 2000);
});
// Ваш ответ:  fulfilled 

// Что будет выведено в консоль при выполнении следующего кода? 
let promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve(), 2000);
   setTimeout(() => reject(), 1000);
});
promise.then(() => console.log(100), () => console.log(200));
// Ваш ответ:  200 

// Что будет выведено в консоль при выполнении следующего кода? 

let promise = new Promise(function(resolve, reject) {
   resolve(100);
    setTimeout(() => resolve(200), 1000);
});
promise.then(result => console.log(result));
// Ваш ответ:  100 

// Какие числа будут выведены в консоль при выполнении следующего кода? 
let promise = new Promise(function (resolve, reject) {
   setTimeout(() => resolve(100), 1000);
});
promise.then(function (result) {
   console.log(result); 
   return result + 100;
});
promise.then(function (result) {
   console.log(result); 
   return result + 100;
});
// Ваш ответ:  100 и 100 

// Какие числа будут выведены в консоль при выполнении следующего кода? 
let promise = new Promise(function (resolve, reject) {
   setTimeout(() => resolve(100), 1000);
});
promise.then((result) => {
   console.log(result); 
   return result + 100;
})
.then((result) => {
   console.log(result); 
   return result + 100;
});
// Ваш ответ:  100 и 200 

// Какие числа и в какой последовательности будут выведены в консоль при выполнении следующего кода? 
(async () => {
   let promise = new Promise(resolve => {
       setTimeout(() => resolve(100), 1000);
   }); 
   console.log(50);
   let result = await promise;
   console.log(result);
   console.log(200);
})();
// Ваш ответ:  50, 100 и 200 
