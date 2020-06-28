import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-server-login',
  templateUrl: './server-login.component.html',
  styleUrls: ['./server-login.component.css']
})
export class ServerLoginComponent implements OnInit {


  title = 'link';

  url: string = "/server/welcome";


  constructor() { }

  ngOnInit() {
  }

}
