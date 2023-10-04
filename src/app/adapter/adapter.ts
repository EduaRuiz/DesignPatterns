import { Component, OnInit } from '@angular/core';

export interface Character {
  ATTACK_BASE: number;
  attack(): number;
}
export class War {
  characters: Character[] = [];

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  attack(): number {
    return this.characters.reduce(
      (total, character) => total + character.attack(),
      0
    );
  }
}

export class Pirate implements Character {
  ATTACK_BASE = 100;
  attack(): number {
    return Math.random() * this.ATTACK_BASE;
  }
}

export class Marine implements Character {
  ATTACK_BASE = 80;
  attack(): number {
    return Math.random() * this.ATTACK_BASE;
  }
}

export class Revolutionary {
  kick(): number {
    return 20;
  }

  punch(): number {
    return Math.random() * this.kick() + this.kick();
  }
}

export class RevolutionaryAdapter implements Character {
  ATTACK_BASE = 0;
  private revolutionary: Revolutionary;

  constructor(revolutionary: Revolutionary) {
    this.revolutionary = revolutionary;
  }

  attack(): number {
    return (
      this.revolutionary.punch() + this.revolutionary.kick() + this.ATTACK_BASE
    );
  }
}
@Component({
  selector: 'adapter',
  templateUrl: './adapter.html',
})
export class AdapterComponent implements OnInit {
  war = new War();
  totalAttack?: number;

  ngOnInit(): void {
    this.totalAttack = 0;
  }

  starWar(): void {
    const luffy = new Pirate();
    const coby = new Marine();
    const sabo = new RevolutionaryAdapter(new Revolutionary());
    this.war.addCharacter(luffy);
    this.war.addCharacter(coby);
    this.war.addCharacter(sabo);

    this.totalAttack = this.war.attack();
  }

  // console.log(war.attack());
}
