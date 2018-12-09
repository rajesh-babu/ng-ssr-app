import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'html-content-comp',
    templateUrl: './html-content.comp.html',
    styleUrls: ['./html-content.comp.css']
})
export class HtmlContentComponent implements OnInit {

    @Input() inputData: any;
    public txtContent:string;
    constructor() {

    }

    ngOnInit() {
        this.txtContent = this.inputData.tvalue;
    }

}
