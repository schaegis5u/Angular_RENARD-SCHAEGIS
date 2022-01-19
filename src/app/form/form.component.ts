import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromiseRequest } from '../shared/services/promise/promise-request';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  Form!: FormGroup;
  public submitted = false;

  constructor(public promise: PromiseRequest, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      tache: ['', Validators.required],
    })
  }

  get f() { return this.Form.controls; }

  public onSubmit() : void{
    let tache = this.Form.controls['tache'].value
    let tabactuel = JSON.parse(localStorage.getItem("classifie") || '[]');
    tabactuel.push(tache);
    localStorage.setItem('classifie', JSON.stringify(tabactuel));
  }

  retour() : void {
    this.router.navigate(['/list/']);
  }

}
