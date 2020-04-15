// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CheckListComponent } from './check-list/check-list.component';
import { FormComponent } from './form/form.component';
import { SeparatorComponent } from './separator/separator.component';
import { ItemComponent } from './item/item.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckListComponent,
    FormComponent,
    SeparatorComponent,
    ItemComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
