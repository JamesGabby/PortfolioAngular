import { Component } from "@angular/core";
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  longText = `An intensive MSc conversion course designed to equip 
  the student with up-to-date skills and knowledge in industry relevant 
  object oriented programming and full-stack development.`;
  shortText = `Projects on this course included: `;
}
