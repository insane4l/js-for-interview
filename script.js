// Data types

console.log(typeof (typeof 2)); // 'string'
console.log(typeof null); // 'object'
console.log(Number.isNull(null));

console.log(typeof []); // 'object'
console.log(Array.isArray({})); // true

console.log(typeof (() => {})); // 'function'

console.log(typeof Infinity); // 'number'
console.log(typeof NaN); // 'number'
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true






// browser events

el.onclick = funcName // set function
el.onclick = null // cleanup

// 3 аргумент приходящий в колбек addEventListener - boolean:
// default false, если передадим true, браузер будет рассматривать событие не как всплывающее
// а как погружающееся
// Bubbling - Всплытие
// Capturing - Погружение

event.target // элемент, который сгенерировал событие (первый получил клик)
event.currentTarget // элемент который вызвал обработчик в процессе всплытия

event.stopPropagation() // останавливается вызов дальнейших обработчиков(по всплытию)
event.stopImmediatePropagation() // блокирует вызов других обработчиков, зарегистрированных даже на кликнутом элементе