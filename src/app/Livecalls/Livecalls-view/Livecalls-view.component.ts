import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Livecalls-view',
  templateUrl: './Livecalls-view.component.html',
  styleUrls: ['./Livecalls-view.component.css']
})
export class LivecallsViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  console.log("Livecalls");
  }

}
