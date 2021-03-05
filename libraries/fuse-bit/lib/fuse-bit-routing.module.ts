import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
