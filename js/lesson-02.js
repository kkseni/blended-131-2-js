//Task 01
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// const i = styles.indexOf('blues');
// styles[i] = 'classic';

// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1){
//         console.log(`${i+1} - ${array[i]}`)
//     }
// }
// logItems(styles);

//task 2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];


//task 3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//     let total = 0;
//     let totalCount = 0;
//     for (const arg of arguments) {
//         if (typeof arg === "number") {
//             total += arg;
//             totalCount += 1;

//         }
//     }
//     return total/totalCount
// }
// console.log(caclculateAverage(1, 2, 5, 25, 9));
// console.log(caclculateAverage(1,5,8,false,6,25,50,45,"Peter"));

