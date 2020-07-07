import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { Gpu } from '../gpu/gpu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }


  something = '';
  newProduct = '';
  param = '';

  storedGpus: Gpu[] = [];
  // tslint:disable-next-line:typedef
  doSomething(){
    this.newProduct = this.something;
  }
  // tslint:disable-next-line:typedef
  clicked(data: HTMLTextAreaElement){
    this.param = data.value;
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onGpuAdded(gpu){
    this.storedGpus.push(gpu);
  }

}
