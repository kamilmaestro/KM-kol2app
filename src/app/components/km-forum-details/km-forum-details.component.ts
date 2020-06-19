import { Component, OnInit } from '@angular/core';
import {KMDataService} from '../../services/km-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-km-forum-details',
  templateUrl: './km-forum-details.component.html',
  styleUrls: ['./km-forum-details.component.css']
})
export class KMForumDetailsComponent implements OnInit {

  public id: number;
  public title: string;
  public text: string;
  public image = '';

  constructor(private dataService: KMDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = '1';
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.getPostById(id);
  }

  getPostById(id) {
    this.dataService.getPostById(id).subscribe(res => {
      this.id = res['id'];
      this.title = res['title'];
      this.text = res['text'];
      this.image = res['image'];
    });
  }

}
