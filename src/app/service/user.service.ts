import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  isEditable:boolean = false
  index:number= 0

  private subject = new BehaviorSubject<boolean>(this.isEditable)
  private subject2 = new BehaviorSubject<number>(this.index)
  public getData = this.subject.asObservable();
  public getData2 = this.subject2.asObservable();

  edit(value: boolean) {
    this.subject.next(value)
  }
  id(index: number) {
    this.subject2.next(index)
  }
}
