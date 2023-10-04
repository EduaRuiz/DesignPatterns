import { NgModule } from '@angular/core';
import { AdapterComponent } from './adapter';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdapterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdapterComponent }]),
  ],
  exports: [AdapterComponent],
  providers: [],
  bootstrap: [],
})
export class AdapterModule {}
