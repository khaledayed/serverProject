import { Component, OnInit, Input, ViewEncapsulation,
  OnChanges, SimpleChanges, ElementRef,
  ViewChild, AfterViewInit,
  AfterContentChecked, AfterViewChecked,
   AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerComponent implements
OnInit, OnChanges, AfterContentInit, AfterContentChecked,
 AfterViewChecked, AfterViewInit, AfterContentChecked, OnDestroy{
@Input('srvElement') element : {
  name: string ,types: string , content: string
};
@Input() name: string;
@ViewChild('heading', {static:true}) header: ElementRef;
  constructor() {
    console.log('constructor called!');
  }
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content', + this.header.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called !");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called !");
    console.log('Text Content', + this.header.nativeElement.textContent);

  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called !");
  }
  ngAfterViewChecked (){
    console.log("ngAfterViewChecked called !");

  }
  ngOnDestroy(){
    console.log("ngOnDestroy called !");

  }


}
