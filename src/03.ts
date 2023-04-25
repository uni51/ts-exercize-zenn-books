interface User_03 {
  name: string;
  age: number;
  occupation: string;
}

interface Admin_03 {
  name: string;
  age: number;
  role: string;
}

type Person_03 = User_03 | Admin_03;

const persons_03: Person_03[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

function logPerson_03(user: Person_03) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson_03);
