import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app.layout.component';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'master',
        loadChildren: () => import('./modules/masters/masters.module').then(r => r.MastersModule)
      }
    ]
  },
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
