import { Component } from '@angular/core';
class OnePieceCharacter {
  constructor(private name: string) {}

  performNormalAttack(): string {
    return `${this.name} realiza un ataque normal.`;
  }

  performSpecialAttack(): string {
    return `${this.name} realiza un ataque especial.`;
  }
}

interface Command {
  execute(): string;
}

class NormalAttackCommand implements Command {
  constructor(private character: OnePieceCharacter) {}

  execute(): string {
    return this.character.performNormalAttack();
  }
}

class SpecialAttackCommand implements Command {
  constructor(private character: OnePieceCharacter) {}

  execute(): string {
    return this.character.performSpecialAttack();
  }
}

class CommandInvoker {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): string {
    if (this.command) {
      return this.command.execute();
    } else {
      return 'Ningún comando asignado.';
    }
  }
}
@Component({
  selector: 'app-command-form',
  templateUrl: './command.html',
})
export class CommandComponent {
  private luffy: OnePieceCharacter = new OnePieceCharacter('Monkey D. Luffy');
  private invoker: CommandInvoker = new CommandInvoker();
  battleResult: string = '';

  performNormalAttack(): void {
    const normalAttackCommand: Command = new NormalAttackCommand(this.luffy);
    this.invoker.setCommand(normalAttackCommand);
    this.battleResult = this.invoker.executeCommand();
  }

  performSpecialAttack(): void {
    const specialAttackCommand: Command = new SpecialAttackCommand(this.luffy);
    this.invoker.setCommand(specialAttackCommand);
    this.battleResult = this.invoker.executeCommand();
  }
}
