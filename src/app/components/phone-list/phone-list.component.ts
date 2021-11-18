import { Component, OnInit } from '@angular/core';
import { PhonesService } from 'src/app/services/phones.service';
import { Phone } from 'src/app/types/Phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss'],
})
export class PhoneListComponent implements OnInit {
  phones: Phone[] = [];

  constructor(private phonesService: PhonesService) {}

  ngOnInit(): void {
    this.phones = this.phonesService.getPhonesList();
    console.log(this.phones)
  }
}
