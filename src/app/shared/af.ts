import {Injectable} from "@angular/core";
import {AngularFireModule, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class AF {
  public bookings: FirebaseListObservable<any>;
  constructor(public af: AngularFireModule) {
    this.bookings = this.af.list('messages');
  }


}
