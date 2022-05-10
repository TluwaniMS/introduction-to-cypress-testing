import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuperHeroCreatorComponent } from '../super-hero-creator/super-hero-creator.component';
import { SuperPowerCreatorComponent } from '../super-power-creator/super-power-creator.component';

@Component({
  selector: 'app-content-type-selection',
  templateUrl: './content-type-selection.component.html',
  styleUrls: ['./content-type-selection.component.sass'],
})
export class ContentTypeSelectionComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private matDialogRef: MatDialogRef<ContentTypeSelectionComponent>
  ) {}

  ngOnInit(): void {}

  contentCreationSelection(contentType: string) {
    contentType === 'SuperHero'
      ? this.openSuperHeroCreationModal()
      : this.openSuperPowerCreationModal();
  }

  openSuperHeroCreationModal() {
    this.dialog.open(SuperHeroCreatorComponent);
    this.matDialogRef.close();
  }

  openSuperPowerCreationModal() {
    this.dialog.open(SuperPowerCreatorComponent);
    this.matDialogRef.close();
  }
}
