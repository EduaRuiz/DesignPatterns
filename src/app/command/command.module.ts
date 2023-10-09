import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommandComponent } from './command';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CommandComponent }]),
    FormsModule,
  ],
  exports: [CommandComponent],
  providers: [],
  bootstrap: [],
})
export class CommandModule {}
