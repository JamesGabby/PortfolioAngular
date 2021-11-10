import { Component } from "@angular/core";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  longText = `An intensive MSc conversion course designed to equip 
  the student with up-to-date knowledge and skills in industry relevant 
  object oriented programming and full-stack development.`;
  shortText = `Some projects from this masters degree: `;
  longText2 = `Studying philosophical theories from figures like Socrates, Kant and Nietzsche,
   to more contemporary thinkers such as Frantz Fanon, Hannah Arendt and Judith Butler.
    Exploring theories about the meaning of life, the nature of reality, 
    who we are as individuals and society, and how these theories have shaped our ideas about humankind.
     Finding a personal philosophical voice and developing a rich set of invaluable analytical
      and critical skills for the future.`;
  shortText2 = `The units from each year on this course: `;
   
}
