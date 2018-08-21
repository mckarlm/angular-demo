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

  constructor() { }

  submitForm(event, someValue) {
    console.log('clicked', event, someValue)
    console.log(this.formData); // logs the object itself
  }
}