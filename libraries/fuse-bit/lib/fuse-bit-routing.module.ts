import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuseBitCardComponent } from './components/fuse-bit-card/fuse-bit-card.component';
import { FuseBitComponent } from './components/fuse-bit/fuse-bit.component';
import { FuseBitModuleRoutesPathEnum } from './shared/enums';

const routes: Routes = [
  {
    path: FuseBitModuleRoutesPathEnum.Default, component: FuseBitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuseBitRoutingModule { }
