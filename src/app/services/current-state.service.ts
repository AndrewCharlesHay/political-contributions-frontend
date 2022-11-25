import { Injectable, OnInit } from '@angular/core';
import { StateShort } from '../interfaces/states'

@Injectable({
  providedIn: 'root'
})
export class CurrentStateService {//implements OnInit {
  stateID: StateShort | null = null
  // constructor() { }
}
