import { Component, OnInit } from '@angular/core';
import { SuperPowersService } from '../../services/super-powers.service';
import { ContentDeletionConfirmationComponent } from '../../modals/content-deletion-confirmation/content-deletion-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-super-powers-display',
  templateUrl: './super-powers-display.component.html',
  styleUrls: ['./super-powers-display.component.sass'],
})
export class SuperPowersDisplayComponent implements OnInit {
  superPowers: any[] = [];
  constructor(
    private superPowersService: SuperPowersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.superPowers = this.superPowersService.getAllSuperPowers();
  }

  deleteSuperPower(superPowerId: string) {
    this.superPowersService.deleteSuperPowerById(superPowerId);
    this.superPowers = this.superPowersService.getAllSuperPowers();
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
