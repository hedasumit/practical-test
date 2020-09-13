import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/product';

interface Location {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add.dialog',
  templateUrl: './add.dialog.html',
  styleUrls: ['./add.dialog.css']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product,
              public productService: ProductService) { }
    locations: Location[] = [
      {value: 'New York', viewValue: 'New York'},
      {value: 'Washington', viewValue: 'Washington'},
      {value: 'New Jersy', viewValue: 'New Jersy'}
    ];

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);


  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.productService.addProduct(this.product);
  }
}
