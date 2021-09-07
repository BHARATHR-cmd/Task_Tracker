import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ButtonComponent } from './Components/button/button.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TasksItemComponent } from './Components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
