class Iterator<T> {
  private index: number = 0;
  private collection: T[] = [];
  constructor(collection: T[] = [], index: number = 0) {
    this.collection = collection;
    this.index = index;
  }

  next(): any {
    if (this.hasNext()) {
      const character = this.collection[this.index];
      this.index++;
      return { done: false, value: character };
    }
    return { done: true };
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }

  resetIndex(): void {
    this.index = 0;
  }
}
class OnePieceCharacter {
  constructor(public name: string) {}
}

class OnePieceCrew {
  private members: OnePieceCharacter[] = [];

  addCharacter(character: OnePieceCharacter): void {
    this.members.push(character);
  }

  getMembers(): OnePieceCharacter[] {
    return this.members;
  }
}

class OnePieceIterator extends Iterator<OnePieceCharacter> {
  constructor(collection: OnePieceCharacter[], index: number = 0) {
    super(collection, index);
  }
}

// Uso del patrón Iterator
const crew = new OnePieceCrew();
crew.addCharacter(new OnePieceCharacter('Luffy'));
crew.addCharacter(new OnePieceCharacter('Zoro'));
crew.addCharacter(new OnePieceCharacter('Nami'));

const iterator = new OnePieceIterator(crew.getMembers());
while (iterator.hasNext()) {
  const character = iterator.next();
  console.log('Nombre del personaje: ' + character.name);
}
