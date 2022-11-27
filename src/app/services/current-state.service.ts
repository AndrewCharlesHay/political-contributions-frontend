import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StateShort } from '../interfaces/states'

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {
  private state = new BehaviorSubject('CA');
  sharedState = this.state.asObservable();

  constructor() { }
  nextState(state: StateShort) {
    this.state.next(state)
  }
}
