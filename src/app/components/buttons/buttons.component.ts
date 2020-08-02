import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass']
})
export class ButtonsComponent implements OnInit {

  @Input() buttonText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
