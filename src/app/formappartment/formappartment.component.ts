import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formappartment',
  templateUrl: './formappartment.component.html',
  styleUrls: ['./formappartment.component.css']
})
export class FormappartmentComponent implements OnInit {

  apartForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', Validators.required],
      terrace: [''],
      surfaceTerrace: [{value: '', disabled: true}],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      residenceNumber: ['1', Validators.required]
    });
  
  
    const terraceControl = this.apartForm.get('terrace');
    const surfaceTerraceControl = this.apartForm.get('surfaceTerrace');
  
    if (terraceControl && surfaceTerraceControl) {
      terraceControl.valueChanges.subscribe((terraceValue: string) => { 
        if (terraceValue === 'yes') {
          surfaceTerraceControl.enable();
        } else {
          surfaceTerraceControl.disable();
        }
      });
    }
  }
  
  

  onSubmit(): void {
    
  }
}
