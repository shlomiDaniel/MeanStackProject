import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
// @ts-ignore
import {Gpu} from '../gpu/gpu.model';
import {GpusService} from './gpus.service';
@Component({
  selector: 'app-gpu-list',
  templateUrl: './gpu-list.component.html',
  styleUrls: ['./gpu-list.component.css']
})
export class GpuListComponent implements OnInit, OnDestroy {

  gpus: Gpu [] = [];
  private gpusSub: Subscription;
  gpusService: GpusService;
  constructor(gpusService: GpusService) {
    this.gpusService = gpusService;
  }

  ngOnDestroy(): void {
        this.gpusSub.unsubscribe();
    }

  ngOnInit(): void {
     this.gpusService.getGpus();
    this.gpusSub = this.gpusService.getPostUpdateListner().subscribe((gpus: Gpu[]) => {
      this.gpus = gpus;
    });
  }

}
