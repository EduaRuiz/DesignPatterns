import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'factory-method',
    loadChildren: () =>
      import('./Creational-Patterns/factory-method/factory-method.module').then(
        (m) => m.FactoryMethodModule
      ),
  },
  {
    path: 'abstract-factory',
    loadChildren: () =>
      import(
        './Creational-Patterns/abstract-factory/abstract-factory.module'
      ).then((m) => m.AbstractFactoryModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./Creational-Patterns/builder/builder.module').then(
        (m) => m.BuilderModule
      ),
  },
  {
    path: 'prototype',
    loadChildren: () =>
      import('./Creational-Patterns/prototype/prototype.module').then(
        (m) => m.PrototypeModule
      ),
  },
  {
    path: 'singleton',
    loadChildren: () =>
      import('./Creational-Patterns/singleton/singleton.module').then(
        (m) => m.SingletonModule
      ),
  },
  {
    path: 'adapter',
    loadChildren: () =>
      import('./Structural-Patterns/adapter/adapter.module').then(
        (m) => m.AdapterModule
      ),
  },
  {
    path: 'bridge',
    loadChildren: () =>
      import('./Structural-Patterns/bridge/bridge.module').then(
        (m) => m.BridgeModule
      ),
  },
  {
    path: 'composite',
    loadChildren: () =>
      import('./Structural-Patterns/composite/composite.module').then(
        (m) => m.CompositeModule
      ),
  },
  {
    path: 'decorator',
    loadChildren: () =>
      import('./Structural-Patterns/decorator/decorator.module').then(
        (m) => m.DecoratorModule
      ),
  },
  {
    path: 'facade',
    loadChildren: () =>
      import('./Structural-Patterns/facade/facade.module').then(
        (m) => m.FacadeModule
      ),
  },
  {
    path: 'flyweight',
    loadChildren: () =>
      import('./Structural-Patterns/flyweight/flyweight.module').then(
        (m) => m.FlyweightModule
      ),
  },
  {
    path: 'proxy',
    loadChildren: () =>
      import('./Structural-Patterns/proxy/proxy.module').then(
        (m) => m.ProxyModule
      ),
  },
  {
    path: 'chain-of-responsibility',
    loadChildren: () =>
      import(
        './Behavioral-Patterns/chain-of-responsibility/chain-of-responsibility.module'
      ).then((m) => m.ChainOfResponsibilityModule),
  },
  {
    path: 'command',
    loadChildren: () =>
      import('./Behavioral-Patterns/command/command.module').then(
        (m) => m.CommandModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
