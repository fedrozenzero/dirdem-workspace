import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseBitRoutingModule } from './fuse-bit-routing.module';
import { FuseBitComponent } from './components/fuse-bit/fuse-bit.component';
import { MaterialModule } from 'libraries/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElectronService } from 'ngx-electron';
import { DirdemCommonModule } from 'dirdem-common';


@NgModule({
  declarations: [
    FuseBitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FuseBitRoutingModule,
    MaterialModule,
    DirdemCommonModule
  ],
  exports: [
    FuseBitComponent
  ],
  providers: [
    ElectronService
  ]
})
export class FuseBitModule { }
