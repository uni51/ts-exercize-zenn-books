class Person_07 {
  name = "";
  age = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 以下に、Studentクラスを定義するコードを追加してください
class Student_07 extends Person_07 {
  studentId = "";

  constructor(name: string, age: number, studentId: string) {
    super(name, age);
    this.studentId = studentId;
  }
}

const student = new Student_07("John", 20, "123456");
console.log(student.name); // John
console.log(student.age); // 20
console.log(student.studentId); // 123456
