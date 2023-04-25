interface User_04 {
  tag: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin_04 {
  tag: "admin";
  name: string;
  age: number;
  role: string;
}

export type Person_04 = User_04 | Admin_04;

export const persons: Person_04[] = [
  {
    tag: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    tag: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    tag: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    tag: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person_04) {
  let additionalInformation: string;
  if (person.tag === "admin") {
    // 型の絞り込みが行えるようにA
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
