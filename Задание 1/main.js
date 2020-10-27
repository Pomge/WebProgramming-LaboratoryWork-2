main();

function main() {
  task_1();
  task_2();
  task_3();
}

// Задание 1.1
function task_1() {
  console.log("Задание 1.1:");
  myFunction("TextParam");
  myFunction('c');
  myFunction(123);
  myFunction(123.456);
  console.log("\n");
}

function myFunction(param) {
  console.log("myFunction(" + param + "): " + param);
}

// Задание 1.2
function task_2() {
  console.log("Задание 1.2:");
  sum("a", "b");
  sum('a', 'b');
  sum(111, 123);
  sum(123.456, 456.789);
  console.log("\n");
}

function sum(num_1, num_2) {
  console.log("sum(" + num_1 + ", " + num_2 + "): " + (num_1 + num_2));
}

// Задание 1.3
function task_3() {
  console.log("Задание 1.3:");
  let array = createArray();
  console.log("Input Array:");
  printArray(array);
  changeArray(array);
  console.log("Output Array:");
  printArray(array);
  console.log("\n");
}

function createArray() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    if (Math.random() >= 0.5) {
      let s = "";
      for (let j = 0; j < getRandomInt(5); j++) s += convert(getRandomInt(100));
      array[i] = s;
    } else array[i] = getRandomInt(100);
  }
  return array;
}

function changeArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      array[i] *= array[i];
    } else array[i] = 0;
  }
}

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("array[" + i + "]: " + array[i]);
  }
  console.log("\n");
}

function convert(num) {
  return num
  .toString()
  .split('')
  .map(Number)
  .map(n => (n || 10) + 64)
  .map(c => String.fromCharCode(c))
  .join('');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
