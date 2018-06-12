import { Injectable } from '@angular/core';
import {Menu} from './menu';
import {Observable, of} from 'rxjs';

const menu = [
  {
    title: 'MARKET SALADS',
    items: [
      {
        title: 'Baby Gem Lettuce Caesar',
        descr: 'herb croutons - parmesan reggiano',
      },
      {
        title: 'Blue Iceberg',
        descr: 'applewood smoked bacon - danish blue cheese - cherry tomatoes',
      },
      {
        title: 'Shaved Brussels Sprouts',
        descr: 'apples - cranberries - goat\'s gouda - marcona almonds',
      },
      {
        title: 'Local Heirloom Tomatoes',
        descr: 'ontario burrata cheese - caponata sundried tomato tapenade',
      },
      {
        title: 'Spring Mixed Salad',
        descr: 'hearts of palm - sunflower seeds – crouton - xeres vinaigrette',
      },
    ],
  },
  {
    title: 'APPETIZERS',
    items: [
      {
        title: 'Beef Tartare',
        descr: 'italian capers - whole grain dijon - poached quail\'s egg - truffled croutons',
      },
      {
        title: 'Crispy Shrimp',
        descr: 'chili remoulade',
      },
      {
        title: 'Seared Foie Gras',
        descr: 'seasonal fruit compote - ginger gastrique - rhubarb gel - rolled oat crumble',
      },
      {
        title: 'Lil\' Brgs',
        descr: 'Wagyu beef - special sauce - sesame seed bun. Add truffles (MP) - Add foie gras (MP)',
      },
      {
        title: 'Tuna Tartare',
        descr: 'hass avocado - soy honey emulsion - taro chips',
      },
      {
        title: 'Double-Smoked Applewood Bacon',
        descr: 'balsamic BBQ - celery leaves - pickled onions',
      },
    ],
  },
  {
    title: 'SEAFOOD PLATTERS',
    items: [
      {
        title: 'Market Oysters / Shrimp / Clams / Mussels / Ceviche',
        descr: 'cocktail sauce - mignonette - lemon dijonnaise',
      },
    ],
  },
  {
    title: 'ENTRÉES',
    items: [
      {
        title: 'Braised Short Rib',
        descr: 'jalapeño cheddar grits - roasted pepper relish - crispy shallots - red wine glaze',
      },
      {
        title: 'Herb Crusted Lamb Chops',
        descr: 'minty peas - smoked eggplant purée - grape must – jus',
      },
      {
        title: 'Mediterranean Sea Bass',
        descr: 'pickled artichoke - olives - sundried tomatoes - saffron vinaigrette',
      },
      {
        title: 'Roasted Organic Chicken',
        descr: 'trumpet mushrooms - peas - bacon - onion soubise - xeres chicken jus',
      },
      {
        title: 'Butter Poached Canadian Lobster',
        descr: 'burnt orange citrus salad - chili-lime butter',
      },
      {
        title: 'Market Fish',
        descr: null,
      },
      {
        title: 'Seared Atlantic Scallops',
        descr: 'potato mousseline - bacon - jerusalem artichokes - sauce diable',
      },
      {
        title: 'Vegetable Plate',
        descr: 'braised daikon - pickled hon shimeji mushrooms - baby bok choy - sesame black bean vinaigrette',
      },
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getFullMenu(): Observable<Menu> {
    return of(menu);
  }

}
