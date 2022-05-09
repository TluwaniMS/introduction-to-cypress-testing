import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../../services/super-heroes.service';
import { SuperHeroCreatorComponent } from '../../modals/super-hero-creator/super-hero-creator.component';
import { ContentDeletionConfirmationComponent } from '../../modals/content-deletion-confirmation/content-deletion-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-super-heroes-display',
  templateUrl: './super-heroes-display.component.html',
  styleUrls: ['./super-heroes-display.component.sass'],
})
export class SuperHeroesDisplayComponent implements OnInit {
  superHeroes: any[] = [];

  constructor(
    private superHeroesService: SuperHeroesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.superHeroes = this.superHeroesService.getSuperHeroes();
  }

  deleteSuperHero(superHeroId: string) {
    this.superHeroesService.deleteSuperHeroById(superHeroId);
    this.superHeroes = this.superHeroesService.getSuperHeroes();
  }

  confirmSuperHeroDeletion() {
    const dialogRef = this.dialog.open(ContentDeletionConfirmationComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
