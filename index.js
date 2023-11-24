class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      this._radius = value;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    set diameter(value) {
      this._radius = value / 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    set circumference(value) {
      this._radius = value / (2 * Math.PI);
    }
  
    get area() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    set area(value) {
      this._radius = Math.sqrt(value / Math.PI);
    }
  }
  
  // Example usage:
  const myCircle = new Circle(5);
  
  console.log(myCircle.radius);  // Output: 5
  console.log(myCircle.diameter);  // Output: 10
  console.log(myCircle.circumference);  // Output: 31.41592653589793
  console.log(myCircle.area);  // Output: 78.53981633974483
  
  myCircle.radius = 7;
  console.log(myCircle.radius);  // Output: 7
  console.log(myCircle.diameter);  // Output: 14
  console.log(myCircle.circumference);  // Output: 43.982297150257104
  console.log(myCircle.area);  // Output: 153.93804002589985
  