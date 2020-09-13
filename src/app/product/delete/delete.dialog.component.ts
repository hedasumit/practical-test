import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {ProductService} from '../../services/product.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: './delete.dialog.html',
  styleUrls: ['./delete.dialog.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: any, public productService: ProductService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.productService.deleteProduct(this.product.id);
  }
}
