// @ts-ignore
import {Gpu} from '../gpu/gpu.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
 @Injectable({providedIn: 'root'})
export  class GpusService {
    constructor(public http: HttpClient){}
  private gpus;
 // private gpus: Gpu [] = [];
  private gpusUpdated = new Subject<Gpu[]>();
  // tslint:disable-next-line:typedef
  getGpus(){
    //return [...this.gpus];
    // this.http.get<{gpus: any[]}>('http://localhost:4500/gpu').subscribe((gpuData)=>{
     this.http.get('http://localhost:4500/gpu').subscribe((gpuData)=>{
      this.gpus = gpuData;
     // this.gpus = [...this.gpus];
     console.log(gpuData);
       this.gpusUpdated.next([...this.gpus]);
       //this.gpusUpdated.([...this.gpus]);
     // console.log(this.gpus);
     
    });
  }
  // tslint:disable-next-line:typedef
  addGpu(name: string, company: string, price: string, imgPath: string, description: string, imgPathCompanyLogo: string, numOfStars: string){
    const gpu: Gpu = {
      name,
      company,
      price,
      imgPath,
      description,
      imgPathCompanyLogo,
      numOfStars
    };
    this.gpus.push(gpu);
    this.gpusUpdated.next([...this.gpus]);
  }

  // tslint:disable-next-line:typedef
  getPostUpdateListner(){
    return this.gpusUpdated.asObservable();
  }

}

