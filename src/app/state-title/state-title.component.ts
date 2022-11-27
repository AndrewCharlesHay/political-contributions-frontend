import { Component, OnInit } from '@angular/core';
import { CurrentStateService } from "../services/current-state.service";
import { StateShort, States } from '../interfaces/states'

@Component({
  selector: 'app-state-title',
  templateUrl: './state-title.component.html',
  styleUrls: ['./state-title.component.sass']
})
export class StateTitleComponent implements OnInit {
  state: StateShort | null = null
  constructor(private currentStateService: CurrentStateService) { }
  ngOnInit() {
    this.currentStateService.sharedState.subscribe(state => {
      if (state in States) {
        this.state = state as StateShort
      }
      console.error("State not found")
    })
  }
}
