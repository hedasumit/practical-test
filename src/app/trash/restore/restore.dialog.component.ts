import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {ProductService} from '../../services/product.service';


@Component({
  selector: 'app-restore.dialog',
  templateUrl: './restore.dialog.html',
  styleUrls: ['./restore.dialog.css']
})
export class RestoreDialogComponent {

  constructor(public dialogRef: MatDialogRef<RestoreDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: any, public productService: ProductService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmRestore(): void {
    this.productService.restoreProduct(this.product.id);
  }
}
