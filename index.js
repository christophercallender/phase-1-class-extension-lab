class Polygon {
   constructor(arr) {
      this.polygon = arr;
   }
   get countSides() {
      return this.polygon.length;
   }
   get perimeter() {
      return this.polygon.reduce((acc, elem) => acc + elem);
   }
}

class Triangle extends Polygon {
   get isValid() {
      this.polygon.sort();
      return this.polygon[0] + this.polygon[1] > this.polygon[2];
   }
}

class Square extends Polygon {
   get isValid() {
      return this.polygon.every((elem) => elem == this.polygon[0]);
   }
   get area() {
      return this.polygon[0] * this.polygon[1];
   }
}
