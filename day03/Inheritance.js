
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  work() {
    console.log(`${this.name} funktioniert.`);
  }

  eat() {
    console.log(`${this.name} isst.`);
  }
}


class Student extends Person{
  // name, age, grade
  // methods: study(), eat()
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} lernt.`);
  }

  work() {
    console.log(`${this.name} funktioniert.`);
  }
}

class Teacher extends Person {
  // name, age, salary
  // methods: teach(), eat()

  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  teach() {
    console.log(`${this.name} unterrichtet.`);
  }
}




let student1=new Student("Okan",23,"BerufSchule");
let teacher1=new Teacher("Jochan", 45,3000);

console.log(student1);
student1.study();
console.log(student1.age); 



console.log(teacher1);
teacher1.teach();


