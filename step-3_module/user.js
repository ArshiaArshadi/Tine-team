export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printname(user) {
  console.log(`User's name is ${user.name}`);
}

export function printname(age) {
  console.log(`User is ${user.age} years old`);
}
