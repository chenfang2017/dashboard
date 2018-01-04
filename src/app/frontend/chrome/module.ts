import {ChromeComponent} from './component';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatIconRegistry, MatProgressSpinnerModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {PipesModule} from "../common/pipes/module";

@NgModule({
  declarations: [
    ChromeComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [ChromeComponent]
})
export class ChromeModule {
}
