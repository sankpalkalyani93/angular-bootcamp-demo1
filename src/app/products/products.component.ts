import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: string[] = []
  constructor(private productService: ProductService){}  // dependency injection
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (value) => {
        this.products = value;
      },
      (error) => {
        console.log("Error received : ", error);
      }, 
      () => {
        console.log("Process completed");
      }

    );
  }


}
