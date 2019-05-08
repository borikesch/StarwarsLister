import { Component, OnInit } from '@angular/core';
import { StarwarsListService } from './starwars-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'starwarsList!';
  subTitle = 'This is a list created as a practice exercise, all resources are extracted from "https://en.wikipedia.org/wiki/List_of_Star_Wars_characters"'
  characters: any;

  constructor(
    private starwarsListService: StarwarsListService
  ) {

  }
  ngOnInit() {
    this.starwarsListService.GetJson().subscribe(data => {
      this.characters = data.characters;
    });
  }
}
