import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CMSService } from '../services/cms.services';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'main-root',
    templateUrl: './main-root.component.html',
    styleUrls: ['./main-root.component.css']
})
export class MainRootComponent implements OnInit {

    public compArr:any;
    constructor(private router: Router, private _CMSService: CMSService, private title:Title) {
    }

    ngOnInit() {

        console.log(this.router.url);
        this._CMSService.loadCMSData(this.router.url)
            .subscribe(data => {
                this.title.setTitle('Homepage');
                this.compArr = data.data;
            });
    }

}
