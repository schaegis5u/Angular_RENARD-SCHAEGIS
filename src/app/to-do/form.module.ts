import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Http } from '../shared/services/http/http';
import { PromiseRequest } from '../shared/services/promise/promise-request';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    Http,
    PromiseRequest,
    HttpClient,
  ],
})
export class FormModule { }
