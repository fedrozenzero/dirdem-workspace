import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseBitRoutingModule } from './fuse-bit-routing.module';
import { FuseBitComponent } from './components/fuse-bit/fuse-bit.component';
import { FuseBitCardComponent } from './components/fuse-bit-card/fuse-bit-card.component';
import { MaterialModule } from 'libraries/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElectronService } from 'ngx-electron';


@NgModule({
  declarations: [
    FuseBitComponent,
    FuseBitCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FuseBitRoutingModule,
    MaterialModule
  ],
  exports: [
    FuseBitComponent,
    FuseBitCardComponent
  ],
  providers: [
    ElectronService
  ]
})
export class FuseBitModule { }
