import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.css'
})
export class CardLabelComponent implements OnInit {
  @Input()
  gameLabel:string = ""

  constructor(){  }

  ngOnInit(): void {

  }
}
