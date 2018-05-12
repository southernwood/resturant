import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormControl,
  FormArray,
  Validators} from "@angular/forms";


@Component({
  selector: 'app-booking-new',
  templateUrl: './booking-new.component.html',
  styleUrls: ['./booking-new.component.css']
})
export class BookingNewComponent implements OnInit {
  bookingForm: FormGroup;
  editMode: false;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
    console.log("booking-new: try to add a booking");
    console.log(this.bookingForm.value);
  }
  private initForm() {
    let firstName = '';
    let lastName = '';
    let time = '';
    let size = '';
    let telephone = '';
    if (this.editMode) {
      console.log("booking-new: try to edit something");
    }
    this.bookingForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'time': new FormControl(time, Validators.required),
      'size': new FormControl(size, Validators.required),
      'telephone': new FormControl(telephone, Validators.required),
    });
  }
}
