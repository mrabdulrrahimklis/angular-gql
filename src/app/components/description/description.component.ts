import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit {

  @Input() textDesc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
