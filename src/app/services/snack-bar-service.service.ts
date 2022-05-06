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
      duration: 2000,
    });
  }

  errorSnackBarDisplay(message: string) {
    this.snackBar.open(message, ``, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'snack-bar-error-container',
      duration: 2000,
    });
  }
}
