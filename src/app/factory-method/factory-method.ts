export interface FlagFactory {
  createFlag(): string;
}

export class PirateFlag implements FlagFactory {
  createFlag(): string {
    console.log('Pirate flag displayed: Jolly Roger');
    return 'Pirate';
  }
}

export class MarineFlag implements FlagFactory {
  createFlag(): string {
    console.log('Marine flag displayed: Jolly Roger');
    return 'Marine';
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactoryMethod {
  setFlag(type: string): FlagFactory {
    switch (type) {
      case 'pirate':
        return new PirateFlag();
      case 'marine':
        return new MarineFlag();
      default:
        throw new Error('Invalid flag type');
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'factory-method',
  templateUrl: './factory-method.html',
})
export class FactoryMethodComponent {
  selectedFlag?: string;

  constructor(private factoryMethod: FactoryMethod) {}

  displayPirateFlag(): void {
    const pirateFlag = this.factoryMethod.setFlag('pirate');
    this.selectedFlag = pirateFlag.createFlag();
  }

  displayMarineFlag(): void {
    const marineFlag = this.factoryMethod.setFlag('marine');
    this.selectedFlag = marineFlag.createFlag();
  }
}
