import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  import { RegistrationComponent } from './registration/registration.component';
  import { ProfileFormComponent } from './profile-form/profile-form.component';
  import { AddressFormComponent } from './address-form/address-form.component';
const routes: Routes = [
                           { path: 'register', component: RegistrationComponent, children: [
                               { path: 'profile', component: ProfileFormComponent },
                               { path: 'address', component: AddressFormComponent },
                               { path: '', redirectTo: 'profile', pathMatch: 'full' }
                             ]
                           },
                           { path: '', redirectTo: '/register', pathMatch: 'full' },
                           { path: '**', redirectTo: '/register' }
                         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
