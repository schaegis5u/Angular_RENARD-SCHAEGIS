import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http } from './services/http/http';
import { PromiseRequest } from './services/promise/promise-request';
import { FormComponent } from '../form/form.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ScrollingModule,
  ],
  providers: [
    Http,
    PromiseRequest,
    HttpClient,
  ],
})
export class SharedModule { }
