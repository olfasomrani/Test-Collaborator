import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCollaboratorComponent } from './list-collaborator/list-collaborator.component';
import { DetailsCollaboratorComponent } from './details-collaborator/details-collaborator.component';
import { BorderCardDirective } from './border-card.directive';
import { CollaboratorTypeColorPipe } from './collaborator-type-color.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCollaboratorComponent,
    DetailsCollaboratorComponent,
    BorderCardDirective,
    CollaboratorTypeColorPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
