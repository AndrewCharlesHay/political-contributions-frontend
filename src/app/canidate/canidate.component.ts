import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-canidate',
  templateUrl: './canidate.component.html',
  styleUrls: ['./canidate.component.sass']
})
export class CanidateComponent {
  @Input() canidate: string | undefined
}
