import { NgModule } from '@angular/core';
import { PrototypeComponent } from './prototype';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrototypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PrototypeComponent }]),
  ],
  exports: [PrototypeComponent],
  providers: [],
  bootstrap: [],
})
export class PrototypeModule {}
