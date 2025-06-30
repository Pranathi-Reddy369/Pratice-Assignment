import { Component } from '@angular/core';
import { Teacher } from '../../../products.model';
import { TeacherService } from '../teacher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [FormsModule,CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
     response: any[] = [];
        detailsForm: Teacher = {
          name: '',
          subject:''
        };
      
        constructor(private teacherService:TeacherService) {}
      
        ngOnInit(): void {
          this.getData();
        }
      
        getData(): void {
          this.teacherService.getDetails().subscribe((data: any[]) => {
            this.response = data;
            console.log('Component Data:', this.response);
          });
        }
    
        add(){
          if (this.detailsForm.id){
            this.teacherService.editDetails(this.detailsForm.id,this.detailsForm).subscribe((updatedTask)=>{
              const index= this.response.findIndex((t)=>t.id===updatedTask.id);
              if (index !==-1){
                this.response[index]=updatedTask;
                this.reset();
              }
            })
          }
          else{
          const { id, ...productWithoutId } = this.detailsForm; // Remove id
          this.teacherService.addDetails(productWithoutId).subscribe((newTask) => {
            this.response.push(newTask);
            this.reset();
      
        });
        }}
        
      
        edit(item: any): void {
      
          console.log('Editing:', item);
          this.detailsForm = { ...item };
        }
      
        delete(item: any): void {
          this.teacherService.deleteDetails(item.id).subscribe(()=>{
            this.response=this.response.filter(p=> p.id !=item.id)
          })
          console.log('Deleting:', item);
        }
      
        reset(): void {
          this.detailsForm = {
            name: '',
            subject: ''
          };
        }
    
}
