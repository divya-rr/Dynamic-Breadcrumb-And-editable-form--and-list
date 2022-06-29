import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChildComponent } from '../child/child.component';
import { GrandChildComponent } from '../grand-child/grand-child.component';


@NgModule({
  declarations: [
    HomeComponent,ChildComponent,GrandChildComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
