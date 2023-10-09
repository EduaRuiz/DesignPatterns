import { NgModule } from '@angular/core';
import { FlyweightComponent } from './flyweight';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FlyweightComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FlyweightComponent }]),
  ],
  exports: [FlyweightComponent],
  providers: [],
  bootstrap: [],
})
export class FlyweightModule {}
