import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './todo-exercice/test/test.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddTodoComponent } from './todo-exercice/add-todo/add-todo.component';
import { TodoComponent } from './todo-exercice/todo/todo.component';
import { CalculatriceComponent } from './calculatrice-exercice/calculatrice/calculatrice.component';
import { ChiffreComponent } from './calculatrice-exercice/chiffre/chiffre.component';
import { OperateurComponent } from './calculatrice-exercice/operateur/operateur.component';
import { CalculatriceService } from './calculatrice-exercice/share/calculatrice.service';
import { MathsService } from './calculatrice-exercice/share/maths.service';
import { routes } from './app.routes';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AddTodoComponent,
    TodoComponent,
    CalculatriceComponent,
    ChiffreComponent,
    OperateurComponent,
    ConnexionComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routes
  ],
  providers: [MathsService, CalculatriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
