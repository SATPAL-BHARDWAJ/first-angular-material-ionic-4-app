import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AMDModule } from '../amd.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [  
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AMDModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
