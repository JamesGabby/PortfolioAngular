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
  routerShadow = '';
  buttonBorders = '1px solid #DCDCDC';
  routerBorder = '1px solid #DCDCDC';
  animatedText = '';
  fill = 'yellow';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  hide = 'none';
  route = new FormControl(false);

  @HostBinding('class') className = '';

  ngOnInit2(): void {
    this.route.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';

      if (this.className = darkMode) {
        this.className = darkClassName;
        this.svgColor = 'white';
        this.lineColor = 'white';
        this.toolbarShadow = '0 4px 8px 0 #4666FF';
        this.buttonBorders = '1px solid #A1B1FF';
        this.routerBorder = '1px solid 	#1E90FF';
        this.routerShadow = '0 4px 19px 0 rgba(114, 108, 117, 0.562)';
        this.animatedText = 'white';
      } else {
        this.className = '';
        this.svgColor = 'black'
        this.lineColor = 'black';
        this.toolbarShadow = '';
        this.buttonBorders = '1px solid #DCDCDC';
        this.routerBorder = '';
        this.routerShadow = '';
        this.animatedText = 'black';
      }
    });
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';

      if (this.className = darkMode) {
        this.className = darkClassName;
        this.svgColor = 'white';
        this.lineColor = 'white';
        this.toolbarShadow = '0 4px 8px 0 #4666FF';
        this.buttonBorders = '1px solid #A1B1FF';
        this.routerBorder = '1px solid 	#1E90FF';
        this.routerShadow = '0 4px 19px 0 rgba(114, 108, 117, 0.562)';
      } else {
        this.className = '';
        this.svgColor = 'black'
        this.lineColor = 'black';
        this.toolbarShadow = '';
        this.buttonBorders = '1px solid #DCDCDC';
        this.routerBorder = '';
        this.routerShadow = '';
      }
    });
  }

  

  

  
}
