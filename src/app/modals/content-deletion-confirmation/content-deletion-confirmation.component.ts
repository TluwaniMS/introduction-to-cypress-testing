import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content-deletion-confirmation',
  templateUrl: './content-deletion-confirmation.component.html',
  styleUrls: ['./content-deletion-confirmation.component.sass'],
})
export class ContentDeletionConfirmationComponent implements OnInit {
  constructor(
    private matDialogRef: MatDialogRef<ContentDeletionConfirmationComponent>
  ) {}

  ngOnInit(): void {}

  closeModal() {
    this.matDialogRef.close();
  }
}
