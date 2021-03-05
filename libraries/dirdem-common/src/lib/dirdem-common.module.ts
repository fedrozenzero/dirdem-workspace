import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirdemInputDirective } from './directives/dirdem-input.directive';
import { LoaderService } from './services/loader.service';
import { MicroService } from './services/micro.service';


@NgModule({
  declarations: [
    DirdemInputDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DirdemInputDirective
  ],
  providers: [
    LoaderService,
    MicroService
  ]
})
export class DirdemCommonModule { }
