import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { GrandChildComponent } from '../grand-child/grand-child.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, data: {
      breadCrum: "Home"
    },
    children: [{
      path: "child",
      component: ChildComponent,
      data: {
        breadCrum: "Child"
      },
      children: [
        {
          path: "grand-child",
          component: GrandChildComponent,
          data: {
            breadCrum: "Grand-Child"
          }
        }]
    }]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
