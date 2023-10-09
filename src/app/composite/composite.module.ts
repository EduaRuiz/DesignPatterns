import { NgModule } from '@angular/core';
import { CompositeComponent } from './composite';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompositeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CompositeComponent }]),
  ],
  exports: [CompositeComponent],
  providers: [],
  bootstrap: [],
})
export class CompositeModule {}
