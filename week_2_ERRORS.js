/*
Ссылка на инструкцию по отладке JavaScript "Отладка в браузере Chrome":
https://learn.javascript.ru/debugging-chrome
 */
// DEBUGGER; маленькими буквами позволяет оставить выполнение скрипта на месте где утановлен этот флаг и отследить его шаг за шагом в браузере
// виды вывода сообщений в консоль
console.log("Простое сообщение");
console.info("Информационное сообщение");
console.warn("Предупреждение");
console.error("Ошибка");

// если в ФУНКЦИИ нет return, то она обязательно возвращает undefined

// isFinit();  - функция проверяющая является аргумент числом

// TRY CATCH используются только совместно
try{
    console.log("до");
    throw new Error("текст ошибки");
    console.log("после"); // после THROW даже не попадаем (нет на выводе)
} catch (e){
    console.log(e.message);  // вывод: до текст ошибки (в столбик)
}

// пример TRY CATCH в функции (обработка исключений)
function div(a, b){
    try{
        if (b < 0){
            throw new Error('b должен быть положительным числом !');
        } else if (b == 0){
            throw new Error('на ноль делить нельзя !');
        } else if (b == undefined){
            throw new Error('b должен быть передан !');
        } else if (!isFinite(b)){
            throw new Error('b должен быть числом !');
        }
        return console.log(a / b);
    } catch (e){
        console.log(e.message);
    }
}
div(10, -1); // вывод: b должен быть положительным числом !
div(10, 0); // вывод: на ноль делить нельзя !
div(10); // вывод: b должен быть передан !
div(10, "привет"); // вывод: b должен быть числом !
div(10, 2); // вывод: 5

}

// второй вариант обработки исключений TRY CATCH на примере той же функции
function div(a, b){
        if (b < 0){
            throw new Error('b должен быть положительным числом !');
        } else if (b == 0){
            throw new Error('на ноль делить нельзя !');
        } else if (b == undefined){
            throw new Error('b должен быть передан !');
        } else if (!isFinite(b)){
            throw new Error('b должен быть числом !');
        }
        return console.log(a / b);
}
try{
    div(10, 2); // вывод: 5
} catch (e){
    console.log(e.message);
}
