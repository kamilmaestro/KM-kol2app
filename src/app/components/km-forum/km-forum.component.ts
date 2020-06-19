import { Component, OnInit } from '@angular/core';
import {KMDataService} from '../../services/km-data.service';

@Component({
  selector: 'app-km-forum',
  templateUrl: './km-forum.component.html',
  styleUrls: ['./km-forum.component.css']
})
export class KMForumComponent implements OnInit {

  public posts$: any;

  constructor(private dataService: KMDataService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.dataService.getAllPosts().subscribe(response => {
      this.posts$ = response;
    });
  }

}
