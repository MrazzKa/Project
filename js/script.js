document.getElementById("burger2").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open")
})

const plus = document.getElementById("butplus");  // Получаем кнопку "+" по её ID
const minus = document.getElementById("butminus");  // Получаем кнопку "-" по её ID
const mult = document.getElementById("butmult");  // Получаем кнопку "*" по её ID
const div = document.getElementById("butdiv");  // Получаем кнопку "/" по её ID

let first = document.getElementById("first");  // Получаем поле ввода для первого числа по ID
let second = document.getElementById("second");  // Получаем поле ввода для второго числа по ID

const result = document.getElementById("result");  // Получаем элемент для отображения результата по ID

let res = 0;  // Инициализируем переменную для хранения результата

// Функция для выполнения арифметических операций
function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;  // Преобразуем первое значение в число, если оно пустое — используем 0
    const num2 = parseFloat(second.value) || 0;  // Преобразуем второе значение в число, если оно пустое — используем 0
    switch(mark) {  // В зависимости от переданного маркера выполняем соответствующую операцию
        case "+": 
            res = num1 + num2;  // Сложение
            break;
        case "-":
            res = num1 - num2;  // Вычитание
            break;
        case "*":
            res = num1 * num2;  // Умножение
            break;
        case "/":
            res = num2 !== 0 ? num1 / num2 : "error";  // Деление, проверяем, что деление на ноль исключено
            break;
    }
    result.textContent = res;  // Отображаем результат в элементе result
}

// Добавляем обработчики событий на кнопки, при клике выполняем соответствующую операцию
plus.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение кнопки (если это форма)
    calculus("+");  // Вызываем функцию калькуляции с маркером "+"
});

minus.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    calculus("-");  // Вызываем функцию калькуляции с маркером "-"
});

mult.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    calculus("*");  // Вызываем функцию калькуляции с маркером "*"
});

div.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    calculus("/");  // Вызываем функцию калькуляции с маркером "/"
});


// Работа с тригонометрическими функциями

const sinBtn = document.getElementById("sin");  // Получаем кнопку для sin() по её ID
const cosBtn = document.getElementById("cos");  // Получаем кнопку для cos() по её ID
const tgBtn = document.getElementById("tg");    // Получаем кнопку для tg() по её ID
const ctgBtn = document.getElementById("ctg");  // Получаем кнопку для ctg() по её ID

let numInput = document.getElementById("variable");  // Получаем поле ввода для числа (градусы) по ID
const trigResult = document.getElementById("value");  // Получаем элемент для отображения результата тригонометрической функции по ID

// Функция для перевода градусов в радианы
function radians(degrees) {
    return degrees * (Math.PI / 180);  // Преобразуем градусы в радианы, умножив на π/180
}

// Функция для выполнения тригонометрических операций
function trigCalculus(func) {
    const num = radians(parseFloat(numInput.value)) || 0;  // Преобразуем введенное значение в радианы, если оно пустое — используем 0
    let result;  // Переменная для хранения результата

    switch (func) {  // В зависимости от переданной функции (sin, cos, tg, ctg) выполняем соответствующую операцию
        case "sin":
            result = Math.sin(num);  // Синус
            break;
        case "cos":
            result = Math.cos(num);  // Косинус
            break;
        case "tg":
            result = (num % Math.PI === Math.PI / 2) ? "error" : Math.tan(num);  // Тангенс, проверка на недопустимые значения
            break;
        case "ctg":
            result = (num % Math.PI === 0) ? "error" : 1 / Math.tan(num);  // Котангенс, проверка на недопустимые значения
            break;
    }

    trigResult.textContent = (typeof result === "number") ? result.toFixed(2) : result;  // Округляем результат до 2 знаков, если это число
}

// Добавляем обработчики событий на кнопки тригонометрических функций
sinBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    trigCalculus("sin");  // Вызываем функцию для sin()
});

cosBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    trigCalculus("cos");  // Вызываем функцию для cos()
});

tgBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    trigCalculus("tg");  // Вызываем функцию для tg()
});

ctgBtn.addEventListener("click", (event) => {
    event.preventDefault();  // Предотвращаем стандартное поведение
    trigCalculus("ctg");  // Вызываем функцию для ctg()
});