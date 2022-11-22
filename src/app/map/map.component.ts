import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class MapComponent implements OnChanges, OnInit {
  @Input()
  ids: any;
  constructor() {}
  ngOnInit() {
    console.log('load');
  }
  ngOnChanges(changes: SimpleChanges) {
    const change = JSON.parse(JSON.stringify(changes.ids));
    change.currentValue.forEach((data) => {
      console.log('hi');
      // #518a38
      //  #e2e2e2 unfill
    });
  }
  mouseEnter(id: string) {
    const element = document.getElementById(id)
    if(element){
      element.style['stroke-width'] = '1.970631';
    }
    console.log(id);
  }
  mouseLeave(id: string) {
    const element = document.getElementById(id)
    if(element){
      element.style['stroke-width'] = '0.970631';
    }
  }
}
