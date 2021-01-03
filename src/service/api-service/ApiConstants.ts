import {Injectable} from '@angular/core';

@Injectable()
export class ApiConstants {
  private generateMatch: string;


  constructor() {
    this.generateMatch = '/generate-match';
  }

  get getGenerateMatch(): string {
    return this.generateMatch;
  }
}
