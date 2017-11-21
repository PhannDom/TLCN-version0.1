import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) 
    {
      this.createForm()
    }

     createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        this.validateName
      ])],
      price: ['', Validators.compose([
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(100)
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ])]
    })
  }
  validateName(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateName': true }
    }
  }

  onAddProductSubmit() {
    const product = {
      name: this.form.get('name').value,
      price: this.form.get('price').value,
      description: this.form.get('description').value
    }

    this.authService.addproduct(product).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.message = data.message;
      } else {
        this.messageClass = 'alert alert-success'; // Set a success class
        this.message = data.message; // Set a success message
      }
    })
  }

  ngOnInit() {
  }

}
