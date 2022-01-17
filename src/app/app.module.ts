import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter.reducer";
import {CounterComponent} from './counter/counter.component';
import {booksReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/collection.reducer";
import {BookListComponent} from './book-list/book-list.component';
import {BookCollectionComponent} from './book-collection/book-collection.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
