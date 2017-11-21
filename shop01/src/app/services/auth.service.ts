import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = "http://localhost:8080"; // Development Domain - Not Needed in Production

  constructor(
    private http: Http
  ) { }
  cart(){
    return this.http.get(this.domain + '/authentication/cart').map(res => res.json());
  }

  addCart(id) {
    return this.http.get(this.domain + '/authentication/addCart'+ id).map(res => res.json());
  }
  search(){
    return this.http.get(this.domain + './authentication/search').map(res => res.json());
  }

  product(){
    return this.http.get(this.domain + './authentication/listproduct').map(res => res.json());
  }

  listproduct(){
    return this.http.get(this.domain + '/authentication/product').map(res => res.json());
  }

  addproduct(product){
    return this.http.post(this.domain + '/authentication/add-product',product).map(res => res.json()); 
  }
  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }



}
