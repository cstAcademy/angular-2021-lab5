import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   myForm!: FormGroup;
   brands = ['samsung', 'apple', 'huawei'];
   
   constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.compose(
        [Validators.required, Validators.minLength(3)])
      ],
      description: ['', Validators.compose(
        [Validators.required, Validators.maxLength(300)])
      ],

      brand: ['', [Validators.required]],

      isNegociable: [false],
     
    });
  }

  onSave() {
    console.log(this.myForm.getRawValue());
    window.alert(this.myForm.get('title')?.value + ' ' + this.myForm.get('description')?.value)
  }

  onPatch() {
    this.title?.patchValue('Vand telefon');
    this.description?.patchValue('Blue');
   
    // this.brand.patchValue(this.brands[0]);
    this.brand?.patchValue('samsung');
    this.isNegociable?.patchValue(true);

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
  get isNegociable() {
    return this.myForm.get('isNegociable');
  }

}
