import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirdemInputDirective } from './directives/dirdem-input.directive';



@NgModule({
  declarations: [
    DirdemInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirdemInputDirective
  ]
})
export class DirdemCommonModule { }
