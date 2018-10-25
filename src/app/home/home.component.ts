import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dragData : string = "Dragable Data"
  constructor() { }

  ngOnInit() {

  }

  firstclick()
  {
    console.warn("im clicked")
  }

  mymethod
}
