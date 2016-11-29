import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { DynamicPlaceholderDirective } from './dynamic-placeholder.directive';
import { InputComponent } from './input/input.component';
import { AppConfigService } from './shared/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    DynamicPlaceholderDirective,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
