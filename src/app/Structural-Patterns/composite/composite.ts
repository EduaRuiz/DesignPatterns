export interface Compo {
  operation(): void;
}

export class Leaf implements Compo {
  constructor(private name: string) {}

  operation(): void {
    console.log(`Leaf: ${this.name} - Realizando operación.`);
  }
}

export class Composite implements Compo {
  private children: Compo[] = [];

  add(component: Compo): void {
    this.children.push(component);
  }

  operation(): void {
    console.log('Composite: Realizando operación.');
    for (const child of this.children) {
      child.operation();
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'composite',
  templateUrl: './composite.html',
})
export class CompositeComponent implements OnInit {
  composite: any;
  ngOnInit(): void {
    this.composite = this.getCompositeExample();
    this.composite.operation();
  }
  getCompositeExample(): Compo {
    const leaf1 = new Leaf('Hoja 1');
    const leaf2 = new Leaf('Hoja 2');
    const leaf3 = new Leaf('Hoja 3');

    const composite = new Composite();
    composite.add(leaf1);
    composite.add(leaf2);

    const composite2 = new Composite();
    composite2.add(leaf3);
    composite2.add(composite);

    return composite2;
  }
}
