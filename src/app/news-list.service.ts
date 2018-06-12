import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {NewsItem} from './news-item';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  constructor() { }


  getMostRecentItems(): Observable<NewsItem[]> {
    return of([
      {
        title: 'Fichipizza',
        content: 'A unique combination of Mediterranean and Italian pizza, topped with Mascarphone, proscuitto, figs, ' +
        'grandopanado, honey and arugula.',
        url: '#',
        pullquote: 'Our Unique Culinary Creations',
      },
      {
        title: 'Weekend Grand Buffet',
        content: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six\n' +
        '        main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per\n' +
        '        person',
        url: '#',
        pullquote: 'This Month\'s Promotions',
      },
      {
        title: 'Tommy McHugh',
        subtitle: 'Executive Chef',
        content: 'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who\n' +
        '        in the culinary world, he specializes in creating mouthwatering Mediterranean-Italian experiences.',
        url: '#',
        pullquote: 'Meet our Culinary Specialists'
      },
    ]);
  }
}
