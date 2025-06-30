import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { authGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { SchoolComponent } from './school/school.component';
import { PrincipalComponent } from './principal/principal.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { OverViewComponent } from './over-view/over-view.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home-1/home-1.component';
import { Home2Component } from './home/home-2/home-2.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { AnimationComponent } from './animation/animation.component';
export const routes: Routes = [
    {path : "", component : LoginComponent },
    // {path : "home", component: ProductsHomeComponent, canActivate: [authGuard]},
    // {path : "Add-product", component:AddProductComponent },
    {path:'students', component:StudentComponent},
    {path:'teachers', component:TeacherComponent},
    {path:'school' , component:SchoolComponent},
    {path:'principal', component:PrincipalComponent},
    // {path:'homee',component:HomeComponent,children:[
    //     {path:'home-1',component:Home1Component},
    //     {path:'home-2', component:Home2Component}
    // ]},
    // {
    //   path: 'dash-board/:data',
    //   loadComponent: () => import('./dash-board/dash-board.component').then(m => m.DashBoardComponent)
    // },
    // {path:'over-view',component:OverViewComponent},
    // {path:'pipes',component:PipesComponent},
    // {path:'',redirectTo:'home',pathMatch:'full'},
    // {path:'reactive-forms', component:ReactiveFormsComponent},
    // {path:'animations', component:AnimationComponent}
];