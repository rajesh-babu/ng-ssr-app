import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {MainRootComponent} from "./main-root/main-root.component";


import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { CMSService } from './services/cms.services';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MainRootComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        CMSService
    ],
    bootstrap: [AppComponent],
    entryComponents: [MainRootComponent]
})
export class AppModule {
}
