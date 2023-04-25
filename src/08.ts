type User_08 = {
  name: string;
  age: number;
  location: string;
};

function greet(user: User_08) {
  return `こんにちは、${user.name}さん。あなたは${user.age}歳で、${user.location}に住んでいますね。`;
}

const user: User_08 = {
  name: "John",
  age: 30,
  location: "New York",
};

console.log(greet(user)); // こんにちは、Johnさん。あなたは30歳で、ニューヨークに住んでいますね。
