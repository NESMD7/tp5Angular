import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private actionsSubject = new BehaviorSubject<any[]>([]);
  actions$ = this.actionsSubject.asObservable();

  constructor() {}

  addAction(action: any) {
    const currentActions = this.actionsSubject.value;
    this.actionsSubject.next([...currentActions, action]);
  }

  getActions(): Observable<any[]> {
    return this.actions$;
  }

}
