// import User from "/user.js";
import U, { printname as nameP, printage as ageP } from "/user.js";

const user = new U("bob", 11);
console.log(user);
nameP(user);
ageP(user);
