import {createSelector, createFeatureSelector} from '@ngrx/store';
import {Book} from '../book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {

    let newCollection: Array<Book> = [];
    collection.map((collectionId) => {
      const found = books.find(element => element.id === collectionId);
      newCollection.push(found!);
    })

    return newCollection;
    // return collection.map((id) => books.find((book) => (book.id === id)));
  }
);
