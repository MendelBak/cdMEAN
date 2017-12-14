import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'create',
    pathMatch: 'full',
    component: ProductCreateComponent,
  },
  {
    path: 'display',
    pathMatch: 'full',
    component: ProductDisplayComponent,
  },
  {
    path: 'edit/:index',
    pathMatch: 'full',
    component: ProductEditComponent,
  },
  {
    path: 'destroy/:index',
    pathMatch: 'full',
    component: ProductDisplayComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
