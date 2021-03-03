import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuseBitModule } from 'libraries/fuse-bit/public-api';
import { TechnicalSpecificationsModule } from 'libraries/technical-specifications/lib/technical-specifications.module';
import { MaterialModule } from 'libraries/material/material.module';
import { TerminalModule } from 'libraries/terminal/public-api';
import { SerialMonitorModule } from 'libraries/serial-monitor/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FuseBitModule,
    TechnicalSpecificationsModule,
    MaterialModule,
    TerminalModule,
    SerialMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
