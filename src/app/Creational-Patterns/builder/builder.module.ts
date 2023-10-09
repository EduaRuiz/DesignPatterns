import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BuilderComponent } from './builder';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuilderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BuilderComponent }]),
    FormsModule,
  ],
  exports: [BuilderComponent],
  providers: [],
  bootstrap: [],
})
export class BuilderModule {}
