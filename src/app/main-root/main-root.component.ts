import {Component, OnInit, ViewChild,
    ViewContainerRef, Inject,PLATFORM_ID,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { Title, TransferState, makeStateKey } from '@angular/platform-browser';
import { Comp1} from '../comp-1/comp-1.component';
import { Comp2} from '../comp-2/comp-2.component';

import { HtmlContentComponent} from '../html-content/html-content.comp';
import { CMSService } from '../services/cms.services';


const CMSAPI_KEY = makeStateKey('cmsapi');

@Component({
    selector: 'main-root',
    templateUrl: './main-root.component.html',
    styleUrls: ['./main-root.component.css']
})
export class MainRootComponent implements OnInit {

    componentRef: any;
    componentRef2: any;
    currentURL: string = '';
    cmsAPI: any;
    private isServer: boolean;
  
    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

    constructor(private router: Router, private _CMSService: CMSService, private title:Title, 
                private resolver: ComponentFactoryResolver, private tstate: TransferState, @Inject(PLATFORM_ID) platformId) {
        this.isServer = isPlatformServer(platformId);
        this.router.events.subscribe((currentRoute) => {
            if(this.currentURL !== this.router.url) {
                console.log( this.router.url); 
                this.currentURL = this.router.url;
            }                     
        })
    }

    ngOnInit() { 
        const _that = this;

        if (this.tstate.hasKey(CMSAPI_KEY)) {
            // We are in the browser
            const data = this.tstate.get(CMSAPI_KEY, '');
            this.render(data);
        } else {
            this.callAPI();
        }
    }
    callAPI(){
        const _that = this;
        this._CMSService.loadCMSData(this.router.url)
        .subscribe(data => {
            
            this.title.setTitle('Homepage');                
            _that.tstate.set(CMSAPI_KEY, data as any);
            _that.render(data);
        });
    }
    render(data){
        if(data && data.compArr){
            for(let i=0;i<data.compArr.length;i++) {
                console.log(data.compArr[i].componenttype)
                if(data.compArr[i].componenttype === 'Comp1'){
                    this.createComponent(Comp1, data.compArr[i].data);
                }if(data.compArr[i].componenttype === 'Comp2'){
                    this.createComponent(Comp2, data.compArr[i].data);
                }else{
                    this.createComponent(HtmlContentComponent, data.compArr[i].data);
                }
            }
        }
    }
    createComponent(componenttype, data) {
        const factory = this.resolver.resolveComponentFactory(componenttype);
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.inputData = data;
    }
    destroyComponent() {
        this.componentRef.destroy();
    }

}
