// This is a long JavaScript file that adheres to common ESLint and Prettier configurations.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  static compareAges(person1, person2) {
    if (person1.age > person2.age) {
      return `${person1.name} is older than ${person2.name}.`;
    } else if (person1.age < person2.age) {
      return `${person2.name} is older than ${person1.name}.`;
    } else {
      return `${person1.name} and ${person2.name} are the same age.`;
    }
  }
}

const john = new Person('John', 30);
const jane = new Person('Jane', 25);

console.log(john.greet());
console.log(jane.greet());
console.log(Person.compareAges(john, jane));

// Async/Await example
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetchData(apiUrl).then(data => {
  console.log('Fetched data:', data);
});

// Higher-order functions example
function processArray(arr, callback) {
  return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, number => number * 2);

console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

// Example of closures
function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Example of a Promise
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Operation completed');
    }, 2000);
  });
}

asyncOperation().then(result => {
  console.log(result);
}).catch(error => {
  console.error('Error:', error);
});

// Example of using template literals
const name = 'Alice';
const age = 28;
const introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);

// Functional programming example
const numbersArray = [1, 2, 3, 4, 5];

const sum = numbersArray.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of numbers:', sum);

// Example of a simple class with private fields (using the # syntax)
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Deposit amount must be positive.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log('Insufficient balance or invalid amount.');
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log('Final balance:', myAccount.getBalance());

// Array destructuring example
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);

// Object destructuring example
const user = {
  id: 1,
  name: 'Bob',
  email: 'bob@example.com'
};

const { name: userName, email: userEmail } = user;
console.log('User Name:', userName);
console.log('User Email:', userEmail);

// Example of a Map
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Example of a Set
const set = new Set([1, 2, 2, 3, 4, 4]);
console.log('Set values:', [...set]);

// Example of a RegExp
const regex = /hello/i;
const str = 'Hello World!';
console.log('Does the string match the regex?', regex.test(str));

// Example of an immediately-invoked function expression (IIFE)
(function() {
  const message = 'I am an IIFE!';
  console.log(message);
})();

// Example of a generator function
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const generator = idGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

// Example of an object with shorthand properties and methods
const a = 10;
const b = 20;

const obj = {
  a,
  b,
  sum() {
    return this.a + this.b;
  }
};

console.log('Object sum:', obj.sum());

// Example of a Symbol
const uniqueId = Symbol('id');
const objWithSymbol = {
  [uniqueId]: 123,
  name: 'Symbol Example'
};

console.log('Object with Symbol property:', objWithSymbol);

// Example of a Proxy
const handler = {
  get(target, prop, receiver) {
    return prop in target ? target[prop] : 'Property does not exist';
  }
};

const target = { a: 1, b: 2 };
const proxy = new Proxy(target, handler);

console.log(proxy.a); // 1
console.log(proxy.c); // Property does not exist

// Example of a class extending another class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak());

// Example of a class with static methods and properties
class MathUtil {
  static PI = 3.14159;

  static circleArea(radius) {
    return MathUtil.PI * radius * radius;
  }
}

console.log('Circle area:', MathUtil.circleArea(5));

// Example of spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('Combined array:', combined);

// Example of rest parameters
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log('Sum of all numbers:', sumAll(1, 2, 3, 4, 5));

// Example of an arrow function
const add = (a, b) => a + b;
console.log('Addition result:', add(2, 3));

// Example of an async function with try/catch
async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    console.log('Data processed:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndProcessData('https://jsonplaceholder.typicode.com/users');

// Example of using the Date object
const now = new Date();
console.log('Current Date and Time:', now.toString());

// Example of using the `typeof` operator
console.log('Type of 42:', typeof 42);
console.log('Type of "Hello":', typeof 'Hello');
console.log('Type of {}:', typeof {});

// Example of a basic setInterval and setTimeout usage
setTimeout(() => {
  console.log('This will run after 2 seconds');
}, 2000);

let counterInterval = 0;
const intervalId = setInterval(() => {
  console.log('Interval count:', counterInterval);
  counterInterval += 1;
  if (counterInterval === 5) {
    clearInterval(intervalId);
  }
}, 1000);

console.log('End of the script');
