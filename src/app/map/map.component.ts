import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StateShort } from '../interfaces/states';
import { CurrentStateService } from '../services/current-state.service';
import { ScriptsService } from '../services/scripts.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnChanges, OnInit {
  @Input()
  ids: any;
  constructor(
    private currentStateService: CurrentStateService,
    private scriptsService: ScriptsService,
  ) {}
  ngOnInit() {
    this.scriptsService.load('google').then((data: any) => {
      console.log('script loaded ', data);
    }).catch((error: string) => console.log(error));

  }
  ngOnChanges(changes: SimpleChanges) {
    const change = JSON.parse(JSON.stringify(changes["ids"]));
    change.currentValue.forEach(() => {
    });
  }
  mouseEnter(id: string) {
    const element: HTMLElement | null = document.getElementById(id)
    if(element){
      element.style.setProperty('stroke-width', '2');
      element.style.setProperty('fill', '#5c2c8f');
      this.currentStateService.nextState(id as StateShort);
    }
    
  }
  mouseLeave(id: string) {
    const element: HTMLElement | null = document.getElementById(id)
    if(element){
      element.style.setProperty('stroke-width', '1');
      element.style.setProperty('fill', '#e2e2e2')
    }
  }
}
