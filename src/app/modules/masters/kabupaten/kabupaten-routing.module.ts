import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KabupatenListComponent } from './pages/kabupaten-list/kabupaten-list.component';
import { KabupatenAddComponent } from './pages/kabupaten-add/kabupaten-add.component';
import { adminGuard } from '../../../guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: KabupatenListComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'add',
    component: KabupatenAddComponent,
    canActivate: [adminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KabupatenRoutingModule { }
