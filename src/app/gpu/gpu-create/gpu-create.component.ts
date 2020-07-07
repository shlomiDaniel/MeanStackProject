import { Component, OnInit , Output} from '@angular/core';
// @ts-ignore
import {Gpu} from '../gpu.model';
import {NgForm} from '@angular/forms';
import {GpusService} from '../../gpu-list/gpus.service';

@Component({
  selector: 'app-gpu-create',
  templateUrl: './gpu-create.component.html',
  styleUrls: ['./gpu-create.component.css']
})
export class GpuCreateComponent implements OnInit {

  // tslint:disable-next-line:typedef
  enteredContent = '';
  enteredTitle = '';
  // tslint:disable-next-line:typedef
  onAddGpu(form: NgForm){
 if (form.invalid){
   return;
 }
 this.gpusService.addGpu(form.value.name, form.value.company, form.value.price,
   form.value.imgPath, form.value.description, form.value.imgPathCompanyLogo, form.value.numOfStars);

 form.resetForm();
  }

  constructor(public  gpusService: GpusService) { }

  ngOnInit(): void {

  }

}
