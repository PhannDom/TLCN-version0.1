import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  product = [];
  carts;
  totalPrice;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
      this.getlistproduct();
  }

  ngOnInit() {
  }

  getlistproduct() {
    this.authService.listproduct().subscribe(data => {
      if (!data) {

      }
      else {
        this.product = data;
        console.log(data);
      }
    });
  }
  addToCart(id){
    this.authService.addCart(id).subscribe(data =>{
      this.carts = data;
    })
  }

}
