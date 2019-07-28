import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.route';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

// components
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
