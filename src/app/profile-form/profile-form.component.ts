import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  @Input() registrationForm!: FormGroup; // Bind the parent form group
}
