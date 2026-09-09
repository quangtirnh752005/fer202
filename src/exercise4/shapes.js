// Yêu cầu: tạo các class theo sơ đồ trong đề (Shape, Rectangle, Triangle)

class Shape {
  constructor(color) {
    this.color = color;
  }
  getArea() {
    return 0;
  }
  toString() {
    return `Shape[color=${this.color}]`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  toString() {
    return `Rectangle[${super.toString()}, length=${this.length}, width=${this.width}]`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return (this.base * this.height) / 2;
  }
  toString() {
    return `Triangle[${super.toString()}, base=${this.base}, height=${this.height}]`;
  }
}

export { Shape, Rectangle, Triangle };
