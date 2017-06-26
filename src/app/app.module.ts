import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';//<--NgModel lives here
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

//Import for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
//mock data service
import {InMemoryDataService} from './in-memory-data.service';


import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import {SlaveFormComponent} from './slave-form.component';

import {HeroService} from './hero.service';

import {AppRoutingModule} from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, //<--import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule    
  ],
  declarations: [ 
    AppComponent , 
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SlaveFormComponent
  ],
  providers:[
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
