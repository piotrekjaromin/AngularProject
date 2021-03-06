import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ViewService {

  private viewSource: BehaviorSubject<string> = new BehaviorSubject('dashboard');
  view = this.viewSource.asObservable();

  setView(view: string) {
    this.viewSource.next(view);
  }
}
