import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { GamingNews, LaptopNews, PhoneNews } from '../../mockup';

@Component({
  selector: 'app-flat-display-section',
  templateUrl: './flat-display-section.component.html',
})
export class FlatDisplaySectionComponent implements OnInit {
  @Input() sectionName = '';
  @Input() sectionCode = '';

  sectionNews: News[] = [];
  constructor() {}

  ngOnInit(): void {
    switch (this.sectionCode) {
      case 'PHONE':
        this.sectionNews = PhoneNews;
        break;
      case 'LAPTOP':
        this.sectionNews = LaptopNews;
        break;
      case 'GAMING':
        this.sectionNews = GamingNews;
        break;
    }
  }
}
