import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class APIService {
	readonly SERVER:string = "https://app.milk.it/";
	constructor(
		private http:HttpClient
	){}
	public GetOfferte():Observable<any>{
		return this.http.get(this.SERVER+"offerte");
	}
}
