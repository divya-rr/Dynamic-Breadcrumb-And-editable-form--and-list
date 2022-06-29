import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  
  {
    path:"",

  component:UsersComponent, data: {
    breadCrum: "Users"
  },

  children:[{path:":id/:name",component:UserComponent,
  data: {
    breadCrum: "id/name"
  }}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
