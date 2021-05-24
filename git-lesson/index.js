/* Добавьте к функции параметр с любым именем
Функция должна возвращать аргумент, переданный ей в качестве параметра
Пример:

   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет` */

function returnFirstArgument () {
 return arguments[0];
}
var inst = returnFirstArgument(1);
console.log(inst);

/* Задание 1.2:

Функция должна возвращать сумму переданных аргументов
Пример:

   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6
1.2.1:* Значение по умолчанию для второго аргумента должно быть равно 100

Пример:

  sumWithDefaults(10) вернет 110 */

function sum (a,b = 100) {
  return result =  a + b;
};

var sumWithDefaults = sum(10)
 console.log(sumWithDefaults);

 /* Задание 1.3:

Функция должна принимать другую функцию и возвращать результат вызова этой функции Пример:
   returnFnResult(() => 'привет') вернет 'привет' */

var value = '10';
function returnFnResult() {
  function fn() {
    return arguments[0];
  }
  return fn(value);
};

const result  = returnFnResult();
console.log(result);

/* Задание 1.4:

Функция должна принимать число и возвращать новую функцию (F)
При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F Пример:
   var f = returnCounter(10);
   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13 */

   var f = returnCounter(10);

   function returnCounter (number) {
       return function () {
         return ++number} ;
   }
   console.log(f());

   /* Задание 1.5:*

Функция должна возвращать все переданные ей аргументы в виде массива
Количество переданных аргументов заранее неизвестно Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3] */
   
var fantasticFour = [
  'obama','Escobar', 'bonJovi', 'kotoPes'
];

  for (var i = 0;
    i < fantasticFour.length;
    i++){
      console.log(fantasticFour[i]);
      
  }



