export interface AbstractFactory {
  createFlag(): string;
  createdCape(): string;
  crateShip(): string;
}

export class PirateThings implements AbstractFactory {
  createFlag(): string {
    console.log('Pirate flag displayed');
    return 'PirateFlag';
  }
  createdCape(): string {
    console.log('Pirate ship displayed');
    return 'PirateCape';
  }
  crateShip(): string {
    console.log('Pirate weapon displayed');
    return 'PirateShip';
  }
}

export class MarineThings implements AbstractFactory {
  createFlag(): string {
    console.log('Marine flag displayed');
    return 'MarineFlag';
  }
  createdCape(): string {
    console.log('Marine ship displayed');
    return 'MarineCape';
  }
  crateShip(): string {
    console.log('Marine weapon displayed');
    return 'MarineShip';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-flag-ship-weapon',
  templateUrl: './abstract-factory.html',
})
export class AbstractFactoryComponent {
  private pirateThings: PirateThings = new PirateThings();
  private marineThings: MarineThings = new MarineThings();
  public showPirateOptions: boolean = false;
  public showMarineOptions: boolean = false;
  public flag: string = '';
  public cape: string = '';
  public ship: string = '';

  selectPirate(): void {
    this.showPirateOptions = true;
    this.showMarineOptions = false;
  }

  selectMarine(): void {
    this.showPirateOptions = false;
    this.showMarineOptions = true;
  }

  createPirateFlag(): void {
    const flag = this.pirateThings.createFlag();
    console.log('Created:', flag);
    this.flag = 'PirateFlag';
  }

  createPirateCape(): void {
    const cape = this.pirateThings.createdCape();
    console.log('Created:', cape);
    this.cape = 'PirateCape';
  }

  createPirateShip(): void {
    const ship = this.pirateThings.crateShip();
    console.log('Created:', ship);
    this.ship = 'PirateShip';
  }

  createMarineFlag(): void {
    const flag = this.marineThings.createFlag();
    console.log('Created:', flag);
    this.flag = 'MarineFlag';
  }

  createMarineCape(): void {
    const cape = this.marineThings.createdCape();
    console.log('Created:', cape);
    this.cape = 'MarineCape';
  }

  createMarineShip(): void {
    const ship = this.marineThings.crateShip();
    console.log('Created:', ship);
    this.ship = 'MarineShip';
  }
}
