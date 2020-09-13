import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productChange: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  // Temporarily stores product from dialogs
  dialogProduct: any;
  products: any = [];
  trashProducts: any = [];
  constructor() { }

  get product(): Product[] {
    return this.productChange.value;
  }

  getDialogProduct() {
    return this.dialogProduct;
  }

  /** CRUD METHODS */
  getAllProducts(): void {
    this.products = this.localStorageGetItem('products');
    return this.products === null ? [] : this.products;
  }

  getAllTrashProducts(): void {
    this.trashProducts = this.localStorageGetItem('trashProducts');
    return this.trashProducts === null ? [] : this.trashProducts;
  }

  getProduct(id): void {
    this.products = this.localStorageGetItem('products');
    const result = this.products.filter(obj => {
      return obj.id === parseInt(id);
    });
    return result[0];
  }

  localStorageGetItem(key): void {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorageSetItem(key, value): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  // DEMO ONLY, you can find working methods below
  addProduct(product): void {
    product.id = new Date().getTime();
    this.products = this.localStorageGetItem('products');
    if (this.products === null) {
      this.localStorageSetItem('products', [{ id: product.id, image: product.image,
      title: product.title, description: product.description }]);
    } else {
      this.products.push({ id: product.id, image: product.image,
      title: product.title, description: product.description });
      this.localStorageSetItem('products', this.products);
    }
    // add in local storage with unique mili second id
  }

  updateProduct(product): void {
    this.dialogProduct = product;
    this.products = this.localStorageGetItem('products');
    const objIndex = this.products.findIndex((obj => obj.id == product.id));
    this.products[objIndex] = product;
    this.localStorageSetItem('products', this.products);
  }

  deleteProduct(id): void {
    this.products = this.localStorageGetItem('products');
    const result = this.products.filter(obj => {
      return obj.id === parseInt(id);
    });
    const newList = this.products.filter(obj => {
      return obj.id !== parseInt(id);
    });
    this.trashProducts = this.localStorageGetItem('trashProducts');
    if (this.trashProducts === null) {
      this.localStorageSetItem('trashProducts', result);
    } else {
      this.trashProducts.push(result[0]);
      this.localStorageSetItem('trashProducts', this.trashProducts);
    }
    this.localStorageSetItem('products', newList);
  }
  restoreProduct(id): void {
    // move that product to products
   this.trashProducts = this.localStorageGetItem('trashProducts');
   const result = this.trashProducts.filter(obj => {
      return obj.id === parseInt(id);
    });
   const newList = this.trashProducts.filter(obj => {
      return obj.id !== parseInt(id);
    });
   this.products = this.localStorageGetItem('products');
   if (this.products === null) {
      this.localStorageSetItem('products', result);
    } else {
      this.products.push(result[0]);
      this.localStorageSetItem('products', this.products);
    }
   this.localStorageSetItem('trashProducts', newList);
  }

  removeProduct(id): void {
    this.trashProducts = this.localStorageGetItem('trashProducts');
    const objIndex = this.trashProducts.findIndex((obj => obj.id == id));
    this.trashProducts.splice(objIndex, 1);
    this.localStorageSetItem('trashProducts', this.trashProducts);
  }
}



