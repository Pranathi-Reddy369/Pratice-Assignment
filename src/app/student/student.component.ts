import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../../products.model';

@Component({
  selector: 'app-student',
  imports: [FormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  response: any[] = [];
    detailsForm: Student = {
      id:undefined,
  firstname: '',
  lastname: '',
  email: '',
  age: 0,
  gender: '',
  dob: '',
  phone: '',
  address: '',
  country: '',
  username: '',
  password: ''
};
  
    constructor(private studentService:StudentService) {}
  
    ngOnInit(): void {
      this.getData();
    }
  
    getData(): void {
      this.studentService.getDetails().subscribe((data: any[]) => {
        this.response = data;
        console.log('Component Data:', this.response);
      });
    }

    add(form :NgForm){
      console.log("Form submitted", form.value)
      if (this.detailsForm.id){
        this.studentService.editDetails(this.detailsForm.id,this.detailsForm).subscribe((updatedTask)=>{
          const index= this.response.findIndex((t)=>t.id===updatedTask.id);
          if (index !==-1){
            this.response[index]=updatedTask;
            form.reset();
          }
        })
      }
      else{
      const { id, ...productWithoutId } = this.detailsForm; // Remove id
      this.studentService.addDetails(productWithoutId).subscribe((newTask) => {
        this.response.push(newTask);
        console.log("Form submitted", form.value);

        form.reset();
  
    });
    }}
    
  
    edit(item: Student): void {
  
      console.log('Editing:', item);
      this.detailsForm = { ...item };
    }
  
    delete(item: any): void {
      this.studentService.deleteDetails(item.id).subscribe(()=>{
        this.response=this.response.filter(p=> p.id !=item.id)
      })
      console.log('Deleting:', item);
    }
  
    reset(): void {
      this.detailsForm = {
        id:undefined,
  firstname: '',
  lastname: '',
  email: '',
  age: 0,
  gender: '',
  dob: '',
  phone: '',
  address: '',
  country: '',
  username: '',
  password: ''
};
    }

}
