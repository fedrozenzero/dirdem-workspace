import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuseBitModule } from 'libraries/fuse-bit/public-api';
import { TechnicalSpecificationsModule } from 'libraries/technical-specifications/lib/technical-specifications.module';
import { MaterialModule } from 'libraries/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuseBitModule,
    TechnicalSpecificationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
