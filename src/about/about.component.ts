import { Component } from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  overview = `A recent MSc software engineering graduate. I'm a versatile and hardworking 
  developer with a passion for computer science and philosophy. 
  Currently seeking a junior or graduate developer role in Manchester
  where I can put my skills and knowledge to good use. I'm optimistic and have
  a growth mindset; always finding continuous ways to learn, improve and advance
  my technological and professional skills.`;
  languages = `The languages I'm proficient with are: JavaScript, TypeScript, Java, C++ and SQL.`;
  frameworks = `The frameworks I'm familiar with are: Angular and Spring.`;
  libraries = `The libraries I'm comfortable with are: Express, React and JQuery.`;
  cloud = `The cloud providers I'm comfortable with are: Google Cloud Provider (GCP), Amazon Web Services (AWS)`;
  databases = `The databases I know are: MySQL, any RDBM, MongoDB`;
  interests = `My interests include: Gaming, working out, coding, AI, philosophy, watching TV series and movies, 
               listening to music and playing some guitar.`;
  sent = 'For business enquiries you can reach me at: ';
  email = 'jamesgabbitus@gmail.com';
  number = '+44(0)7519247007';
}
