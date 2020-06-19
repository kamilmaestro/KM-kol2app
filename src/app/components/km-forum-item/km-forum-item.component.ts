import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-km-forum-item',
  templateUrl: './km-forum-item.component.html',
  styleUrls: ['./km-forum-item.component.css']
})
export class KMForumItemComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
