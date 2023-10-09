import { NgModule } from '@angular/core';
import { SingletonComponent } from './singleton';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SingletonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SingletonComponent }]),
  ],
  exports: [SingletonComponent],
  providers: [],
  bootstrap: [],
})
export class SingletonModule {}
