import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Router, RouterModule} from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GpuComponent } from './gpu/gpu.component';

import { CpuComponent } from './cpu/cpu.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { GpuCreateComponent } from './gpu/gpu-create/gpu-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // @ts-ignore
// import {MatInputModule} from '@angular/material';
// @ts-ignore
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GpuListComponent } from './gpu-list/gpu-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {GpusService} from './gpu-list/gpus.service';



const config = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  projectId: '<your-project-id>',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GpuComponent,
    CpuComponent,
    SearchItemComponent,
    SearchPageComponent,
    GpuCreateComponent,
    HeaderComponent,
    GpuListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'gpus', component: GpuComponent},
      {path: 'cpus', component: CpuComponent},
      {path: 'search', component: SearchPageComponent},
    ]), BrowserAnimationsModule, MatCardModule
  ],
  providers: [GpusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
