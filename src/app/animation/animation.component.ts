import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  imports: [],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations:[
    trigger('toggle',[
      state('open',style({backgroundColor:'yellow'})),
      state('closed',style({backgroundColor:'red'})),
      transition('open <=> closed',animate('900ms ease-in-out'))
    ]),
    trigger('fade',[
      state('in',style({transform:'scale(0)'})),
      state('out',style({transform:'scale(1)'})),
      transition('in <=> out',animate('200ms ease-in-out'))
    ]),
    trigger('ghw',[
      state('g',style({width:'100px',height :'100px'})),
      state('dg',style({width:'50px',height :'50px'})),
      transition('g <=> dg',animate('200ms ease-in-out'))
    ]),
    trigger('rotate',[
      state('r1', style({transform:'rotate(0deg)'})),
      state('r2', style({transform:'rotate(180deg)'})),
      transition('r1 <=> r2' ,animate('200ms ease-in-out'))
    ])
  ] 
})
export class AnimationComponent {
  isToggle:boolean=false;
  toggle(){
    this.isToggle=!this.isToggle;
  }

}
