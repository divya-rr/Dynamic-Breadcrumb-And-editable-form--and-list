import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern('^([a-zA-Z]+ )+[a-zA-Z]+$|^[A-Za-z]+$'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$'),
        Validators.email,
      ],
    ],
    password:['',Validators.required],
    phoneNumber:['',[Validators.required,Validators.pattern("[1-9][0-9]{9}")]],
    address: ['', Validators.required],
    address_2: [''],
    country: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
    id: [],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  edit: boolean = false;
  index!: number;
  data: {
    name: string;
    email: string;
    password:string;
    phoneNumber:number;
    address: string;
    address_2: string;
    country: string;
    city: string;
    state: string;
    zipCode: string;
    id: number;
  }[] = [];
  id: number = 0;
  user!:any ;


  ngOnInit() {
    this.userService.getData.subscribe((data) => {
      this.edit = data;
    });
    this.userService.getData2.subscribe((id) => {
      this.index = id;
    });

    if (this.edit == true) {
      this.data = JSON.parse(localStorage.getItem('users') || '[]');
      console.log(this.index);
      this.user = this.data.find((info) => this.index == info.id);
      this.form.patchValue(this.user);
      console.log(this.form.value);
    }
  }

 

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!');
      console.log(this.form.value);

      if (this.edit == false) {
        
        this.data = JSON.parse(localStorage.getItem('users') || '[]');
        this.id = this.data.length;
        this.form.patchValue({ id: this.id });
        this.data.push(this.form.value);
      }

      if (this.edit == true) {
        this.data = JSON.parse(localStorage.getItem('users') || '[]');
        this.data[this.index] = this.form.value;
        localStorage.setItem('users', JSON.stringify(this.data));
      }

      localStorage.setItem('users', JSON.stringify(this.data));
      this.router.navigateByUrl('user/list');
    } 
    else {
      this.validateAllFormFields(this.form);
    }
  }

  isFieldValid(field: string) {
    return !this.form.get(field)?.valid && this.form.get(field)?.touched;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched();
    });
  }
}
