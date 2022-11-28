import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanidateComponent } from './canidate/canidate.component';
import { CanidateListComponent } from './canidate-list/canidate-list.component';
import { StateTitleComponent } from './state-title/state-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    CanidateComponent,
    CanidateListComponent,
    StateTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
