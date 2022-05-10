import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ContentTypeSelectionComponent } from '../../modals/content-type-selection/content-type-selection.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
})
export class NavBarComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openContentCreationModal() {
    const dialogRef = this.dialog.open(ContentTypeSelectionComponent);
  }
}
