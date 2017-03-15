import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'}, 
  {path:'login',component:LoginComponent}
];

export const router: ModuleWithProviders = RouterModule.forRoot(appRoutes);
