import { Component, OnInit } from '@angular/core';

interface Pirate {
  attack(): string;
  powerLevel(): number;
}

class BasicPirate implements Pirate {
  attack(): string {
    return 'Ataque con espada';
  }

  powerLevel(): number {
    return 100;
  }
}

abstract class PirateDecorator implements Pirate {
  protected decoratedPirate: Pirate;

  constructor(pirate: Pirate) {
    this.decoratedPirate = pirate;
  }

  attack(): string {
    return this.decoratedPirate.attack();
  }

  powerLevel(): number {
    return this.decoratedPirate.powerLevel();
  }
}

class HakiDecorator extends PirateDecorator {
  override attack(): string {
    return this.decoratedPirate.attack() + ', usando Haki';
  }

  override powerLevel(): number {
    return this.decoratedPirate.powerLevel() + 50;
  }
}

class DevilFruitDecorator extends PirateDecorator {
  override attack(): string {
    return (
      this.decoratedPirate.attack() + ', usando el poder de la Fruta del Diablo'
    );
  }

  override powerLevel(): number {
    return this.decoratedPirate.powerLevel() + 100;
  }
}
@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.html',
})
export class DecoratorComponent {
  selectedPirate: Pirate = new BasicPirate();

  selectHaki(): void {
    this.selectedPirate = new HakiDecorator(this.selectedPirate);
  }

  selectDevilFruit(): void {
    this.selectedPirate = new DevilFruitDecorator(this.selectedPirate);
  }

  resetSelection(): void {
    this.selectedPirate = new BasicPirate();
  }
}
