import { Component } from '@angular/core';

interface OnePieceCharacter {
  getName(): string;
  getRole(): string;
}

class RealOnePieceCharacter implements OnePieceCharacter {
  private name: string;
  private role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
    console.log(
      `Loading details for ${this.name} (${this.role}) from database...`
    );
  }

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return this.role;
  }
}

class OnePieceCharacterProxy implements OnePieceCharacter {
  private realCharacter: RealOnePieceCharacter | null = null;
  private name: string;
  private role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  private loadCharacterDetails(): void {
    if (this.realCharacter === null) {
      this.realCharacter = new RealOnePieceCharacter(this.name, this.role);
    }
  }

  getName(): string {
    this.loadCharacterDetails();
    return this.realCharacter?.getName() || 'Character not found';
  }

  getRole(): string {
    this.loadCharacterDetails();
    return this.realCharacter?.getRole() || 'Role not found';
  }
}
@Component({
  selector: 'proxy',
  templateUrl: './proxy.html',
})
export class ProxyComponent {
  characters: OnePieceCharacter[] = [
    new OnePieceCharacterProxy('Monkey D. Luffy', 'Luchador'),
    new OnePieceCharacterProxy('Roronoa Zoro', 'Espadachín'),
    new OnePieceCharacterProxy('Nami', undefined as unknown as string),
  ];
}
