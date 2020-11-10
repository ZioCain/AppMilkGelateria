import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class APIService {
	private readonly SERVER:string = "https://app.milk.it/";
	constructor(
		private http:HttpClient
	){}
	public Login(email:string, password:string):Observable<any>{
		return this.http.post(this.SERVER+"login",{
			email:email,
			password:password
		});
	}
	public LoginApple():Observable<any>{
		return this.http.post('https://auth.apple.com/',{});
	}
	public LoginFacebook():Observable<any>{
		return this.http.post('https://auth.apple.com/',{});
	}
	public LoginGoogle():Observable<any>{
		return this.http.post('https://auth.apple.com/',{});
	}
	public GetOfferte():Observable<any>{
		return this.http.get(this.SERVER+"offerte");
	}
}
