import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Output } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();
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
