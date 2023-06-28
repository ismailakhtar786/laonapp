import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss']
})
export class LoanApplicationComponent implements OnInit{

  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  ornamentDetails!: FormGroup;
  educationalDetails!: FormGroup;
  uploadDocument!: FormGroup;
  personal_step = false;
  address_step = false;
  ornament_step = false;
  education_step = false;
  document_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
            // name: ['', Validators.required],
            // email: ['', Validators.required],
            // phone: ['',Validators.required]
        });
        this.addressDetails = this.formBuilder.group({
            // city: ['', Validators.required],
            // address: ['', Validators.required],
            // pincode: ['',Validators.required]
        });
        this.ornamentDetails = this.formBuilder.group({
          // city: ['', Validators.required],
          // address: ['', Validators.required],
          // pincode: ['',Validators.required]
      });
        this.educationalDetails = this.formBuilder.group({
            // highest_qualification: ['', Validators.required],
            // university: ['', Validators.required],
            // total_marks: ['',Validators.required]
        });
  }

  get personal() { return this.personalDetails.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }
  get ornament() { return this.ornamentDetails.controls; }
  next() {
    if (this.step === 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step === 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step === 3) {
    this.ornament_step = true;
    if (this.ornamentDetails.invalid) {
      return;
    }
    this.step++;
  } else if (this.step === 4) {
      this.education_step = true;
      if (this.educationalDetails.invalid) {
        return;
      }
      this.step++;
    } else if (this.step === 5) {
      this.document_step = true;
      if (this.uploadDocument.invalid) {
        return;
      }
      // Handle form submission or any other action for the last form
      // ...
    }
  }
  
  previous() {
    this.step--;
    if (this.step === 1) {
      this.personal_step = false;
    } else if (this.step === 2) {
      this.address_step = false;
    } else if (this.step === 3) {
      this.ornament_step = false;
    } else if(this.step === 4){
      this.education_step = false;
    }
  }
  
  submit(){
    if(this.step== 5){
      this.document_step = true;
      if (this.uploadDocument.invalid) { return }
    }
  }

  add(){
    
  }
}
