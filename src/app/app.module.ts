import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CriminalFileComponent } from './criminal-file/criminal-file.component';
import { FormsModule } from '@angular/forms';
import { LacraDetailComponent } from './lacra-detail/lacra-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CriminalFileComponent,
    LacraDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
