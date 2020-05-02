import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormCollegueComponent } from './form-collegue/form-collegue.component';
import { Routes, RouterModule } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';


export const ROUTES: Routes = [
  { path: 'accueil', component: RechercheParNomComponent},
  { path: 'gallerie', component: GallerieComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    FormCollegueComponent,
    GallerieComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot (ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
