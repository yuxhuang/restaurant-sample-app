import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsListService} from './news-list.service';
import {NewsListItemComponent} from './news-list-item/news-list-item.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faInfoCircle, faPhone, faFax, faEnvelope, faUtensils} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope as farEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faFacebookSquare, faGooglePlusSquare, faLinkedin, faTwitterSquare, faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import { MenuComponent } from './menu/menu.component';

library.add(faHome, faEnvelope, farEnvelope, faInfoCircle, faPhone, faFax, faUtensils);
library.add(faFacebookSquare, faGooglePlusSquare, faTwitterSquare, faLinkedin, faYoutubeSquare);

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavComponent,
    FooterComponent,
    NewsListComponent,
    NewsListItemComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [NewsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
