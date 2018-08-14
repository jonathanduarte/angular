import { Component, OnInit } from '@angular/core';
import { Delincuente } from '../delincuente';


@Component({
  selector: 'app-criminal-file',
  templateUrl: './criminal-file.component.html',
  styleUrls: ['./criminal-file.component.css']
})
export class CriminalFileComponent implements OnInit {
  delincuente: Delincuente = {
    id: 1,
    firstName: "Brayan",
    lastName: "Perez",
    alias: "Mechitas",
    delito: "Robo"

  }

  constructor() { }

  ngOnInit() {
  }

}
