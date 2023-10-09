import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BridgeComponent } from './bridge';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BridgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BridgeComponent }]),
    FormsModule,
  ],
  exports: [BridgeComponent],
  providers: [],
  bootstrap: [],
})
export class BridgeModule {}
