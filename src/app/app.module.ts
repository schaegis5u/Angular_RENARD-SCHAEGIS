import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DisplayListComponent } from './shared/component/display-list/display-list.component';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from './shared/shared.module';
import { Dipipe } from './shared/pipe/dipipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent,
    DisplayComponent,
    Dipipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
