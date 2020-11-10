import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private readonly SERVER:string = "https://app.milk.it/";
	constructor(
		private http:HttpClient,
		private api:APIService
	){}
	public Login(email:string, password:string):Observable<any>{
		return this.api.Login(email, password).pipe(

		);
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
	public GetUserData():any{
		var data=localStorage.getItem('userData');
		return data!==null?JSON.parse(data):null;
	}
	public SaveUserData(data:any){
		localStorage.setItem('userData', JSON.stringify(data));
	}
	public GetCard(){
		var data=localStorage.getItem('card');
		return data!==null?JSON.parse(data):null;
	}
}
