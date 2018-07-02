import { Component, OnInit } from '@angular/core';

@Component({
  // Different ways to use selector
  // 1. selecting the component by using selector as an element (see how to use this as element in the html).
  selector: 'app-servers',
  // 2. selecting the component by using selector as an attribute (see how to use this as template in the html).
  //  selector: '[app-servers]',
  // 3. selecting the component by using selector as an class (see how to use this as class in the html).
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean =false;
  serverCreationStatus = 'No Server was Created!';
  serverName = 'Test';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer =true;
    }, 2000);
   }

  ngOnInit() {
  }

  onServerCreate() {
    this.serverCreationStatus = 'Server was Created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
     console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
