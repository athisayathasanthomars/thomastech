import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes,provideRouter } from '@angular/router';
import { HomePageComponent } from './app/home-page/home-page.component';
import { AboutPageComponent } from './app/about-page/about-page.component';
import { CoursesPageComponent } from './app/courses-page/courses-page.component';
import { ContactusPageComponent } from './app/contactus-page/contactus-page.component';

const routes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'aboutus',component:AboutPageComponent},
  {path:'courses',component:CoursesPageComponent},
  {path:'contactus',component:ContactusPageComponent},
  {path:'**',component:HomePageComponent},
];

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));
//provide the routes in the app components.  
bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes)],
});

  