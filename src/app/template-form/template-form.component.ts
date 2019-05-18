import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../common/customer';
import { User } from '../common/user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  customer: Customer = new Customer();
  user: User = new User();

  constructor() { }


  ngOnInit() {

  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    customerForm.resetForm();
  }
}