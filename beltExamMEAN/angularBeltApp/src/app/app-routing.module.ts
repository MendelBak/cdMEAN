import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginRegComponent } from './login-reg/login-reg.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginRegComponent,
    children: []
  },
  {
    path: 'main',
    pathMatch: 'full',
    component: MainComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
