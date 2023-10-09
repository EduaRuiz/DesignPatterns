import { Component } from '@angular/core';

interface DevilFruit {
  useAbility(): string;
}

class LogiaFruit implements DevilFruit {
  useAbility(): string {
    const details = 'Concede habilidades únicas y transformación en elementos.';
    console.log(details);
    return details;
  }
}

class ParameciaFruit implements DevilFruit {
  useAbility(): string {
    const details = 'Concede habilidades únicas y transformación en elementos.';
    console.log(details);
    return details;
  }
}

class ZoanFruit implements DevilFruit {
  useAbility(): string {
    const details = 'Permite transformarse en un animal o una forma híbrida.';
    console.log(details);
    return details;
  }
}

// Abstracción extendida: Pirata
abstract class Pirate {
  protected name: string;
  protected devilFruit: DevilFruit;

  constructor(name: string, devilFruit: DevilFruit) {
    this.name = name;
    this.devilFruit = devilFruit;
  }

  abstract showInfo(): void;

  useDevilFruitAbility(): string {
    return this.devilFruit.useAbility();
  }

  getName(): string {
    return this.name;
  }
}

// Implementación específica de Pirata
class StrawHatPirate extends Pirate {
  constructor(name: string, devilFruit: DevilFruit) {
    super(name, devilFruit);
  }

  showInfo(): string {
    const message = 'Soy un pirata de los sombrero de paja.';
    console.log(message);
    return message;
  }
}

class HeartPirate extends Pirate {
  constructor(name: string, devilFruit: DevilFruit) {
    super(name, devilFruit);
  }

  showInfo(): string {
    const message = 'Soy un pirata de los piratas corazón.';
    console.log(message);
    return message;
  }
}

class WhiteBeardPirate extends Pirate {
  constructor(name: string, devilFruit: DevilFruit) {
    super(name, devilFruit);
  }

  showInfo(): string {
    const message = 'Soy un pirata de los piratas de barbablanca.';
    console.log(message);
    return message;
  }
}

@Component({
  selector: 'app-character-form',
  templateUrl: './bridge.html',
})
export class BridgeComponent {
  protected pirates: Pirate[] = [];
  protected showInfo: boolean = false;

  createPirates() {
    const luffy = new StrawHatPirate('Monckey D Luffy', new ParameciaFruit());
    const law = new HeartPirate('Trafalgar D. Water Law', new ParameciaFruit());
    const ace = new WhiteBeardPirate('Portgas D. Ace', new LogiaFruit());
    const chopper = new StrawHatPirate('Tony Tony Chopper', new ZoanFruit());
    const marco = new WhiteBeardPirate('Marco', new ZoanFruit());
    this.pirates.push(luffy, law, ace, chopper, marco);
  }

  show() {
    this.showInfo = true;
  }
}
