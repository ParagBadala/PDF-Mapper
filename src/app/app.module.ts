import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PdfViewerComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [
    FilterPipe,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
