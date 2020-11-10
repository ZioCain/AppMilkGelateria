import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Injectable({
	providedIn: 'root'
})
export class APIService {
	private readonly SERVER:string = "https://app.milk.it/";
	constructor(
		private http:HttpClient,
		private gb:Facebook
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
		this.fb.login(['public_profile', 'email'])
		.then((res:FacebookLoginResponse)=>console.log('logged into facebook', res))
		.catch(e=>console.log('ERROR!',e));
		return this.http.post(SERVER+'signin',{});
	}
	public LoginGoogle():Observable<any>{
		return this.http.post('https://auth.google.com/',{});
	}
	public GetOfferte():Observable<any>{
		return this.http.get(this.SERVER+"offerte");
	}
}
