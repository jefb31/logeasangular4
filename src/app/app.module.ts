import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamilleComponent } from './famille/famille.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { JournaldevComponent } from './journaldev/journaldev.component';
import{RouterModule, Routes}from'@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FamilleComponent,
    PersonnesComponent,
    AnnuaireComponent,
    JournaldevComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {path:'', component: FamilleComponent},
        {path: '', component: AnnuaireComponent}

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
