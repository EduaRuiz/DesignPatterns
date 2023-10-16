class TreasureMemento {
  private state: string;
  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

class Treasure {
  private state?: string;

  setState(state: string): void {
    this.state = state;
  }

  save(): TreasureMemento {
    return new TreasureMemento(this.state || '');
  }

  restore(memento: TreasureMemento): void {
    this.state = memento.getState();
  }

  getState(): string {
    return this.state || '';
  }
}

// Crear un objeto de tesoro (representando el tesoro de One Piece)
const treasure: Treasure = new Treasure();

// Establecer y guardar el estado original del tesoro
treasure.setState('One Piece encontrado en la isla Raftel');

const memento: TreasureMemento = treasure.save();

// Cambiar el estado del tesoro
treasure.setState('Tesoro perdido en una isla desconocida');

// Restaurar desde el memento (estado original)
treasure.restore(memento);

console.log('Estado actual del tesoro de One Piece:', treasure.getState());
