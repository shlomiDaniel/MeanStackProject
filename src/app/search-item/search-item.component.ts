import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  name: any ;
  readonly ROOT_URL ;
  gpus: any;
  gpus2: any;
  num: number;
  constructor(private  http: HttpClient) {
    this.ROOT_URL = 'http://localhost:4500/' + document.getElementById('name');
    this.gpus = this.http.get(this.ROOT_URL);
    this.num = 5;
    this.gpus2 = '';


  }

  // tslint:disable-next-line:typedef
  getGpus() {
    this.gpus = this.http.get(this.ROOT_URL);
    console.log(this.gpus);
    this.gpus2 = this.gpus;
  }

  ngOnInit(): void {
  }

}
