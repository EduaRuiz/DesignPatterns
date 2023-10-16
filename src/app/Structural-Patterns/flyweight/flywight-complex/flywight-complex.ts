export class TreeType {
  name: string;
  color: string;
  texture: string;
  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }
  draw(canvas: Canvas, x: number, y: number) {
    canvas.draw(this.name, this.color, this.texture, x, y);
  }
}

export class Canvas {
  draw(name: string, color: string, texture: string, x: number, y: number) {
    console.log(
      `Drawing ${name} with color ${color} and texture ${texture} at position (${x}, ${y})`
    );
  }
}

export class TreeFactory {
  static treeTypes: TreeType[] = [];
  static getTreeType(name: string, color: string, texture: string): TreeType {
    let type = this.treeTypes.find((type) => type.name === name);
    if (!type) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }
    return type;
  }
}

export class Tree {
  x: number;
  y: number;
  type: TreeType;
  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas: Canvas) {
    this.type.draw(canvas, this.x, this.y);
  }
}

export class Forest {
  trees: Tree[] = [];

  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(canvas: Canvas) {
    this.trees.forEach((tree) => tree.draw(canvas));
  }
}
