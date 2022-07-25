import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Collaborator } from '../collaborator';
import { Collaborators } from '../collaborator-list';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.css']
})
export class ListCollaboratorComponent  {
  collaboratorList  = Collaborators;
  constructor(private router : Router){ }
  
  goToCollaborator(collaborator : Collaborator){
    this.router.navigate(['/details', collaborator.id]);
  }



}
