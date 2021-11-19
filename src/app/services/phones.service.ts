import { Injectable } from '@angular/core';
import { Phone } from '../types/Phone';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  // We use the custom created type exactly as an inbuilt one
  private phones: Phone[] = [];

  constructor() { }

  getPhonesList(){
    return this.phones
  }

  addPhone(phoneData: Phone){
    this.phones.push(phoneData)
  }
}
