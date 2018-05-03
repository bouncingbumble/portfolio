import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolio-list/portfolio-item/portfolio-item.component';
import { PortfolioService } from './portfolio.service';
import { AboutComponent } from './navbar/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    PortfolioListComponent,
    PortfolioItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
