//2. write a program that greets a person based on their gender.

let user = ["Harvey", "Donna", "Louis"];
let userGender = ["Male", "Female", "Male"];

for (let i = 0; i < user.length; i++) {
  if (userGender[i] === "Male") {
    console.log(`Hello Mr. ${user[i]} `);
  } else {
    console.log(`Hello Ms. ${user[i]}`);
  }
}
