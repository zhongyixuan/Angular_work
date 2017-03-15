import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private _http: Http) {

    }

    addAccount(data: any) {
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // let body = JSON.stringify(data);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:9239/api/login/',data, { headers: headers })
            .map(res => res.json())
    }

}