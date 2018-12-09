import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule, Injector, PLATFORM_ID, Inject } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Comp1 } from "./comp-1/comp-1.component";
import { Comp2 } from "./comp-2/comp-2.component";
import {MainRootComponent} from "./main-root/main-root.component";
import { isPlatformBrowser } from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { CMSService } from './services/cms.services';
import { HtmlContentComponent } from './html-content/html-content.comp';

declare var require: any;

@NgModule({
    declarations: [
        AppComponent,
        Comp1,
        Comp2,
        HtmlContentComponent,
        MainRootComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserTransferStateModule
    ],
    providers: [
        CMSService
    ],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent, MainRootComponent, Comp1, Comp2, HtmlContentComponent]
})
export class AppModule {
    constructor(private injector: Injector, @Inject(PLATFORM_ID) platformId: Object) {

        if (isPlatformBrowser(platformId)) {
          const { createCustomElement } = require('@angular/elements');
          // you can use createCustomElement here
          const homeElement = createCustomElement(Comp1, { injector });
    
          customElements.define('home-comp', homeElement);
        }
    
      }
    
      ngDoBootstrap() { }
}
