import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm : FormGroup;
  submitted =false;
  Success  =false;

  constructor(private formBuilder : FormBuilder,  private toastr : ToastrService) { 

  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit()
  {
    this.submitted = true;
    

    if(this.messageForm.invalid)
    {
      return;
    }
    else if(this.messageForm.valid){
      this.toastr.success('test');
    }
  this.Success = true ;
  console.warn(this.messageForm)
  }
}
