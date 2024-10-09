import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      profile: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: ['']
      })
    });
  }

  ngOnInit(): void {}

  navigateTo(tab: string): void {
    this.router.navigate(['register', tab]);
  }

  submit(): void {
    console.log('Submitting registration:', this.registrationForm.value);
    // Here you would typically call a service to submit the data
  }
}
