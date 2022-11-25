import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnChanges, OnInit {
  @Input()
  ids: any;
  constructor() {}
  ngOnInit() {
    console.log('load');
  }
  ngOnChanges(changes: SimpleChanges) {
    const change = JSON.parse(JSON.stringify(changes["ids"]));
    change.currentValue.forEach(() => {
      // #518a38
      //  #e2e2e2 unfill
    });
  }
  mouseEnter(id: string) {
    const element: HTMLElement | null = document.getElementById(id)
    if(element){
      element.style.setProperty('stroke-width', '1.970631');
    }
    
  }
  mouseLeave(id: string) {
    const element: HTMLElement | null = document.getElementById(id)
    if(element){
      element.style.setProperty('stroke-width', '0.970631');
    }
  }
}
