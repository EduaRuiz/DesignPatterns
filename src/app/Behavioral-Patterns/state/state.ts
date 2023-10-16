interface PirateState {
  attack(): void;
  defend(): void;
}

class NormalState implements PirateState {
  attack(): void {
    console.log('Luffy usa el Gomu Gomu no Pistol!');
  }

  defend(): void {
    console.log('Luffy esquiva el ataque con Haki!');
  }
}

class GearSecondState implements PirateState {
  attack(): void {
    console.log('Luffy usa el Gomu Gomu no Jet Pistol!');
  }

  defend(): void {
    console.log(
      'Luffy utiliza el Haki de Observación para esquivar el ataque!'
    );
  }
}

class Pirate {
  private state: PirateState;

  constructor() {
    this.state = new NormalState();
  }

  setState(state: PirateState): void {
    this.state = state;
  }

  attack(): void {
    this.state.attack();
  }

  defend(): void {
    this.state.defend();
  }
}

const luffy = new Pirate();
luffy.attack();
luffy.defend();

const gearSecondState = new GearSecondState();
luffy.setState(gearSecondState);

luffy.attack();
luffy.defend();
