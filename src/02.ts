type User_02 = {
  name: string;
  age: number;
};

const users: User_02[] = [
  {
    name: "Jhon",
    age: 25,
  },
  {
    name: "Taro",
    age: 23,
  },
];

function logPerson_02(user: User_02) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson_02);
