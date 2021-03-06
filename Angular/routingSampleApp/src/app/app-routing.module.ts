import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { HomeTasksComponent } from './home-tasks/home-tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepublicComponent } from './home/homepublic/homepublic.component';
import { HomeprivateComponent } from './home/homeprivate/homeprivate.component';

const routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent,
    children: [
    ]
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    children: [
      { path: 'public', component: HomepublicComponent },
      { path: 'private', component: HomeprivateComponent}
    ]
  },
  {
    path: 'home-tasks/:id',
    pathMatch: 'full',
    component: HomeTasksComponent,
    children: []
  },
  {
    path: '**',
    redirectTo: LandingComponent
    // component: PageNotFoundComponent,
    // children: []
  }
];
// export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
