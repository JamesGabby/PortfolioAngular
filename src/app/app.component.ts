import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'MyPortfolio';
  svgColor = 'black';
  toggleControl = new FormControl(false);
  toolbarColor = '';
  lineColor = 'black';

  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';

      if (this.className = darkMode) {
        this.className = darkClassName;
        this.svgColor = 'white';
        this.lineColor = 'white';
      } else {
        this.className = '';
        this.svgColor = 'black'
        this.lineColor = 'black';
      }
      
    });
  }

  
}
