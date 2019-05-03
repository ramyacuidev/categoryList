import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Category } from '../dataclasses/category.dataclass';
import { CategoryService } from '../services/category.service';

declare var $: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  //Flag to show/hide the add category component.
  addCategoryFlag: boolean = false;
  catList: Array<Category> = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    // Get the list of categories from the service.
    this.catList = this.categoryService.getCatList();
  }

  ngAfterViewInit() {
    // To add the jquery sortable function to the element id "sortable"
    $(function () {
      $("#sortable").sortable();
      $("#sortable").disableSelection();
    });
  }

  // To show the add category component
  addCategory(): void {
    this.addCategoryFlag = true;
  }

  //deletion of category.
  deleteCat(cat: Category): void {
    //find the category index in the list and delete splice it from the list.
    const index = this.catList.findIndex(item => item.categoryId === cat.categoryId);
    this.catList.splice(index, 1);
  }

  //saving the new category to the list and hiding the add category component.
  saveCategory(cat: Category): void {
    this.addCategoryFlag = false;
    this.catList.push(cat);
  }
}

