import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly router: Router) {}
  title = 'DesignPatterns';

  creationalPatterns = [
    { name: 'Factory Method', route: '/factory-method' },
    { name: 'Abstract Factory', route: '/abstract-factory' },
    { name: 'Builder', route: '/builder' },
    { name: 'Prototype', route: '/prototype' },
    { name: 'Singleton', route: '/singleton' },
  ];

  structuralPatterns = [
    { name: 'Adapter', route: '/adapter' },
    { name: 'Bridge', route: '/bridge' },
    // ...otros patrones estructurales
  ];

  behavioralPatterns = [
    { name: 'Chain of Responsibility', route: '/chain-of-responsibility' },
    { name: 'Command', route: '/command' },
    // ...otros patrones de comportamiento
  ];

  navigateToPattern(route: string): void {
    this.router.navigate([route]);
  }
}
