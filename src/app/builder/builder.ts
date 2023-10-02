export class Character {
  private _firstName: string = '';
  private _lastName: string = '';
  private _age: number = 0;
  private _gender: string = '';
  private _ability: string = '';

  constructor() {
    return this;
  }
  setFirstName(firstName: string): Character {
    this._firstName = firstName;
    return this;
  }

  setLastName(lastName: string): Character {
    this._lastName = lastName;
    return this;
  }

  setAge(age: number): Character {
    this._age = age;
    return this;
  }

  setGender(gender: string) {
    this._gender = gender;
    return this;
  }

  setAbility(ability: string) {
    this._ability = ability;
    return this;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get age(): number {
    return this._age;
  }

  get gender(): string {
    return this._gender;
  }

  get ability(): string {
    return this._ability;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-character-form',
  templateUrl: './builder.html',
})
export class BuilderComponent {
  firstName: string = '';
  lastName: string = '';
  age: number = 0;
  gender: string = '';
  ability: string = '';
  character: Character = new Character();
  characterCreated: boolean = false;

  submitForm(): void {
    this.character
      .setFirstName(this.firstName)
      .setLastName(this.lastName)
      .setAge(this.age)
      .setGender(this.gender)
      .setAbility(this.ability);
    this.characterCreated = true;
  }
}
