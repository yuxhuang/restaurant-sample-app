import {Component, Input, OnInit} from '@angular/core';
import {NewsItem} from '../news-item';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit {

  @Input() item: NewsItem;
  @Input() reverse = false;
  @Input() isNotFirstItem = false;

  constructor() { }

  ngOnInit() {
  }

}
