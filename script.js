console.log(`Задание #1`)
let a = "Привет, Simbirsoft"
let b = 2022
let c = true
let d = "false"
console.log(typeof(a) + ', ' + typeof(b) + ', ' + typeof(c) + ', ' + typeof(d));

console.log(`Задание #2`)
let str1 = "Привет, "
let str2 = "Мир!"

console.log(str1 + str2);

console.log(`Задание #3`)
const name = "Алексей"

console.log(`Привет, ${name}`);

console.log(`Задание #4`)
const age = 19

console.log(`Мне ${age} лет!`);

console.log(`Задание #5`)
const str = 'abcde'

console.log(str[0] + ' ' + str[2] + ' ' + str[4]);

console.log(`Задание #6`)
const hour = 18
const minutes = 46
const second = 31

console.log(hour + ':' + minutes + ':' + second);

console.log(`Задание #7`)
const number = 10

console.log((Math.sqrt(number).toFixed(3)));

console.log(`Задание 8
----------------------`);
const user = {
  id: 1,
  login: 'Administrator',
  email: 'admin@admin.admin',
  name: 'Иванов Анатолий',
  age: 23,
  account: '125$',
  phone: '+79602542214',
  address: {
    city: 'г. Ульяновск',
    street: 'ул. Ленина',
    build: 'д.25',
    flat: 'кв.15',
  },
  isActive: true,
  role: {
    id: 1,
    title: 'Администратор',
    name: 'administrator',
  },
};

console.log(user.name);
console.log(user.age);
console.log(parseInt(user.account));
console.log(
  user.address.city +
    ', ' +
    user.address.street +
    ', ' +
    user.address.build +
    ', ' +
    user.address.flat,
);
console.log(user.role.name);
console.log(2023 - user.age);
console.log(user.name.slice(0, -8));

console.log('Задание #9');
if (a >= 3 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

console.log('Задание #10');
let num = [5, 0, -3, 2]
for (let i = 0; i < num.length; i++) {
  let a = num[i];
  if (a === 0 || a === 2) {
    a += 7;
  } else {
    a /= 10;
  }
  console.log(a)
}

console.log('Задание #11');
let result;
switch (num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'лето';
    break;
  case 4:
    result = 'осень';
    break;
  default:
    break;
}

console.log('Задание #12');
let day = 14;
if (day > 0 && day <=10) {
  console.log('Первая декада');
} else if (day >= 11 && day <=20) {
  console.log('Вторая декада');
} else {
  console.log('Третья декада');
}

console.log('Задание #13');
let month = 2;
if (month > 0 && month < 4) {
  console.log('зима');
} else if (month > 3 && month < 7) {
  console.log('весна');
} else if (month > 6 && month < 10) {
  console.log('лето');
} else {
  console.log('осень');
}

console.log('Задание #14');
let str = 'abcde'
if (str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

console.log('Задание #15');
const sra = (a, b) => {
  return (a + b)/2
}

const sendHello = () => {
  return 'Привет, мир!'
}

const sendHello = (name) => {
  return `'Привет, ${name}!'`
}

console.log('Задание #16');
let arr = [3, -5, -2, 4, -8, 0];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] < 0) {
    sum += arr[i];
  }
}
console.log(sum);

console.log('Задание #17');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -120 -9, -8, -7, -6, -5, -4, -3, -2, -1, -10];
let abs = Math.max.apply(Math,numbers.map(Math.abs));

console.log('Задание #18');
let num = [10, -5, 3, 2, 0, -1, 8, 0, 10, 3]
let pos = 0
let neg = 0
for (let i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    pos++
  } else if (num[i] < 0) {
    neg++
  }
}
console.log('pos - ' + pos + ', ' + 'neg - ' + neg)

console.log('Задание #19');
let num = [ 3, -5, -2, 4, -8, 0, -2]
console.log((new Set(num)).size !== num.length);

console.log('Задание #20');
let num = [3, 5, 3, 6, 5, 7];
console.log([...new Set(num)]);

console.log('Задание #21');
let num1 = [6, 8, 9, 11, 3];
let num2 = [6, 8, 9, 11, 3];
console.log(isEqual(num1, num2));
function isEqual(num1, num2) {
  let equal;
  num1.length == num1.length &&
    num2.every(function (element, index) {
      equal = element === num2[index];
    });
  return equal;
}