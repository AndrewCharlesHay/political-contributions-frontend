import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GroupedObservable } from 'rxjs';
import { CivicInfo, instanceOfCivicInfo } from '../interfaces/civicInfo';
import { StateShort, States } from '../interfaces/states';
import { CurrentStateService } from '../services/current-state.service';
// import { ScriptsService } from '../services/scripts.service';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnChanges, OnInit {
  @Input()
  ids: any;
  url = new URL('https://civicinfo.googleapis.com/civicinfo/v2/representatives') //?address=maine&key=';
  constructor(
    private currentStateService: CurrentStateService,
    private http: HttpClient,
  ) {}
  ngOnInit() {
    this.url.searchParams.append('key', 'AIzaSyBzuI5kXuZsuXZjqSky57CxyJkz2LaKH4E');
  }
  ngOnChanges(changes: SimpleChanges) {
    const change = JSON.parse(JSON.stringify(changes['ids']));
    change.currentValue.forEach(() => {});
  }
  mouseEnter(id: string) {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.setProperty('stroke-width', '2');
      element.style.setProperty('fill', '#5c2c8f');
      this.currentStateService.nextState(id as StateShort);
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.url.searchParams.append('address', States[id as StateShort]);
      this.url.searchParams.append('levels', 'administrativeArea1');
      this.url.searchParams.append('roles', 'headOfGovernment');
      this.url.searchParams.append('includeOffices', 'true');
      const urlString = this.url.toString();
      this.http.get(urlString, { headers }).subscribe((data) => {
        if(instanceOfCivicInfo(data)) {
          const party = data.officials[0].party;
          if(party === 'Democratic Party') {
            element.style.setProperty('fill', 'blue');
          }
          if(party === 'Republican Party') {
            element.style.setProperty('fill', 'red');
          }
        }
      })
    }
  }
  mouseLeave(id: string) {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.style.setProperty('stroke-width', '1');
    }
  }
}
