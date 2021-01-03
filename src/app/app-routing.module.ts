import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateMatchComponent } from './generate-match/generate-match.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { SearchMatchComponent } from './search-match/search-match.component';
import { SortDateComponent } from './sort-date/sort-date.component';

const routes: Routes = [
  { path: '/viewTable', component: PointsTableComponent },
  { path: 'generateMatch', component: GenerateMatchComponent },
  { path: 'searchMatch', component: SearchMatchComponent },
  { path: 'sortByDate', component: SortDateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
