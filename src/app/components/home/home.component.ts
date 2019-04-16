import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PdfViewerService } from 'src/app/pdf-viewer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchText;
  public data;

  constructor(private route:Router, private http:HttpClient, private pdfService:PdfViewerService) { }

  ngOnInit() {
    this.http.get('assets/data.json').pipe(map((data)=>{
      this.data=data;
    })).subscribe();
  }

  public signOut() {
    this.route.navigateByUrl('/login');
  }

  public viewPdf(i){
    this.pdfService.setIndex(i);
  }

}
