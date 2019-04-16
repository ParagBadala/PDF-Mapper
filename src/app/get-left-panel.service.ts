import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetLeftPanelService {

  constructor(private http : HttpClient) { }

  public getLeftPanel(index){
    if(index == 0)
    return this.http.get("../../assets/first.json")
    else
    return this.http.get("../../assets/second.json")
  }
}
