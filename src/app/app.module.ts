import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { GenerateMatchComponent } from './generate-match/generate-match.component';
import { SearchMatchComponent } from './search-match/search-match.component';
import { SortDateComponent } from './sort-date/sort-date.component';

@NgModule({
  declarations: [
    AppComponent,
    PointsTableComponent,
    GenerateMatchComponent,
    SearchMatchComponent,
    SortDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
