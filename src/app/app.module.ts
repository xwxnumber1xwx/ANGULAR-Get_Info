import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DisplayInfoComponent } from './display-info/display-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DisplayInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ DisplayInfoComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
