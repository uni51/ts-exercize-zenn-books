interface User_05 {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin_05 {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type Person_05 = User_05 | Admin_05;

const persons: Person_05[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Admin_05istrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    occupation: "Ball",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Admin_05istrator",
  },
];

const isAdmin_05 = (person: Person_05): person is Admin_05 =>
  person.type === "admin";
const isUser_05 = (person: Person_05): person is User_05 =>
  person.type === "user";

function logPerson(person: Person_05) {
  let additionalInformation = "";
  if (isAdmin_05(person)) {
    additionalInformation = person.role;
  }
  if (isUser_05(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

function filterUser_05s(
  persons: Person_05[],
  criteria: Partial<Omit<User_05, "type">>
): User_05[] {
  // ①必要な条件のみを渡せるように
  // ②プロパティ`type`が入らないように
  return persons.filter(isUser_05).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Omit<
      User_05,
      "type"
    >)[];
    return criteriaKeys.every((fieldName) => {
      return user[fieldName] === criteria[fieldName];
    });
  });
}

console.log("User_05s of age 23:");

filterUser_05s(persons, {
  age: 23,
}).forEach(logPerson);
