import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbTitle: string;
  @Input() breadcrumbFooter: string;

  constructor() { }

  ngOnInit(): void {
  }

}
