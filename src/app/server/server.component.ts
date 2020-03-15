import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerComponent implements OnInit {
@Input('srvElement') element : {
  name: string ,types: string , content: string
};
  constructor() { }

  ngOnInit(): void {
  }

}
