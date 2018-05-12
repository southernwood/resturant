import {BookingModel} from "./booking-model";
import {Injectable} from "@angular/core";

import {DataStorageService} from "../shared/data-storage.service"
@Injectable()

export class BookingService{
  constructor(private  dataStorageService: DataStorageService){};
  addABooking(booking: BookingModel){
    this.dataStorageService.addABooking(booking);
  }
}
