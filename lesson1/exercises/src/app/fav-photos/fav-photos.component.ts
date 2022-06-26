import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'random cute pet photos';
  image1 = 'http://images2.fanpop.com/image/answers/342000/342741_1263941970327.98res_449_393.jpg';
  image2 = 'https://i.redd.it/jvostfk4v9r71.jpg';
  image3 = 'https://i.pinimg.com/originals/cf/4a/19/cf4a19637df4dd74d04f913f3ecea65f.jpg';

  constructor() { }

  ngOnInit() {
  }

}