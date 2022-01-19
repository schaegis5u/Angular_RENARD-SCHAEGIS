import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< Updated upstream
import { DisplayListComponent } from './component/display-list/display-list.component';
=======
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Http } from './services/http/http';
import { PromiseRequest } from './services/promise/promise-request';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
>>>>>>> Stashed changes



@NgModule({
  declarations: [
<<<<<<< Updated upstream
    DisplayListComponent
  ],
  imports: [
    CommonModule
  ]
=======
    FormComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,

  ],
  providers: [
    Http,
    PromiseRequest,
    HttpClient,
  ],
>>>>>>> Stashed changes
})
export class SharedModule { }
