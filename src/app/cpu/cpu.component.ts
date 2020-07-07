import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {

  readonly ROOT_URL = 'http://localhost:4500/cpu';
  cpus: any;
  num: number;
  constructor(private  http: HttpClient) {
    this.cpus = this.http.get(this.ROOT_URL);
    this.num = 5;
  }

  // tslint:disable-next-line:typedef
  getGpus() {
    this.cpus = this.http.get(this.ROOT_URL);
  }

  ngOnInit(): void {
  }

}
