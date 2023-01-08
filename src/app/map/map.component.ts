import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StateShort, States } from '../interfaces/states';
import { CurrentStateService } from '../services/current-state.service';
import { StateColorService } from '../services/state-color.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnChanges, OnInit {
  subscription: Subscription | undefined;

  constructor(
    private currentStateService: CurrentStateService,
    private stateColorService: StateColorService
  ) {}
  ngOnInit() {
    this.subscription = this.stateColorService.sharedStateColor.subscribe(stateColor => {
      if(stateColor.state){
        const element: HTMLElement | null = document.getElementById(stateColor.state);
        if (element) {
          element.style.setProperty('fill', stateColor.color);
        }
      }
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    const change = JSON.parse(JSON.stringify(changes['ids']));
    change.currentValue.forEach(() => {});
  }
  mouseEnter(id: string) {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.setProperty('stroke-width', '2');
      this.currentStateService.nextState(id as StateShort);
    }
  }
  mouseLeave(id: string) {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.setProperty('stroke-width', '1');
    }
  }
  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}