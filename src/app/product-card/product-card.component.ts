import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../products.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StockHighlightDirective } from '../stock-highlight.directive';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule,CommonModule,StockHighlightDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
@Output() addToCart= new EventEmitter<Product>();
@Output() deleteProduct = new EventEmitter<number>();
Delete() {
  this.deleteProduct.emit(this.product.id);
}

constructor(private productService: ProductService){};
AddCart(){
  this.addToCart.emit(this.product);
}
showFullDescription = false;
  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
}
