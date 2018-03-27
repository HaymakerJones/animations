import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { MultistateDemoComponent } from './multistate-demo/multistate-demo.component';
import { KeyframesDemoComponent } from './keyframes-demo/keyframes-demo.component';
import { ListAnimationDemoComponent } from './list-animation-demo/list-animation-demo.component';
import { SpinDemoComponent } from './spin-demo/spin-demo.component';
import { BlinkDemoComponent } from './blink-demo/blink-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupDemoComponent,
    MultistateDemoComponent,
    KeyframesDemoComponent,
    ListAnimationDemoComponent,
    SpinDemoComponent,
    BlinkDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
