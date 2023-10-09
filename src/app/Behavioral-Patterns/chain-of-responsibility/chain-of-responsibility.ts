import { Component } from '@angular/core';

interface MarineHandler {
  setNextHandler(handler: MarineHandler): MarineHandler;
  handleRequest(rank: string): number | null;
}

abstract class BaseMarineHandler implements MarineHandler {
  private nextHandler: MarineHandler | null = null;

  setNextHandler(handler: MarineHandler): MarineHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(rank: string): number | null {
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(rank);
    }
    return null;
  }
}

class CadetHandler extends BaseMarineHandler {
  override handleRequest(rank: string): number | null {
    if (rank === 'Cadet') {
      return 10000;
    }
    return super.handleRequest(rank);
  }
}

class SergeantHandler extends BaseMarineHandler {
  override handleRequest(rank: string): number | null {
    if (rank === 'Sergeant') {
      return 50000;
    }
    return super.handleRequest(rank);
  }
}

class CommanderHandler extends BaseMarineHandler {
  override handleRequest(rank: string): number | null {
    if (rank === 'Commander') {
      return 100000;
    }
    return super.handleRequest(rank);
  }
}

class AdmiralHandler extends BaseMarineHandler {
  override handleRequest(rank: string): number | null {
    if (rank === 'Admiral') {
      return 1000000;
    }
    return super.handleRequest(rank);
  }
}

@Component({
  selector: 'app-chain-of-responsibility',
  templateUrl: './chain-of-responsibility.html',
})
export class ChainOfResponsibilityModuleComponent {
  marineRank: string = '';
  bounty: number | null = null;
  private chainOfCommand: MarineHandler;

  constructor() {
    this.chainOfCommand = new CadetHandler()
      .setNextHandler(new SergeantHandler())
      .setNextHandler(new CommanderHandler())
      .setNextHandler(new AdmiralHandler());
  }

  calculateBounty(): void {
    this.bounty = this.chainOfCommand.handleRequest(this.marineRank);
  }
}
