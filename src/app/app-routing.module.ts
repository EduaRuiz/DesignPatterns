import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'factory-method',
    loadChildren: () =>
      import('./factory-method/factory-method.module').then(
        (m) => m.FactoryMethodModule
      ),
  },
  {
    path: 'abstract-factory',
    loadChildren: () =>
      import('./abstract-factory/abstract-factory.module').then(
        (m) => m.AbstractFactoryModule
      ),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'prototype',
    loadChildren: () =>
      import('./prototype/prototype.module').then((m) => m.PrototypeModule),
  },
  {
    path: 'singleton',
    loadChildren: () =>
      import('./singleton/singleton.module').then((m) => m.SingletonModule),
  },
  {
    path: 'adapter',
    loadChildren: () =>
      import('./adapter/adapter.module').then((m) => m.AdapterModule),
  },
  {
    path: 'bridge',
    loadChildren: () =>
      import('./bridge/bridge.module').then((m) => m.BridgeModule),
  },
  {
    path: 'composite',
    loadChildren: () =>
      import('./composite/composite.module').then((m) => m.CompositeModule),
  },
  {
    path: 'decorator',
    loadChildren: () =>
      import('./decorator/decorator.module').then((m) => m.DecoratorModule),
  },
  {
    path: 'facade',
    loadChildren: () =>
      import('./facade/facade.module').then((m) => m.FacadeModule),
  },
  {
    path: 'flyweight',
    loadChildren: () =>
      import('./flyweight/flyweight.module').then((m) => m.FlyweightModule),
  },
  {
    path: 'proxy',
    loadChildren: () =>
      import('./proxy/proxy.module').then((m) => m.ProxyModule),
  },
  {
    path: 'chain-of-responsibility',
    loadChildren: () =>
      import('./chain-of-responsibility/chain-of-responsibility.module').then(
        (m) => m.ChainOfResponsibilityModule
      ),
  },
  {
    path: 'command',
    loadChildren: () =>
      import('./command/command.module').then((m) => m.CommandModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
