import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PdfViewerService {

  constructor(private route: Router) { }

  public index;
  public searchString = '';

  setIndex(i){
    this.index = i;
    this.navigateToPdf();
  }

  navigateToPdf(){
    this.route.navigate(['pdfViewer']);
  }

  getIndex(){
    return this.index;
  }

  setSearchString(string){
    this.searchString = string;
  }
}
