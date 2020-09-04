import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { LeftFooterComponent } from './left-footer/left-footer.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { SafePipe } from './safe.pipe';
import { LazyloadDirective } from './lazyload.directive';
import { StaticImgComponent } from './static-img/static-img.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { StartImagesComponent } from './start-images/start-images.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    LeftFooterComponent,
    ProjectDescriptionComponent,
    SafePipe,
    LazyloadDirective,
    StaticImgComponent,
    ProjectContentComponent,
    StartImagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
