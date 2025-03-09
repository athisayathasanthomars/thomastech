import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contactus-page',
  imports: [ReactiveFormsModule],
  templateUrl: './contactus-page.component.html',
  styleUrl: './contactus-page.component.scss'
})
export class ContactusPageComponent {
  customer=new FormGroup({
    firstname:new FormControl(""),
    lastname:new FormControl(""),
    email:new FormControl(""),
    phoneno:new FormControl(""),
    message:new FormControl("")

  });
  
  submittedfname = '';
  submittedlname = '';
  submittedemail = '';
  submittedphoneno = '';
  submittedmessage = '';
  GetDetails(){
    this.submittedfname=this.customer.value.firstname ?? "";
    this.submittedlname=this.customer.value.lastname ?? "";
    this.submittedemail=this.customer.value.email ?? "";
    this.submittedphoneno=this.customer.value.phoneno ?? "";
    this.submittedmessage=this.customer.value.message ?? "";
    console.log(this.submittedfname);
    console.log(this.submittedlname);
    this.customer.reset();
  }
}
