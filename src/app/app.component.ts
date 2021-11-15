import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'James Gabbitus Portfolio';
  svgColor = 'black';
  toggleControl = new FormControl(false);
  lineColor = 'black';
  toolbarShadow = '';
  routerShadow = '';
  buttonBorders = '1px solid #EEE8AA';
  buttonBack = '';
  routerBorder = '1px solid #EEE8AA';
  fill = 'yellow';
  nameVisibility = '';
  homeText = '';
  routerColor = 'red';

  constructor(private http: HttpClient, private service: AppServiceService) {}

  hideHomeText() {
    this.homeText = 'none';
  }

  postDataToApi(a: any) {
    this.service.postData(a);
  }

  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';

      if (this.className = darkMode) {
        this.className = darkClassName;
        this.svgColor = 'white';
        this.lineColor = 'white';
        this.toolbarShadow = '0 4px 8px 0 red';
        this.buttonBorders = '1px solid red';
        this.buttonBack = '#282828';
        this.routerBorder = '1px solid 	red';
        this.routerShadow = '0 4px 19px 0 red';
        this.routerColor = 'yellow'
      } else {
        this.className = '';
        this.svgColor = 'black'
        this.lineColor = 'black';
        this.toolbarShadow = '';
        this.buttonBorders = '1px solid #EEE8AA';
        this.buttonBack = '#FFFFF0';
        this.routerBorder = '';
        this.routerShadow = '';
      }
    });
  }

 
  
}

