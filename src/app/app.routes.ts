import { RouterModule } from "@angular/router";
import { TodoComponent } from './todo-exercice/todo/todo.component';
import { CalculatriceComponent } from './calculatrice-exercice/calculatrice/calculatrice.component';
import { TestComponent } from "./todo-exercice/test/test.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const appRoutes = [
    {path: '', component: ConnexionComponent},
    {path: 'dashboard/:username', component: DashboardComponent},
    {path: 'calculatrice', component: CalculatriceComponent},
    {path: 'test', component: TestComponent},
];

export const routes = RouterModule.forRoot(appRoutes);