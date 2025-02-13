import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';  // <-- Make sure this is imported

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,   
    FormsModule,    
    HttpClientModule  // <-- Make sure it's added here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
