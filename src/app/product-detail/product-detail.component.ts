import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './../product/edit/edit.dialog.component';
import { DeleteDialogComponent } from './../product/delete/delete.dialog.component';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = {};
  id: number;
  constructor(route: ActivatedRoute, private router: Router, public dialog: MatDialog, private productService: ProductService) {
    route.params.subscribe(params => {
      this.getProductDetail(params.id);
    });
  }
  ngOnInit(): void {
  }

  public getProductDetail = (id) => {
    this.product = this.productService.getProduct(id);
  }

  startEdit() {
    // index row is used just for debugging proposes and can be removed
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        id: this.product.id,
        title: this.product.title,
        description: this.product.description,
        image: this.product.image,
        location: this.product.location,
        inStock: this.product.inStock,
        price: this.product.price,
        rating: this.product.rating
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getProductDetail(this.product.id);
      }
    });
  }

  deleteItem() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id: this.product.id, title: this.product.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.router.navigate(['/home']);
      }
    });
  }

}
