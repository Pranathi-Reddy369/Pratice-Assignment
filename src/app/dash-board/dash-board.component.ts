import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
  constructor(private route:ActivatedRoute){
    console.log(route.snapshot.paramMap.get('data'));
  }
  user:any={
    firstName:'',
    lastName:'',
    email:'',
    number:''

  }
  onSubmit(form:any){
    console.log(this.user);
    console.log(form);
  }
  ngOnInit(){
    console.log("dashboard is called")
  }


}
