import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { instanceOfCivicInfo } from './interfaces/civicInfo';
import { Color, StateColor } from './interfaces/color';
import { States, StateShort } from './interfaces/states';
import { CurrentStateService } from './services/current-state.service';
import { StateColorService } from './services/state-color.service';

export const getPartyColor = (data: any): Color => {
  if(instanceOfCivicInfo(data)) {
    const party = data.officials[0].party;
    if(party === 'Democratic Party' || party === 'Democratic-Farmer-Labor Party') {
      return "blue";
    }
    if(party === 'Republican Party') {
      return "red";
    }
    return "yellow";
  }
  console.error("Data object is misconfigured and doesn't match Civic Info format");
  return "black";
}

const getURL = (state: StateShort): URL => {
  const url = new URL(baseURL);
  url.searchParams.append('key', 'AIzaSyBzuI5kXuZsuXZjqSky57CxyJkz2LaKH4E');
  url.searchParams.append('address', States[state]);
  url.searchParams.append('levels', 'administrativeArea1');
  url.searchParams.append('roles', 'headOfGovernment');
  url.searchParams.append('includeOffices', 'true');
  return url;
}
const baseURL = 'https://civicinfo.googleapis.com/civicinfo/v2/representatives';
const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  state: StateShort | null = null
  constructor(
    private http: HttpClient,
    private stateColorService: StateColorService,
    private currentStateService: CurrentStateService
  ) { }
  ngOnInit() {
    this.currentStateService.sharedState.subscribe(state => {
      if (state in States) {
        this.state = state as StateShort
        const url = getURL(this.state).toString();
        this.http.get(url, { headers }).subscribe((data) => {
          const color = getPartyColor(data);
          const stateColor: StateColor = {
            state: this.state,
            color: color
          }
          this.stateColorService.nextColor(stateColor);
        })
      }
      console.error("State not found")
    })
  }
}
