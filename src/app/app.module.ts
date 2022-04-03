import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ComposerComponent } from './todo/composer/composer.component';
import { ListComponent } from './todo/list/list.component';
import { ActionComponent } from './todo/action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ComposerComponent,
    ListComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
