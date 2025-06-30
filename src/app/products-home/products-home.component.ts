import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../products.model';
import { ProductService } from '../product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products-home',
  imports: [FormsModule,CommonModule,ProductCardComponent,RouterModule],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {
  constructor(private productService: ProductService){}
  toggleAddForm() {
  this.showAddForm = !this.showAddForm;
}
  count=0;
  selectedFilter = 'All';
  searchTerm = '';
  cart: Product[] = [];
  products: Product[]=[];
  showAddForm = false;

  productForm: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    brand: '',
    availabilityStatus: 'In Stock',
    stock: 0,
    images: [],

  };

imageUrl: string = '';



  ngOnInit(){
    this.loadProducts();
  }
  loadProducts(){
    this.productService.getProducts().subscribe(data=>this.products=data);
  }
  addOrUpdateProduct(){
    this.productForm.images = this.imageUrl ? [this.imageUrl] : [];
    if (this.productForm.id){
      this.productService.editProduct(this.productForm.id,this.productForm).subscribe((updatedTask)=>{
        const index= this.products.findIndex((t)=>t.id===updatedTask.id);
        if (index !==-1){
          this.products[index]=updatedTask;
          this.reset();
        }
      })
    }
    else{
    const { id, ...productWithoutId } = this.productForm; // Remove id
    this.productService.addProducts(productWithoutId).subscribe((newTask) => {
      this.products.push(newTask);
      this.reset();

  });
  }}
  editTask(product: Product){
    this.productForm={...product}

    
  }
  deleteProduct(id: number) {
  this.productService.deleteProduct(id).subscribe(() => {
    this.products = this.products.filter(p => p.id !== id);
  });
}

  
reset() {
  this.productForm = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    brand: '',
    availabilityStatus: 'In Stock',
    stock: 0,
    images: [],
  };
  this.imageUrl = '';
  this.showAddForm = false;
}





  get filteredProducts(): Product[] {
    let filtered = [...this.products];

    // Stock filter
    if (this.selectedFilter === 'InStock') {
      filtered = filtered.filter(p => p.availabilityStatus === 'In Stock');
    } else if (this.selectedFilter === 'OutOfStock') {
      filtered = filtered.filter(p => p.availabilityStatus === 'Low Stock');
    }

    // Search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        (p.title?.toLowerCase().includes(term)?? false) ||
        (p.brand?.toLowerCase().includes(term) ?? false)
      );
    }

    return filtered;
  }

  //  dropdown 
  onFilterChange(event: Event): void {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
  }

  //  search 
  onSearchChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  // cart
  onAddToCart(product: Product): void {
    this.cart.push(product);
    this.count = this.cart.length;
  }




// addProduct() {
//   const newId = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;

//   const productToAdd: Product = {
//     ...this.newProduct,
//     id: newId,
//     images: this.imageUrl ? [this.imageUrl] : []
//   };

//   this.productService.addProducts(productToAdd).subscribe({
//     next: (createdProduct: Product) => {
//       this.products.push(createdProduct);  // update local list
//       this.resetAddForm();
//       this.showAddForm = false;
//     },
//     error: (err) => {
//       console.error('Failed to add product:', err);
//     }
//   });
// }



}
// removeProduct(id: number) {
//   this.products = this.products.filter(p => p.id !== id);
// }


