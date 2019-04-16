import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetLeftPanelService } from 'src/app/get-left-panel.service';
import { PdfViewerService } from 'src/app/pdf-viewer.service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit, OnDestroy {

  public pdfSrc: any;
  public searchTextLocal = '';
  public index;
  public data;
  constructor(private getDataService: GetLeftPanelService, private pdfService: PdfViewerService, private route: Router) { }

  ngOnInit() {
    this.index = this.pdfService.getIndex();
    if (this.index == 0) {
      this.pdfSrc = '../../../assets/first.pdf'
      this.getDataService.getLeftPanel(this.index).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    }
    else if (this.index == 1) {
      this.pdfSrc = '../../../assets/second.pdf'; // change pdf url here
      this.getDataService.getLeftPanel(this.index).subscribe(data => {
        console.log(data);
        this.data = data;
      });
    }
  }

  @ViewChild('PdfViewers') private pdfComponent;

  search(stringToSearch: string) {
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
    })
    // this.pdfComponent.pdfLinkService.navigateTo('balance');

  }

  /**
   * Scroll view
   */
  scrollToPage() {
    this.pdfComponent.pdfViewer.scrollPageIntoView({
      pageNumber: 3
    });
  }


  onPageRendered(event) {
    console.log(event)
    // this.search("balance");
  }

  searchString(searchString: string) {

    document.getElementById('viewFind').click();
    document.getElementById('findInput').setAttribute('value', searchString);
    var eve = new Event('input');
    document.getElementById('findInput').dispatchEvent(eve);
  }

  navigateToPage(pageNumber){
    this.route.navigate(['/home']);
  }

  ngOnDestroy(){
    this.pdfSrc = '';
  }
}
