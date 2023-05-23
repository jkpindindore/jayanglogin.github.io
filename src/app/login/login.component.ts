import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
   // console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/posts")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.fname === this.login.value.fname && a.password === this.login.value.password
      });

      if(user){
        console.log(user);
        alert('you are successfully login');
        this.login.reset();
        $('.form-box').css('display','none');
        this._route.navigate(['dashboard']);
      }else{
        alert('User Not Found');
        this._route.navigate(['login']);
      }

    }, err=>{
      alert('enter correct user name');
    })
   

  }

  sbtn1(){
    
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }

  sbtn2(){
    this._route.navigate(['signup']);
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }

}
