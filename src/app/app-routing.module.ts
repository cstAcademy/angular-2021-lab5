import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhoneComponent } from './components/add-phone/add-phone.component';
import { PhoneListComponent } from './components/phone-list/phone-list.component';

const routes: Routes = [
  { path: '', component: AddPhoneComponent },
  { path: 'list', component: PhoneListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
