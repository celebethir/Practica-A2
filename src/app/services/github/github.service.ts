import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = "39a1644b39d357652988";
  private client_secret = "9987f32892e1dfd03978c94ce68c5df9ea7316b8";

  constructor(private _http: Http) {
   }

   getUser(){
     return this._http.get('/github/users/' + this.username + '?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json())
   }

   getRepos(){
     return this._http.get('/github/users/' + this.username + '/repos' + '?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json())
   }

   updateUser(username){
     this.username = username;
   }
}
