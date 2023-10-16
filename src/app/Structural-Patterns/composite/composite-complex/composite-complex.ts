export interface Graphic {
  move(x: number, y: number): void;
  draw(): void;
}

class Dot implements Graphic {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`Drawing Dot at ${this.x} and ${this.y}`);
  }
}

class Circle extends Dot {
  radius: number;
  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius;
  }

  override draw(): void {
    console.log(
      `Drawing Circle at ${this.x} and ${this.y} with radius ${this.radius}`
    );
  }
}

class CompoundGraphic implements Graphic {
  children: Graphic[] = [];

  add(child: Graphic): void {
    this.children.push(child);
  }

  remove(child: Graphic): void {
    this.children = this.children.filter((c) => c !== child);
  }

  move(x: number, y: number): void {
    this.children.forEach((child) => child.move(x, y));
  }

  draw(): void {
    this.children.forEach((child) => child.draw());
  }
}

export class ImageEditor {
  all!: CompoundGraphic;

  load() {
    this.all = new CompoundGraphic();
    const all2 = new CompoundGraphic();
    all2.add(new Dot(1, 2));
    all2.add(new Dot(3, 4));
    all2.add(new Circle(5, 3, 10));
    this.all.add(new Dot(1, 2));
    this.all.add(new Circle(5, 3, 10));
    this.all.add(all2);
  }

  groupSelected(components: Graphic[]) {
    const group = new CompoundGraphic();
    components.forEach((c) => {
      group.add(c);
      this.all.remove(c);
    });
    this.all.add(group);
    this.all.draw();
  }
}

const composite = () => {
  const editor = new ImageEditor();
  editor.load();
  const all = editor.all;
  editor.groupSelected([all.children[0], all.children[1]]);
};

composite();
