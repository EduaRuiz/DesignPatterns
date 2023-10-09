import { NgModule } from '@angular/core';
import { FactoryMethodComponent } from './factory-method';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FactoryMethodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FactoryMethodComponent }]),
  ],
  exports: [FactoryMethodComponent],
  providers: [],
  bootstrap: [],
})
export class FactoryMethodModule {}
