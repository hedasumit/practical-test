import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddDialogComponent} from './../product/add/add.dialog.component';
import {Product} from './../models/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, public productService: ProductService) { }
  search = '';
  products : any = [];
  ngOnInit(): void {
    this.refreshTable();
  }
  
  private refreshTable() {
   this.products =  this.productService.getAllProducts();
  }
  
  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {product: Product }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside ProductService
        this.refreshTable();
      }
    });
  }
}
