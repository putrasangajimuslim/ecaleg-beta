import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KabupatenListComponent } from './pages/kabupaten-list/kabupaten-list.component';
import { KabupatenAddComponent } from './pages/kabupaten-add/kabupaten-add.component';

const routes: Routes = [
  {
    path: '',
    component: KabupatenListComponent,
  },
  {
    path: 'add',
    component: KabupatenAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KabupatenRoutingModule { }
