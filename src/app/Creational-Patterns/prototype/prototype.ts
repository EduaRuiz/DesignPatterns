export interface AkumaNoMi {
  name: string;
  type: string;
  clone(): AkumaNoMi;
}

export class Fruit implements AkumaNoMi {
  name: string;
  type: string;

  constructor(name = 'Gomu Gomu no Mi', type = 'Paramecia') {
    this.name = name;
    this.type = type;
  }
  clone(): AkumaNoMi {
    return new Fruit(this.name, this.type);
  }
}

import { Component } from '@angular/core';

const fruitNames: string[] = ['Manzana', 'Naranja', 'Pera', 'Banana', 'Fresa'];

@Component({
  selector: 'prototype',
  templateUrl: './prototype.html',
})
export class PrototypeComponent {
  fruits: AkumaNoMi[] = [];

  addFruit(): void {
    const fruit = this.getRandomFruit();
    this.fruits.push(fruit);
  }

  cloneFruit(): void {
    if (this.fruits.length > 0) {
      const clone = this.fruits[this.fruits.length - 1].clone();
      this.fruits.push(clone);
    }
    throw new Error('No fruits to clone');
  }

  getRandomFruit(): AkumaNoMi {
    const randomIndex = Math.floor(Math.random() * fruitNames.length);
    const randomFruitName = fruitNames[randomIndex];
    const randomFruitType = Math.random() < 0.5 ? 'Paramecia' : 'Zoan';

    return new Fruit(randomFruitName, randomFruitType);
  }
}
