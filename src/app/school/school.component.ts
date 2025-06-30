import { Component } from '@angular/core';
import { School } from '../../../products.model';
import { SchoolService } from '../school.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-school',
  imports: [CommonModule,FormsModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {
  response: any[] = [];
          detailsForm: School = {
            name: '',
            strength:0
          };
        
          constructor(private schoolService:SchoolService) {}
        
          ngOnInit(): void {
            this.getData();
          }
        
          getData(): void {
            this.schoolService.getDetails().subscribe((data: any[]) => {
              this.response = data;
              console.log('Component Data:', this.response);
            });
          }
      
          add(){
            if (this.detailsForm.id){
              this.schoolService.editDetails(this.detailsForm.id,this.detailsForm).subscribe((updatedTask)=>{
                const index= this.response.findIndex((t)=>t.id===updatedTask.id);
                if (index !==-1){
                  this.response[index]=updatedTask;
                  this.reset();
                }
              })
            }
            else{
            const { id, ...productWithoutId } = this.detailsForm; // Remove id
            this.schoolService.addDetails(productWithoutId).subscribe((newTask) => {
              this.response.push(newTask);
              this.reset();
        
          });
          }}
          
        
          edit(item: any): void {
        
            console.log('Editing:', item);
            this.detailsForm = { ...item };
          }
        
          delete(item: any): void {
            this.schoolService.deleteDetails(item.id).subscribe(()=>{
              this.response=this.response.filter(p=> p.id !=item.id)
            })
            console.log('Deleting:', item);
          }
        
          reset(): void {
            this.detailsForm = {
              name: '',
              strength:0
            };
          }

}
