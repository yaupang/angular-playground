import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../../../http.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  subscription: Subscription = new Subscription;
  userName: FormControl = new FormControl('');
  brews: Object;
  exceedMaxLength: number;




  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.subscription.add(
      this._http.getBeer().subscribe(data => {
        this.brews = data;
        console.log(this.brews);
      })
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  inputValueCount(inputValue) {
    inputValue = inputValue.length;
    console.log(inputValue);
  }

}
