import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dragData :string = "Dragable Data"
  salmanArray : Array<String> = []

  users: Object
  constructor(private data: DataService) {

   }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log("geting the data",this.users)
    })
  }

  firstclick()
  { 
    this.salmanArray.push("AlkautsarKudaLaut")
  }

  mymethod
}
