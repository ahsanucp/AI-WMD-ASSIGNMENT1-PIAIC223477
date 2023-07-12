export const Activity24 = () => {
  let fruit = 'apple';
  console.log("Is fruit == 'apple'? I predict True.");
  console.log(fruit == 'apple');

  let color = 'blue';
  console.log("Is color != 'red'? I predict True.");
  console.log(color != 'red');

  let name = 'John';
  console.log("Is name.toLowerCase() == 'john'? I predict True.");
  console.log(name.toLowerCase() == 'john');

  let country = 'CANADA';
  console.log("Is country.toLowerCase() != 'canada'? I predict False.");
  console.log(country.toLowerCase() != 'canada');

  let x = 10;
  console.log("Is x == 10? I predict True.");
  console.log(x == 10);

  let y = 5;
  console.log("Is y != 5? I predict False.");
  console.log(y != 5);

  let num1 = 20;
  let num2 = 15;
  console.log("Is num1 > num2? I predict True.");
  console.log(num1 > num2);

  console.log("Is num1 <= num2? I predict False.");
  console.log(num1 <= num2);

  let isSunny = true;
  let isWarm = false;
  console.log("Is isSunny and isWarm? I predict False.");
  console.log(isSunny && isWarm);

  let isRainy = true;
  let isCold = true;
  console.log("Is isRainy or isCold? I predict True.");
  console.log(isRainy || isCold);

  let fruits = ['apple', 'banana', 'orange'];
  console.log("Is 'banana' in fruits array? I predict True.");
  console.log(fruits.includes('banana'));

  let vegetables = ['carrot', 'broccoli', 'spinach'];
  console.log("Is 'cabbage' not in vegetables array? I predict True.");
  console.log(!vegetables.includes('cabbage'));
}