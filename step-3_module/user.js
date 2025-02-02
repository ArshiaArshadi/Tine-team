export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printname(user) {
  console.log(`User's name is ${User.name}`);
}

export function printage(age) {
  console.log(`User is ${User.age} years old`);
}
