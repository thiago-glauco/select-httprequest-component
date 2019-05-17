import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  customer = {
    firstName: "",
    lastName: "",
    email: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zip: "",
    addressType: "home",
    sendCatalog: false
  }

  constructor() { }


  ngOnInit() {

  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
  }

}