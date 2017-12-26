import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginRegComponent,
    children: []
  },
  {
    path: 'logout',
    pathMatch: 'full',
    component: LoginRegComponent,
    children: []
  },
  {
    path: 'main',
    // pathMatch: 'full',
    component: MainComponent,
    children: []
  },
  {
    path: 'newQuestion',
    component: NewQuestionComponent,
    children: []
  },
  {
    path: 'showQuestion/',
    pathMatch: 'full',
    component: ShowQuestionComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
