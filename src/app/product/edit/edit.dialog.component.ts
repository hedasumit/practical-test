import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: './edit.dialog.html',
  styleUrls: ['./edit.dialog.css']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: any, public productService: ProductService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.productService.updateProduct(this.product);
  }
}
