import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FormComponent,
    AddComponent,
    
    BreadcrumbComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,UsersModule,HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
