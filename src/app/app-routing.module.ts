import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app.layout.component';
import { AccessDeniedComponent } from './modules/access-denied/access-denied.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(r => r.DashboardModule)
      },
      {
        path: 'master',
        loadChildren: () => import('./modules/masters/masters.module').then(r => r.MastersModule)
      },
      {
        path: 'tps',
        loadChildren: () => import('./modules/tps/tps.module').then(r => r.TpsModule)
      }
    ]
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
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
