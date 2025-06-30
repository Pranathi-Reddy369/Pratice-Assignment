import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExampleService } from '../example.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  imports: [FormsModule,CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit{
  response: any[] = [];
  detailsForm: any = {
    name: '',
    price: 0
  };

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.exampleService.getDetails().subscribe((data: any[]) => {
      this.response = data;
      console.log('Component Data:', this.response);
    });
  }

  // add(): void {
  //   if (this.detailsForm.name && this.detailsForm.price) {
  //     this.exampleService.addDetails(this.detailsForm).subscribe(() => {
  //       this.getData();
  //       this.reset();
  //     });
  //   }
  // }
  add(){
    if (this.detailsForm.id){
      this.exampleService.editDetails(this.detailsForm.id,this.detailsForm).subscribe((updatedTask)=>{
        const index= this.response.findIndex((t)=>t.id===updatedTask.id);
        if (index !==-1){
          this.response[index]=updatedTask;
          this.reset();
        }
      })
    }
    else{
    const { id, ...productWithoutId } = this.detailsForm; // Remove id
    this.exampleService.addDetails(productWithoutId).subscribe((newTask) => {
      this.response.push(newTask);
      this.reset();

  });
  }}
  

  edit(item: any): void {

    console.log('Editing:', item);
    this.detailsForm = { ...item };
  }

  delete(item: any): void {
    this.exampleService.deleteDetails(item.id).subscribe(()=>{
      this.response=this.response.filter(p=> p.id !=item.id)
    })
    console.log('Deleting:', item);
  }

  reset(): void {
    this.detailsForm = {
      name: '',
      price: 0
    };
  }
}

