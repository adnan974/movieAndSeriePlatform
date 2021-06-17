import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { MovieService } from 'src/app/core/services/movie.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModuleModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers:[MovieService]
})
export class HomePageModule {}
