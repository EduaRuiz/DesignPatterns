import { NgModule } from '@angular/core';
import { ProxyComponent } from './proxy';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProxyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProxyComponent }]),
  ],
  exports: [ProxyComponent],
  providers: [],
  bootstrap: [],
})
export class ProxyModule {}
