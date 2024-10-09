import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
})
export class AddressFormComponent {
  @Input() registrationForm!: FormGroup; // Bind the parent form group
}
