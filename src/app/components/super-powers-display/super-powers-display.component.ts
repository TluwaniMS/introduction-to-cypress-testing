import { Component, OnInit } from '@angular/core';
import { SuperPowersService } from '../../services/super-powers.service';
import { ContentDeletionConfirmationComponent } from '../../modals/content-deletion-confirmation/content-deletion-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';
import { DefaultResponseMessages } from '../../enumerators.ts/default-response-messages';

@Component({
  selector: 'app-super-powers-display',
  templateUrl: './super-powers-display.component.html',
  styleUrls: ['./super-powers-display.component.sass'],
})
export class SuperPowersDisplayComponent implements OnInit {
  superPowers: any[] = [];
  constructor(
    private superPowersService: SuperPowersService,
    public dialog: MatDialog,
    private snackbarService: SnackBarServiceService
  ) {}

  ngOnInit(): void {
    this.superPowers = this.superPowersService.getAllSuperPowers();
  }

  deleteSuperPower(superPowerId: number) {
    this.superPowersService.deleteSuperPowerById(superPowerId);
    this.superPowers = this.superPowersService.getAllSuperPowers();
    this.snackbarService.successSnackBarDisplay(
      DefaultResponseMessages.OperationCompletedSuccessfully
    );
  }

  confirmSuperPowerDeletion(superPower: any) {
    const dialogRef = this.dialog.open(ContentDeletionConfirmationComponent, {
      data: { title: superPower.power },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result ? this.deleteSuperPower(superPower._id) : '';
    });
  }
}
