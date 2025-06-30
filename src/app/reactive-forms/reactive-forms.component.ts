import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactForm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.reactForm=formBuilder.group({
      username:['',Validators.maxLength(5)],
      email:['',Validators.required],
      age:['',[Validators.max(18),Validators.required]]
  })
  }
  onSubmit(){
    console.log(this.reactForm);
    console.log(this.reactForm.value)
  }
  onReset(){
    this.reactForm.reset();
  }

}
