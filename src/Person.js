class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Tôi là ${this.name}, ${this.age} tuổi`;
  }
}

export default Person;