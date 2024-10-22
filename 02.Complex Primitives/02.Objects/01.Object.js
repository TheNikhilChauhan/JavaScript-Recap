//1. Write a program that prints all the male people's first name given a complex object

const users = [
  {
    name: "Harvey",
    gender: "Male",
  },
  {
    name: "Donna",
    gender: "Female",
  },
  {
    name: "Mike",
    gender: "Male",
  },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].gender === "Male") {
    console.log(users[i].name);
  }
}
