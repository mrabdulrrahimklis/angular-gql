import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  @Input() header: string;
  @Input() text: string;
  @Input() image: string;
  @Input() even: string;
  @Input() odd: string;

  constructor() { }

  ngOnInit(): void { }

}
