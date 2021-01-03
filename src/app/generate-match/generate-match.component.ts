import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api-service/api.service';

@Component({
  selector: 'app-generate-match',
  templateUrl: './generate-match.component.html',
  styleUrls: ['./generate-match.component.css']
})
export class GenerateMatchComponent {

  constructor(private _apiService: ApiService) {
    this.generatedMatch();
  }

  data$;

  generatedMatch() {
    this.data$ = this._apiService.generateMatch();
    console.log(this.data$);
  }

}
