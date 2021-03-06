/* ДЗ 4 - работа с DOM */

/*
 Задание 1:

 1.1: Функция должна создать элемент с тегом DIV

 1.2: В созданный элемент необходимо поместить текст, переданный в параметр text

 Пример:
   createDivWithText('loftschool') // создаст элемент div, поместит в него 'loftschool' и вернет созданный элемент
 */
function createDivWithText(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div;
}

/*
 Задание 2:

 Функция должна вставлять элемент, переданный в параметре what в начало элемента, переданного в параметре where

 Пример:
   prepend(document.querySelector('#one'), document.querySelector('#two')) // добавит элемент переданный первым аргументом в начало элемента переданного вторым аргументом
 
Метод insertBefore() добавляет узел (element) в список дочерних элементов указанного родителя перед указанным узлом (element). Если элемент уже присутствует на странице, тогда insertBefore() удаляет элемент с его текущей позиции и перемещает на новую – перед указанным узлом (element) указанного родителя.

Синтаксис :
element.insertBefore(newElement, referenceElement);

Пример:
<button id="test">Добавить абзац!</button>
<div>
  <p id="child">Существующий абзац.</p>
</div>
 
<script>
  var button = document.querySelector("#test");
  button.addEventListener("click", foo, false);
  var i = 1;
  var div = document.querySelector("div");
 
  function foo() {
    var p = document.createElement("p");
    var child = document.querySelector("#child");
    p.innerHTML = "Добавлен " + i + "-й абзац.";
    div.insertBefore(p, child);
    i++;
  }
</script>
 */
function prepend(what, where) {
  where.insertBefore(what, where.firstElementChild);
  // where.prepend(what);  // <-- сделает то же самое что и строка выше
}

/*
 Задание 3:

 3.1: Функция должна перебрать все дочерние элементы узла, переданного в параметре where

 3.2: Функция должна вернуть массив, состоящий из тех дочерних элементов следующим соседом которых является элемент с тегом P

 Пример:
   Представим, что есть разметка:
   <body>
      <div></div>
      <p></p>
      <a></a>
      <span></span>
      <p></p>
   </body>

   findAllPSiblings(document.body) // функция должна вернуть массив с элементами div и span т.к. следующим соседом этих элементов является элемент с тегом P
 */
function findAllPSiblings(where) {
  const nextP = [];

  for (const el of where.children) {
    if (el.nextElementSibling && el.nextElementSibling.tagName === 'P') { // tagName - позволяет проводить проверку по тегам
      nextP.push(el);
    }
  }

  return nextP;
}

/*
 Задание 4:

 Функция представленная ниже, перебирает все дочерние узлы типа "элемент" внутри узла переданного в параметре where и возвращает массив из текстового содержимого найденных элементов
 Но похоже, что в код функции закралась ошибка и она работает не так, как описано.

 Необходимо найти и исправить ошибку в коде так, чтобы функция работала так, как описано выше.

 Пример:
   Представим, что есть разметка:
   <body>
      <div>привет</div>
      <div>loftschool</div>
   </body>

   findError(document.body) // функция должна вернуть массив с элементами 'привет' и 'loftschool'
 */

/*function findError(where) {
  const result = [];

  for (const child of where.childNodes) { // childNodes перебирает все узлы вместе с текстовыми
    result.push(child.textContent);
  }

  return result;
}*/
function findError(where) {
  const result = [];

  for (const child of where.children) {
    result.push(child.textContent);
  }

  return result;
}

/*
 Задание 5:

 Функция должна перебрать все дочерние узлы элемента переданного в параметре where и удалить из него все текстовые узлы

 Задачу необходимо решить без использования рекурсии, то есть можно не уходить вглубь дерева.
 Так же будьте внимательны при удалении узлов, т.к. можно получить неожиданное поведение при переборе узлов

 Пример:
   После выполнения функции, дерево <div></div>привет<p></p>loftchool!!!
   должно быть преобразовано в <div></div><p></p>
 */
function deleteTextNodes(where) {
  for (let i = 0; i < where.childNodes.length; i++) {
    const el = where.childNodes[i];

    if (el.nodeType === Element.TEXT_NODE) {
      where.removeChild(el);
      i--; // при удалении элемента количество элементов в массиве тоже уменьшается поэтому нужно скорректировать счетчик
    } 
  }
}

/*
 Задание 6:

 Выполнить предыдущее задание с использование рекурсии - то есть необходимо заходить внутрь каждого дочернего элемента (углубляться в дерево)

 Будьте внимательны при удалении узлов, т.к. можно получить неожиданное поведение при переборе узлов

 Пример:
   После выполнения функции, дерево <span> <div> <b>привет</b> </div> <p>loftchool</p> !!!</span>
   должно быть преобразовано в <span><div><b></b></div><p></p></span>
 */
function deleteTextNodesRecursive(where) {
  for (let i = 0; i < where.childNodes.length; i++) {
    const el = where.childNodes[i];

    if (el.nodeType === Element.TEXT_NODE) {
      where.removeChild(el);
      i--;
    } else if (el.nodeType === Element.ELEMENT_NODE) {
      deleteTextNodesRecursive(el); // если узел типа элемент то уходим вглубь дом дерева
    }
  }
}

/*
 Задание 7 *:

 Необходимо собрать статистику по всем узлам внутри элемента переданного в параметре root и вернуть ее в виде объекта
 Статистика должна содержать:
 - количество текстовых узлов
 - количество элементов каждого класса
 - количество элементов каждого тега
 Для работы с классами рекомендуется использовать classList
 Постарайтесь не создавать глобальных переменных

 Пример:
   Для дерева <div class="some-class-1"><b>привет!</b> <b class="some-class-1 some-class-2">loftschool</b></div>
   должен быть возвращен такой объект:
   {
     tags: { DIV: 1, B: 2},
     classes: { "some-class-1": 2, "some-class-2": 1 },
     texts: 3
   }
 */
function collectDOMStat(root) {
  const stat = {
    tags: {},
    classes: {},
    texts: 0,
  };

  function scan(root) {
    for (const child of root.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) {
        stat.texts++;
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.tagName in stat.tags) { // если в объекте stat по свойству tags уже есть инфо про тег div (например),  то просто увеличиваем счетчик
          stat.tags[child.tagName]++;
        } else {
          stat.tags[child.tagName] = 1; // если новый тег то просто его создадим и присвоим количество = 1
        }
/* Разница for..in и for..of
for..in перебирает все перечисляемые ключи свойств объекта
for..of перебирает значения итерируемого объекта.*/
        for (const className of child.classList) { // Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
        	// если такой класс уже существует то увеличиваем счетчик, иначе - создаем
          if (className in stat.classes) { // перебираем объект stat по всем его классам classes (если тег у элемента всегда 1 то классов может быть несколько )
            stat.classes[className]++; // className - каждый отдельный класс объектa stat
          } else {
            stat.classes[className] = 1;
          }
        }
/* если child.nodeType === Node.ELEMENT_NODE, то уходим рекурсивно вглубь */
        scan(child); 
      }
    }
  }

  scan(root);

  return stat;
}

/*
 Задание 8 *:

 8.1: Функция должна отслеживать добавление и удаление элементов внутри элемента переданного в параметре where
 Как только в where добавляются или удаляются элементы,
 необходимо сообщать об этом при помощи вызова функции переданной в параметре fn

 8.2: При вызове fn необходимо передавать ей в качестве аргумента объект с двумя свойствами:
   - type: типа события (insert или remove)
   - nodes: массив из удаленных или добавленных элементов (в зависимости от события)

 8.3: Отслеживание должно работать вне зависимости от глубины создаваемых/удаляемых элементов

 Рекомендуется использовать MutationObserver

 Пример:
   Если в where или в одного из его детей добавляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'insert',
     nodes: [div]
   }

   ------

   Если из where или из одного из его детей удаляется элемент div
   то fn должна быть вызвана с аргументом:
   {
     type: 'remove',
     nodes: [div]
   }
 */
function observeChildNodes(where, fn) {
  const observer = new MutationObserver((mutations) => { // MutationObserver - функция встроенная в brawser, позволяет следить за изменениями в дом дереве 
    mutations.forEach((mutation) => { // mutations - список изменений которые произошли в дом дереве 
      if (mutation.type === 'childList') {
        fn({
          type: mutation.addedNodes.length ? 'insert' : 'remove', // если в каждом изменении (mutations) что-то есть значит это 'insert', если пусто значит это 'remove'
          nodes: [
            ...(mutation.addedNodes.length ? mutation.addedNodes : mutation.removedNodes), // здесь определяем из какого элемента (addedNodes / removedNodes) достать значениe свойства mutation
          ],
        });
      }
    });
  });

  observer.observe(where, { childList: true, subtree: true }); // observe (свойство MutationObserver) декларирует старт отслеживания изменений 
// 1 аргумент - за кем наблюдаем 
// 2 аргумент - в каких случаях мы будем сигнализировать 
// childList: true - реагировать на изменения внутри дом дерева 
// subtree: true - вне зависимости от глубины этих изменений 
}

export {
  createDivWithText,
  prepend,
  findAllPSiblings,
  findError,
  deleteTextNodes,
  deleteTextNodesRecursive,
  collectDOMStat,
  observeChildNodes,
};
