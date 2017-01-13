import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { DynamicPlaceholderDirective } from './dynamic-placeholder.directive';
import { InputComponent } from './input/input.component';
import { AppConfigService } from './shared/app-config.service';
import { ElementHelpersService } from './shared/element-helpers.service';
import { ElementService } from './shared/element.service';
import { TextareaComponent } from './textarea/textarea.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    DynamicPlaceholderDirective,
    InputComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppConfigService, ElementService, ElementHelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
