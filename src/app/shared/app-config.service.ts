import { Injectable, Component} from '@angular/core';
import { Http, JsonpModule, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class AppConfigService {

	constructor (private http: Http) {}

	getConfigFile() {
		return this.http.get('/data/appConfig.json').map((res:Response) => res.json());
	}

}
