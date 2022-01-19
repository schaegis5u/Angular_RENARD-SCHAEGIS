import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
<<<<<<< Updated upstream
import { ToDoListComponent } from './shared/component/to-do-list/to-do-list.component';
import { ToDoComponent } from './to-do/to-do.component';
=======
import { DisplayListComponent } from './shared/component/display-list/display-list.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from './shared/shared.module';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    ToDoListComponent,
    ToDoComponent,
=======
    DisplayListComponent,
    DisplayComponent,

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
<<<<<<< Updated upstream
=======
    SharedModule,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
