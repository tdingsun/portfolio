import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { LeftFooterComponent } from './left-footer/left-footer.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { RightComponent } from './right/right.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    LeftFooterComponent,
    ProjectDescriptionComponent,
    RightComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
