import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-contact' 
  // No longer needed because it is referenced by the router now? I what
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  formData: { // typescript
    name: string,
    email: string
  } = {
      name: 'Wiggity', // default values
      email: 'Woo'
    };

  nameValid: boolean = false;
  emailValid: boolean = false;

  nameErrors: string[] = []
  emailErrors: string[] = []

  constructor() { }

  validateName() {
    this.nameErrors.length = 0;
    console.log('name fire')
    // validate existence
    if (!this.formData.name) {
      this.nameErrors.push('No Name Given');
      this.nameValid = false;
    }
    // validate length to be at least 3
    else if (this.formData.name.length < 3) {
      this.nameErrors.push('Name needs to be longer')
      this.nameValid = false;
    }
    else { this.nameValid = true; }
  }

  validateEmail() {
    this.emailErrors.length = 0;
    console.log('email fire')
    if (!this.formData.email) {
      this.emailErrors.push('No Email Given');
      this.emailValid = false;
    }
    else if (this.formData.email.length < 3) {
      this.emailErrors.push('Email needs to be longer');
      this.emailValid = false;
    }
    // validate inclusion of @ symbol
    else if (!this.formData.email.includes('@')) {
      this.emailErrors.push('Malformed Email');
      this.emailValid = false;
    }
    else { this.emailValid = true; }
  }

  getNameErrors() {
    return this.nameErrors.join(', ');
  }

  getEmailErrors() {
    return this.emailErrors.join(', ');
  }

  submitDisabled() {
    console.log('fire disabled')
    return !(this.nameValid && this.emailValid);
  }

  submitForm(event, someValue) {
    console.log('clicked', event, someValue)
    console.log(this.formData); // logs the object itself
  }
}