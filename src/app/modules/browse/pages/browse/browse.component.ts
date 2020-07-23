import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  userName: FormControl = new FormControl('');
  asd: FormControl = new FormControl('asd');




  constructor( ) { }

  ngOnInit() {
  }

  inputValueCount(inputValue) {
    inputValue = inputValue.length;
    console.log(inputValue);
  }

}
