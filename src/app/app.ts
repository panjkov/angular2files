import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    Routes,
    RouterModule,
    Router  
} from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpModule } from '@angular/http';

import  { Login } from "./login/login";
import  { Files } from "./files/files";
import  { AuthHelper } from "../authHelper/authHelper";

const routes: Routes = [
    {path: 'login',        component: Login },
    {path: 'files',        component: Files }
    
];
export const routing = RouterModule.forRoot(routes);

@Component(
    {
        selector: "files-app",
        template: `
        <router-outlet></router-outlet>
        `

    })

export class AppComponent {
    constructor(private router:Router, auth:AuthHelper) {
        if(auth.access_token !== null) {
            // if authenticated show files
            this.router.navigate(['/files']);
        }
        else { 
            // else show login
            this.router.navigate(['/login']);
        }
    }
}



@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations:[AppComponent, Login, Files],
    providers:[AuthHelper, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
    })
  export class AppModule {
  }
  
  platformBrowserDynamic().bootstrapModule(AppModule);