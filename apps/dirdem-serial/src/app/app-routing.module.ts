import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirdemWorkspaceRoutesPathEnum } from './shared/enums';


const routes: Routes = [
  /*{
    path: DirdemWorkspaceRoutesPathEnum.Main,
    loadChildren: () => import('libraries/fuse-bit/src/public-api').then(m => m.FuseBitModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
