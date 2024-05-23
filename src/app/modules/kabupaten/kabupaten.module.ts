import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KabupatenRoutingModule } from './kabupaten-routing.module';
import { KabupatenListComponent } from './pages/kabupaten-list/kabupaten-list.component';
import { KabupatenAddComponent } from './pages/kabupaten-add/kabupaten-add.component';
import { KabupatenEditComponent } from './pages/kabupaten-edit/kabupaten-edit.component';


@NgModule({
  declarations: [
    KabupatenListComponent,
    KabupatenAddComponent,
    KabupatenEditComponent
  ],
  imports: [
    CommonModule,
    KabupatenRoutingModule
  ]
})
export class KabupatenModule { }
