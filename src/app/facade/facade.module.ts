import { NgModule } from '@angular/core';
import { FacadeComponent } from './facade';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FacadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FacadeComponent }]),
  ],
  exports: [FacadeComponent],
  providers: [],
  bootstrap: [],
})
export class FacadeModule {}
