1
let name = prompt("Введите ваше имя:");
console.log("Привет, " + name + "!");

2
const currentYear = new Date().getFullYear();
const birthYear = prompt('Введите год вашего рождения:');
const age = currentYear - birthYear;
alert(`Вам уже ${age} лет!`);


3
let sideLength = parseFloat(prompt("Введите длину стороны квадрата:"));
let perimeter = sideLength * 4;
console.log("Периметр квадрата: " + perimeter);

4
let radius = prompt("Введите радиус окружности:");
radius = parseFloat(radius);
let area = Math.PI * Math.pow(radius, 2);
console.log("Площадь окружности:", area);

5
let distance = parseFloat(prompt("Введите расстояние между городами в км:"));
let time = parseFloat(prompt("Введите количество часов, за которое вы хотите добраться:"));
let speed = distance / time;
console.log(`Вам необходимо двигаться со скоростью ${speed.toFixed(2)} км/ч, чтобы успеть вовремя.`);


6
const exchangeRate = 0.91;
let dollars = parseFloat(prompt("Введите сумму в долларах:"));
let euros = dollars * exchangeRate;
console.log(`${dollars} долларов равняется ${euros.toFixed(2)} евро.`);



7
var flashDriveSize = parseInt(prompt("Введите объем флешки в Гб:"));
var fileSize = 820;
var flashDriveSizeMb = flashDriveSize * 1024;
var fileCount = Math.floor(flashDriveSizeMb / fileSize);
console.log("На флешку объемом " + flashDriveSize + " Гб поместится " + fileCount + " файлов размером 820 Мб.");


8
let moneyInWallet = parseInt(prompt("Введите сумму денег в вашем кошельке:"));
let chocolatePrice = parseInt(prompt("Введите цену одной шоколадки:"));
let chocoloateCount = Math.floor(moneyInWallet / chocolatePrice);
let change = moneyInWallet % chocolatePrice;
console.log("Вы можете купить " + chocoloateCount + " шоколадок");
console.log("Сдача у вас будет " + change + " рублей");


9
const number = prompt("Введите трехзначное число:");
if (number.length !== 3) {
  alert("Введено некорректное число!");
} else {
   const reverseNumber = parseInt(number.toString().split("").reverse().join(""));
   alert(`Результат: ${reverseNumber}`);
}


10
const number = parseInt(prompt("Введите целое число:"));
const isEven = (number % 2 === 0);
console.log(isEven ? "Число четное" : "Число нечетное");
