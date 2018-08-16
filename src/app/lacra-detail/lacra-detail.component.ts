import { Component, OnInit, Input } from '@angular/core';
import { Delincuente } from '../delincuente';

@Component({
  selector: 'app-lacra-detail',
  templateUrl: './lacra-detail.component.html',
  styleUrls: ['./lacra-detail.component.css']
})

export class LacraDetailComponent implements OnInit {
  @Input() lacra: Delincuente;

  constructor() { }

  ngOnInit() {
  }

}
