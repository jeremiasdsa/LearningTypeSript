import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  url = 'http://loiane.com';
  urlImage = 'http://lorempixel.com/400/200';

  getValor() {
    return 3;
  }

  constructor() { }

  ngOnInit() {
  }

}
