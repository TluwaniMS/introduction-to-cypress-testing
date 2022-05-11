import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../../services/super-heroes.service';
import { ContentDeletionConfirmationComponent } from '../../modals/content-deletion-confirmation/content-deletion-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarServiceService } from '../../services/snack-bar-service.service';
import { DefaultResponseMessages } from '../../enumerators.ts/default-response-messages';

@Component({
  selector: 'app-super-heroes-display',
  templateUrl: './super-heroes-display.component.html',
  styleUrls: ['./super-heroes-display.component.sass'],
})
export class SuperHeroesDisplayComponent implements OnInit {
  superHeroes: any[] = [];

  constructor(
    private superHeroesService: SuperHeroesService,
    public dialog: MatDialog,
    private snackbarService: SnackBarServiceService
  ) {}

  ngOnInit(): void {
    this.superHeroes = this.superHeroesService.getSuperHeroes();
  }

  deleteSuperHero(superHeroId: number) {
    this.superHeroesService.deleteSuperHeroById(superHeroId);
    this.superHeroes = this.superHeroesService.getSuperHeroes();
    this.snackbarService.successSnackBarDisplay(
      DefaultResponseMessages.OperationCompletedSuccessfully
    );
  }

  confirmSuperHeroDeletion(superHero: any) {
    const dialogRef = this.dialog.open(ContentDeletionConfirmationComponent, {
      data: { title: superHero.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      result ? this.deleteSuperHero(superHero._id) : '';
    });
  }
}
