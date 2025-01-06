import { Component, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from './User';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tdf',
  standalone: false,
  
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss'
})
export class TdfComponent {


  @ViewChild('registerForm',{static:true}) signUpForm : NgForm;
  userData = new user('','');
  onSubmit(registerForm:NgForm)
  {
    this.userData.username = this.signUpForm.value.username;
    this.userData.email = this.signUpForm.value.email;
    console.log(registerForm);

    this.signUpForm.reset();
  }
}
