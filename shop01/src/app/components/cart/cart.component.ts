import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts;
  totalPrice;
  message;
  constructor(
    private authService: AuthService,
    private router : Router
  ) { }
  cartList(){
    this.authService.cart().subscribe(data => {
      this.carts = data.products; // Assign array to use in HTML
      this.totalPrice = data.totalPrice;
     this.message = data.message;
    });
  }
  

  ngOnInit() {
  }

}
