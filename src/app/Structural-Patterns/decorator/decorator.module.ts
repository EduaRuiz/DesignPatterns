import { NgModule } from '@angular/core';
import { DecoratorComponent } from './decorator';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DecoratorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DecoratorComponent }]),
  ],
  exports: [DecoratorComponent],
  providers: [],
  bootstrap: [],
})
export class DecoratorModule {}
