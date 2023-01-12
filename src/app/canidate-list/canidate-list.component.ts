import { Component, Input, ViewEncapsulation } from '@angular/core';
import { defaultOffical, Official } from '../interfaces/offices';

@Component({
  selector: 'app-canidate-list',
  templateUrl: './canidate-list.component.html',
  styleUrls: ['./canidate-list.component.sass'],
  encapsulation: ViewEncapsulation.None,
})

export class CanidateListComponent {
  @Input() canidates: Official[] | undefined = [defaultOffical]
  canidateName = this.canidates?.length ? this.canidates[0].name : defaultOffical.name;
}
