import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:4500/gpu';
  gpus: any;
   num: number;
  constructor(private  http: HttpClient) {
    this.gpus = this.http.get(this.ROOT_URL);
    this.num = 5;
  }

  // tslint:disable-next-line:typedef
  getGpus() {
    this.gpus = this.http.get(this.ROOT_URL);
  }

  ngOnInit(): void {
  }

}
