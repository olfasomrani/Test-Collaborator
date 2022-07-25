import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCollaboratorComponent } from './details-collaborator/details-collaborator.component';
import { ListCollaboratorComponent } from './list-collaborator/list-collaborator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ {path:'details/:id', component:DetailsCollaboratorComponent},
{path:'collaborators',component:ListCollaboratorComponent},
{path:'', redirectTo:'collaborators',pathMatch:'full'},
{path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
