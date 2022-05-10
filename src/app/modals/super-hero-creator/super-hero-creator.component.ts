import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-super-hero-creator',
  templateUrl: './super-hero-creator.component.html',
  styleUrls: ['./super-hero-creator.component.sass']
})
export class SuperHeroCreatorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  superHeroCreationForm = this.fb.group({
    _id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    superPowers: ['', [Validators.required]],
  });
}
