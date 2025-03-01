import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  @Input()
  public user: any = {};

  @Output()
  public formSubmit = new EventEmitter<FormGroup>();

  public userForm : FormGroup;


  constructor(private readonly fb: FormBuilder) {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      last_name: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['',[Validators.required, Validators.email]],
      image: ['',[Validators.required, Validators.pattern('https?://.+')]]
    });
  }
  ngOnInit() {
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }

  onSubmit(): void{
    if(this.userForm.valid){
      this.formSubmit.emit(this.userForm);
    }
  }
}
