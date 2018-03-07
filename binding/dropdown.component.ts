
import { Component} from '@angular/core';
//Model
interface Product {
  id: number;
  name: string;
}

@Component({
    selector: 'app-dropdown',
    template: `
     <h3>Select your product to buy</h3>
    <select (change)="onSelect($event.target.value)">
      <option *ngFor="let product of products" [value]="product.id">
         {{product.name}}
      </option>
    </select>
    <br/>
   
    <h2 class="well">Thanks for selecting   {{selectedProduct.name}}</h2>
    `
    
})
export class DropDownComponent { 
    public products: Product[] = [
      { "id": 1, "name": "Monitor" },
      { "id": 2, "name": "Keyboard" },
      { "id": 3, "name": "Mouse" }
    ];
    public selectedProduct: Product = this.products[0];
    
    onSelect(productId:any) { 
        this.selectedProduct = null;
        for (let i = 0; i < this.products.length; i++){
          if (this.products[i].id == productId) {
            this.selectedProduct = this.products[i];
          }
        }
    }
}
