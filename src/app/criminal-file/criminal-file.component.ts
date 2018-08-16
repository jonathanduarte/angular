import { Component, OnInit } from '@angular/core';
import { Delincuente } from '../delincuente';
import { LACRAS } from '../mock-delincuentes';


@Component({
  selector: 'app-criminal-file',
  templateUrl: './criminal-file.component.html',
  styleUrls: ['./criminal-file.component.css']
})
export class CriminalFileComponent implements OnInit {

  lacras = LACRAS;

  selectedLacra: Delincuente;

  constructor() { }

  ngOnInit() {
  }

  onSelect(lacra: Delincuente): void {
    this.selectedLacra = lacra;
  }
}
