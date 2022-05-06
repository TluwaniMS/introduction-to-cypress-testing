import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarServiceService {
  constructor(private snackBar: MatSnackBar) {}

  successSnackBarDisplay(message: string) {
    this.snackBar.open(message, ``, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snack-bar-success-container',
    });
  }

  errorSnackBarDisplay(message: string) {
    this.snackBar.open(message, ``, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snack-bar-error-container',
    });
  }
}
