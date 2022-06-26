import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [ 
    "www.google.com",
    "www.raddit.com",
    "www.launchcode.org"
  ]
  constructor() { }

  ngOnInit() {
  }

}
