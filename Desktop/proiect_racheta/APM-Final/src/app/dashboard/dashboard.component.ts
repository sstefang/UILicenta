import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css' ]
})

export class DashboardComponent {

  title = 'link';

  url: string = "/server/index";
  url1: string = "/server/index1";
  url2: string = "/server/index2";
  url3: string = "/server/index3";
    //"&output=embed" ;



}
