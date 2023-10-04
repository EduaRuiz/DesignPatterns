import { NgModule } from '@angular/core';
import { AbstractFactoryComponent } from './abstract-factory';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AbstractFactoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AbstractFactoryComponent }]),
  ],
  exports: [AbstractFactoryComponent],
  providers: [],
  bootstrap: [],
})
export class AbstractFactoryModule {}
