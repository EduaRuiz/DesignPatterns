import { Component, OnInit } from '@angular/core';

export class PirataService {
  private static instance: PirataService | null = null;

  private constructor() {}

  public static getInstance(): PirataService {
    if (!PirataService.instance) {
      PirataService.instance = new PirataService();
      console.log('¡Gol D. Roger ha sido llamado como el Rey de los Piratas!');
    }
    return PirataService.instance;
  }

  public mostrarMensaje(): string {
    console.log('Soy el Rey de los Piratas, Gol D. Roger.');
    return 'Soy el Rey de los Piratas, Gol D. Roger.';
  }
}

@Component({
  selector: 'singleton',
  templateUrl: './singleton.html',
})
export class SingletonComponent {
  private reyDeLosPiratas: PirataService;
  message?: string;

  constructor() {
    this.reyDeLosPiratas = PirataService.getInstance();
  }

  mostrarMensaje(): void {
    this.message = this.reyDeLosPiratas.mostrarMensaje();
  }
}
