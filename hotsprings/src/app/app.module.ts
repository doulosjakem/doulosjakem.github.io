import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BotfooterComponent } from './botfooter/botfooter.component';
import { SpringsComponent } from './springs/springs.component';
import { LocationsComponent } from './locations/locations.component';
import { FactsComponent } from './facts/facts.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    BotfooterComponent,
    SpringsComponent,
    LocationsComponent,
    FactsComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent},
      {path: 'home', component: WelcomeComponent},
      {path: 'springs', component: SpringsComponent},
      {path: 'locations', component: LocationsComponent},
      {path: 'facts', component: FactsComponent},      
      {path: 'about', component: AboutComponent},      
      { path: '**', pathMatch: 'full', 
       component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
