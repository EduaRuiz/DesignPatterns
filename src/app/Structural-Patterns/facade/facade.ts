import { Component } from '@angular/core';
class ThousandSunnyFacade {
  private engineRoom: EngineRoom;
  private kitchen: Kitchen;
  private cannon: Cannon;
  private navigation: Navigation;
  private infirmary: Infirmary;

  constructor() {
    this.engineRoom = new EngineRoom();
    this.kitchen = new Kitchen();
    this.cannon = new Cannon();
    this.navigation = new Navigation();
    this.infirmary = new Infirmary();
  }

  public prepareCannonForFiring(): string {
    const message =
      this.engineRoom.startEngine() +
      ' ' +
      this.kitchen.preparePowder() +
      ' ' +
      this.cannon.loadCannon() +
      ' ' +
      this.cannon.aimCannon();
    return message;
  }

  public cookDinnerForCrew(): string {
    const message =
      this.engineRoom.startStove() +
      ' ' +
      this.kitchen.prepareIngredients() +
      ' ' +
      this.kitchen.useCookware() +
      ' ' +
      this.kitchen.serveDinner();
    return message;
  }

  public navigateToIsland(islandName: string): string {
    const message =
      this.engineRoom.startEngine() +
      ' ' +
      this.navigation.setDestination(islandName) +
      ' ' +
      this.navigation.startNavigation();
    return message;
  }

  public healInjury(injuryType: string): string {
    const message =
      this.infirmary.prepareMedicine(injuryType) +
      ' ' +
      this.infirmary.applyMedicine();
    return message;
  }
}

class EngineRoom {
  public startEngine(): string {
    return 'Starting engine...';
  }

  public startStove(): string {
    return 'Starting stove...';
  }
}

class Kitchen {
  public preparePowder(): string {
    return 'Preparing powder...';
  }

  public prepareIngredients(): string {
    return 'Preparing ingredients...';
  }

  public useCookware(): string {
    return 'Using cookware...';
  }

  public serveDinner(): string {
    return 'Serving dinner...';
  }
}

class Cannon {
  public loadCannon(): string {
    return 'Loading cannon...';
  }

  public aimCannon(): string {
    return 'Aiming cannon...';
  }
}

class Navigation {
  public setDestination(islandName: string): string {
    return `Setting destination to ${islandName}...`;
  }

  public startNavigation(): string {
    return 'Starting navigation...';
  }
}

class Infirmary {
  public prepareMedicine(injuryType: string): string {
    return `Preparing medicine for ${injuryType}...`;
  }

  public applyMedicine(): string {
    return 'Applying medicine...';
  }
}

@Component({
  selector: 'facade',
  templateUrl: './facade.html',
})
export class FacadeComponent {
  sunnyFacade = new ThousandSunnyFacade();
  cannonMessage: string = '';
  kitchenMessage: string = '';
  navigationMessage: string = '';
  infirmaryMessage: string = '';

  prepareCannonForFiring(): void {
    this.cannonMessage = this.sunnyFacade.prepareCannonForFiring();
  }

  cookDinnerForCrew(): void {
    this.kitchenMessage = this.sunnyFacade.cookDinnerForCrew();
  }

  navigateToIsland(): void {
    this.navigationMessage = this.sunnyFacade.navigateToIsland('Wano');
  }

  healBurn(): void {
    this.infirmaryMessage = this.sunnyFacade.healInjury('burn');
  }
}
