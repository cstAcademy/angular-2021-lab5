import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhonesService } from 'src/app/services/phones.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.scss'],
})
export class AddPhoneComponent implements OnInit {
  myForm!: FormGroup;
  brands = ['samsung', 'apple', 'huawei'];
  constructor(private fb: FormBuilder, private phonesService: PhonesService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      description: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(300)]),
      ],

      brand: ['', [Validators.required]],

      isNegotiable: [false],
    });
  }

  onSave() {
    console.log(this.myForm.getRawValue());
    this.phonesService.addPhone(this.myForm.getRawValue());
    window.alert(
      this.myForm.get('title')?.value +
        ' ' +
        this.myForm.get('description')?.value
    );
  }

  onPatch() {
    this.title?.patchValue('Vand telefon');
    this.description?.patchValue('Blue');

    // this.brand.patchValue(this.brands[0]);
    this.brand?.patchValue('samsung');
    this.isNegotiable?.patchValue(true);
  }

  get title() {
    return this.myForm.get('title');
  }
  get description() {
    return this.myForm.get('description');
  }
  get brand() {
    return this.myForm.get('brand');
  }
  get isNegotiable() {
    return this.myForm.get('isNegotiable');
  }
}
