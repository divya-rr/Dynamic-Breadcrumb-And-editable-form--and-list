import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
 



  { path: "add", component: AddComponent },
  { path: 'form', component: FormComponent },

  { path: "user/list", component: ListComponent },
  { path: "user/edit/:id", component: FormComponent },
  {path:"users",loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
  {path:"",loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
