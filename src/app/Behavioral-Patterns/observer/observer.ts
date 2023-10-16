interface PirateObserver {
  update(action: string): void;
}

class PirateSubject {
  private observers: PirateObserver[] = [];

  addObserver(observer: PirateObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: PirateObserver): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(action: string): void {
    this.observers.forEach((observer) => {
      observer.update(action);
    });
  }
}

class CrewMember implements PirateObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(action: string): void {
    console.log(`${this.name} observa: Luffy realiza la acción - ${action}`);
  }
}

const Ship = new PirateSubject();

const zoro = new CrewMember('Zoro');
const nami = new CrewMember('Nami');
const usopp = new CrewMember('Usopp');

Ship.addObserver(zoro);
Ship.addObserver(nami);
Ship.addObserver(usopp);

Ship.notifyObservers('Gomu Gomu no Pistol');
