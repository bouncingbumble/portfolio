import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolio-list/portfolio-item/portfolio-item.component';
import { PortfolioService } from './portfolio.service';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    PortfolioListComponent,
    PortfolioItemComponent,
    AboutComponent,
    PricingComponent,
    BlogComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
