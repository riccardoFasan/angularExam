// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CheckListComponent } from './check-list/check-list.component';
import { FormComponent } from './form/form.component';
import { SeparatorComponent } from './separator/separator.component';

// Routes
const appRoutes : Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckListComponent,
    FormComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
