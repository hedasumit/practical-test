import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from './remove/remove.dialog.component';
import { RestoreDialogComponent } from './restore/restore.dialog.component';

import { ProductService } from './../services/product.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashProducts: any = [];
  constructor(private productService: ProductService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTrashProducts();
  }
  private getTrashProducts() {
    this.trashProducts = this.productService.getAllTrashProducts();
  }

  restore = (id, title) => {
    const dialogRef = this.dialog.open(RestoreDialogComponent, {
      data: { id, title }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getTrashProducts();
      }
    });
  }

  remove = (id, title) => {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: { id, title }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getTrashProducts();
      }
    });
  }

}
