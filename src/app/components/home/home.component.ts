import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { AuthService } from '../../core/services/auth.service';
import { SliderComponent } from "../slider/slider.component";
import { CategorySliderComponent } from "../category-slider/category-slider.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategorySliderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  allProducts: Product[] = [];
  //Indicates that <allProducts> of type <Product[]> is an array of objects that conform to the Product interface.
  constructor(private _ProductsService: ProductsService, private token:AuthService) {
    this.token.saveUserData()
    //Calls the <saveUserData> method on the injected <AuthService> instance.
   }
  //Constructor injects the <ProductsService> into the <HomeComponent>.
  //Creates a <private> property named <_ProductsService> to store the injected service instance.

  getProducts = () => {
    //<getProducts>: Method that uses the injected <_ProductsService> to fetch product data.

    this._ProductsService.getProducts().subscribe({
      //Calls the <getProducts> method on the injected <_ProductsService>.
      //Subscribes to the observable returned by <getProducts> to handle the response.

      next: (response) => {
        //console.log(response);
        this.allProducts = response.data;
      }, //Defines a callback function to handle the successful response.
      error: (error) => {
        console.log(error);
      } //Defines a callback function to handle an error response.
    });
  };

  ngOnInit(): void {
    //Implements the <ngOnInit> lifecycle hook.
    this.getProducts();
    //Calls the <getProducts> method to fetch product data when the component is initialized.
  }
}