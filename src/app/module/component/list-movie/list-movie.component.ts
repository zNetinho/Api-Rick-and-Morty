import { Component, OnInit } from '@angular/core';
import { ListApiService } from 'src/app/shared/list.service';

@Component({
  selector: 'spa-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  listData: Array<any> = [];

  constructor(private listService: ListApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() { 
    this.listService.getList().subscribe(result => {
      this.listData = result.results;
      console.log(this.listData)
    })
  }

}
