import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ExperienceComponent } from 'src/experience/experience.component';
import { AboutComponent } from 'src/about/about.component';
import { EducationComponent } from 'src/education/education.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'education', component: EducationComponent},
      {path: 'experience', component: ExperienceComponent}
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
