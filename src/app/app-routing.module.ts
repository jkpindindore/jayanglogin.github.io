import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  //{redirectTo:'', path:'login', pathMatch:'full'},
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SingupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
