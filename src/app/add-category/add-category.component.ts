import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../dataclasses/category.dataclass';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  @Output() categorySaved: EventEmitter<Category> = new EventEmitter();
  category: Category;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    //create a new category and prepopulate the sequence and id based on the last highest sequence.
    this.category = new Category({});
    let lastSequence: number = 0;
    this.categoryService.categoriesList.forEach(item => {
      if (lastSequence < item.sequence) {
        lastSequence = item.sequence;
      };
    })
    this.category.sequence = lastSequence + 1;
    this.category.categoryId = this.category.sequence.toString();
  }

  //Emit the event to save the new category.
  save(): void {
    this.categorySaved.emit(this.category);
  }

}

