import { Component } from '@angular/core';
import { Product } from '../../../products.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  newProduct: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    brand: '',
    availabilityStatus: '',
    stock: 0,
    images: ['']
  };

  onSubmit() {
    console.log('Product added:', this.newProduct);
    // Ideally: Call a product service to save this product
    alert('Product added successfully!');
  }
}
