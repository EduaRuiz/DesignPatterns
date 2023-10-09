import { Component } from '@angular/core';

class OnePieceCharacter {
  constructor(private name: string, private type: string) {}

  useAbility(skill: string): string {
    return `${this.name} (${this.type}) uses skill: ${skill}`;
  }
}

class OnePieceCharacterFactory {
  private characters: { [key: string]: OnePieceCharacter } = {};

  getCharacter(name: string, type: string): OnePieceCharacter {
    const key = `${name}-${type}`;
    if (!this.characters[key]) {
      this.characters[key] = new OnePieceCharacter(name, type);
    }
    return this.characters[key];
  }
}

class Client {
  private characterFactory: OnePieceCharacterFactory;
  public messages: string[] = [];

  constructor() {
    this.characterFactory = new OnePieceCharacterFactory();
  }

  useCharacters(): string[] {
    const luffy = this.characterFactory.getCharacter(
      'Monkey D. Luffy',
      'Luchador'
    );
    this.messages.push(luffy.useAbility('Gomu Gomu no Pistol'));

    const nami = this.characterFactory.getCharacter('Nami', 'Navegante');
    this.messages.push(nami.useAbility('Clima-Tact'));

    const zoro = this.characterFactory.getCharacter('Roronoa Zoro', 'Luchador');
    this.messages.push(zoro.useAbility('Santoryu: Asura'));

    const usopp = this.characterFactory.getCharacter('Usopp', 'Francotirador');
    this.messages.push(usopp.useAbility('Kabuto'));

    const sanji = this.characterFactory.getCharacter('Sanji', 'Cocinero');
    this.messages.push(sanji.useAbility('Diable Jambe'));

    const chopper = this.characterFactory.getCharacter(
      'Tony Tony Chopper',
      'Medico'
    );
    this.messages.push(chopper.useAbility('Monster Point'));

    return this.messages;
  }
}

@Component({
  selector: 'app-flyweight',
  templateUrl: './flyweight.html',
})
export class FlyweightComponent {
  messages: string[] = [];
  public client = new Client();

  useCharacters(): void {
    this.messages = this.client.useCharacters();
  }
}
