import { NgModule } from '@angular/core';
import { ChainOfResponsibilityModuleComponent } from './chain-of-responsibility';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChainOfResponsibilityModuleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ChainOfResponsibilityModuleComponent },
    ]),
  ],
  exports: [ChainOfResponsibilityModuleComponent],
  providers: [],
  bootstrap: [],
})
export class ChainOfResponsibilityModule {}
