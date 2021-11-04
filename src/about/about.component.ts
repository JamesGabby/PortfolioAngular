import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  count = 0;


  onLogMe() {
    this.count++;
    alert(this.count);
  }
  
}
