import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  editItem(item: Item) {
    this.editState = !this.editState;
    this.itemToEdit = item;
  }

  updateItem(item: Item) {
    this.editState = !this.editState;
    this.itemService.updateItem(item);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
  }

}
