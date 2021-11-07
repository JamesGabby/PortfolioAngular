import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  overview = `A versatile and hardworking developer with a Masters degree
   in software engineering and a passion for computer science and philosophy. 
   Currently seeking a junior or graduate JavaScript Developer role in Manchester
    where I can put my skills and knowledge to good use. I'm very positive and have
     a growth mindset, always finding continuous ways to learn, improve and advance
      my technological and professional skill set.`;
  languages = `Proficiency in: JavaScript, TypeScript, Java, Node, Angular and SQL.`;
  other = `Worked with: ReactJS, ExpressJS, AWS, Google Cloud, PostgreSQL, MySQL, NoSQL, MongoDB, Android, 
  JQuery, WebAssembly, Emscripten, Ajax, APIs (REST+SOAP), HTML5, SCSS, JSP, MVC.`;
}
