import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentNameComponent } from '../../component-name/component-name.component';
import { ListItemsService } from '../../services/getData/list-items.service';

import { IItem} from '../../model/item.model';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.sass']
})
export class TopListComponent implements OnInit {
  title;
  description;


  constructor(
    public dialog: MatDialog,
    public listItemsService: ListItemsService,
  ) { }

  openDialog() {
    this.dialog.open(ComponentNameComponent, {
      data: {
      }
    })
  }

  addItem() {
    let item: IItem = {
      id: new Date().getMilliseconds(),
      title: this.title,
      description: this.description,
      isVisible: true,
    }
    this.listItemsService.addItem(item);
  }

  ngOnInit(): void {
  }

}
