import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tic-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() value: 'X' | 'O';
  @Input() isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
