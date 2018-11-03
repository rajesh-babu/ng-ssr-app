import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {map} from 'rxjs/operators';
import { RequestOptions } from "@angular/http";


@Injectable()
export class CMSService {

    static readonly API_URL = 'http://localhost:3000/getCMSData';

    constructor(private http: HttpClient) {

    }

    loadCMSData(url: string): any {

        return this.http.get(`${CMSService.API_URL}`, { params: {reqURL: url }})
    }
}