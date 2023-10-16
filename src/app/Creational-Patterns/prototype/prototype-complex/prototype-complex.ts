export abstract class Shape {
  x!: number;
  y!: number;
  color!: string;

  constructor(source?: Shape) {
    if (source) {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }
  }

  abstract clone(): Shape;
}

export class Rectangle extends Shape {
  width!: number;
  height!: number;

  constructor(source?: Rectangle) {
    super(source);
    if (source) {
      this.width = source.width;
      this.height = source.height;
    }
  }

  clone(): Rectangle {
    return new Rectangle(this);
  }
}

export class Circule extends Shape {
  radius!: number;

  constructor(source?: Circule) {
    super(source);
    if (source) {
      this.radius = source.radius;
    }
  }

  clone(): Circule {
    return new Circule(this);
  }
}

export class Application {
  shapes: Shape[] = [];

  constructor() {
    const circle = new Circule();
    circle.x = 10;
    circle.y = 20;
    circle.radius = 15;
    circle.color = 'red';
    this.shapes.push(circle);

    const anotherCircle = circle.clone();
    this.shapes.push(anotherCircle);

    const rectangle = new Rectangle();
    rectangle.width = 10;
    rectangle.height = 20;
    rectangle.color = 'blue';
    this.shapes.push(rectangle);
  }

  businessLogic(): void {
    const shapesCopy: Shape[] = [];
    this.shapes.forEach((shape) => {
      shapesCopy.push(shape.clone());
    });
  }
}
