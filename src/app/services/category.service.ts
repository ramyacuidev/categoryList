import { Injectable } from '@angular/core';
import { Category } from '../dataclasses/category.dataclass';

// Dummy Data for the Categories.
const dummyCategory: Array<Category> = [
  {
    categoryId: '1',
    categoryName: 'Category1',
    sequence: 1
  },
  {
    categoryId: '2',
    categoryName: 'Category2',
    sequence: 2
  },
  {
    categoryId: '3',
    categoryName: 'Category3',
    sequence: 3
  },
  {
    categoryId: '4',
    categoryName: 'Category4',
    sequence: 4
  }
];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesList: Array<Category> = dummyCategory;

  constructor() { }

  // to retrieve the list of categories.
  getCatList(): Array<Category> {
    return this.categoriesList;
  }
}
