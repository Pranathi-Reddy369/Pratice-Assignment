import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Principal } from '../../../products.model';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
   response: any[] = [];
    detailsForm: Principal = {
      name: '',
      experience: 0,
    };
  
    constructor(private principalService:PrincipalService) {}
  
    ngOnInit(): void {
      this.getData();
    }
  
    getData(): void {
      this.principalService.getDetails().subscribe((data: any[]) => {
        this.response = data;
        console.log('Component Data:', this.response);
      });
    }

    add(){
      if (this.detailsForm.id){
        this.principalService.editDetails(this.detailsForm.id,this.detailsForm).subscribe((updatedTask)=>{
          const index= this.response.findIndex((t)=>t.id===updatedTask.id);
          if (index !==-1){
            this.response[index]=updatedTask;
            this.reset();
          }
        })
      }
      else{
      const { id, ...productWithoutId } = this.detailsForm; // Remove id
      this.principalService.addDetails(productWithoutId).subscribe((newTask) => {
        this.response.push(newTask);
        this.reset();
  
    });
    }}
    
  
    edit(item: any): void {
  
      console.log('Editing:', item);
      this.detailsForm = { ...item };
    }
  
    delete(item: any): void {
      this.principalService.deleteDetails(item.id).subscribe(()=>{
        this.response=this.response.filter(p=> p.id !=item.id)
      })
      console.log('Deleting:', item);
    }
  
    reset(): void {
      this.detailsForm = {
        name: '',
        experience: 0
      };
    }
}
