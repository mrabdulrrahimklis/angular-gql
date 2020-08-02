import { Component, OnInit } from '@angular/core';
import { ListItemsService } from '../../services/getData/list-items.service';
import { IItem } from '../../model/item.model';
import {Timestamp} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.sass']
})
export class ListDataComponent implements OnInit {
  items;
  title;
  description;


  constructor(
    private listItemsService: ListItemsService
  ) {
  }

  ngOnInit(): void {
    this.items = this.listItemsService.getData();
  }

  deleteItem(item) {
    this.listItemsService.deleteItem(item)
    this.items = this.listItemsService.getData();
  }


}
