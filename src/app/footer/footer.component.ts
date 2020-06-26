import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { Output } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();
  @Input() nextUrl:String;
  @Input() previousUrl:String;
  
  constructor() { }

  ngOnInit(): void {
  }

  previous(): void {
    this.previousEvent.emit("getPrevious");
  }

  next(): void {
    this.nextEvent.emit("getNext");
  }

}
