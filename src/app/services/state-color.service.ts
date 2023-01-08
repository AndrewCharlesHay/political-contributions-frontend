import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateColor } from '../interfaces/color';

const defaultStateColor: StateColor = {
  state: 'CA',
  color: 'blue'
}

@Injectable({
  providedIn: 'root'
})
export class StateColorService {
  private stateColor = new BehaviorSubject(defaultStateColor)
  sharedStateColor = this.stateColor.asObservable()

  constructor() { }

  nextColor(stateColor: StateColor) {
    this.stateColor.next(stateColor)
  }
}
