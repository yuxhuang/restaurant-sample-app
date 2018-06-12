import {Component, OnInit} from '@angular/core';
import {NewsListService} from '../news-list.service';
import {NewsItem} from '../news-item';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private svc: NewsListService) { }

  items: NewsItem[] = [];

  ngOnInit() {
    this.svc.getMostRecentItems().subscribe(items => this.items = items);
  }

}
