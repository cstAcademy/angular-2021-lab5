import { Injectable } from '@angular/core';
import { Phone } from '../types/Phone';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  private phones: Phone[] = [];

  constructor() { }

  getPhonesList(){
    return this.phones
  }

  addPhone(phoneData: Phone){
    this.phones.push(phoneData)
  }
}
