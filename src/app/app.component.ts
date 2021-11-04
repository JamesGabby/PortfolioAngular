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
  lineColor = 'black';
  toolbarShadow = '';
  buttonBorders = '1px solid #DCDCDC';
  fill = 'yellow'

  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';

      if (this.className = darkMode) {
        this.className = darkClassName;
        this.svgColor = 'white';
        this.lineColor = 'white';
        this.toolbarShadow = '0 4px 8px 0 #4666FF';
        this.buttonBorders = '1px solid #A1B1FF';
        

      } else {
        this.className = '';
        this.svgColor = 'black'
        this.lineColor = 'black';
        this.toolbarShadow = '';
        this.buttonBorders = '1px solid #DCDCDC';

      }
      
    });
  }

  
}
