import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {ProductService} from '../../services/product.service';


@Component({
  selector: 'app-remove.dialog',
  templateUrl: './remove.dialog.html',
  styleUrls: ['./remove.dialog.css']
})
export class RemoveDialogComponent {

  constructor(public dialogRef: MatDialogRef<RemoveDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: any, public productService: ProductService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmRemove(): void {
    this.productService.removeProduct(this.product.id);
  }
}
