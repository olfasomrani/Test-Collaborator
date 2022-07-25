import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from '../collaborator';
import { Collaborators } from '../collaborator-list';

@Component({
  selector: 'app-details-collaborator',
  templateUrl: './details-collaborator.component.html',
  styleUrls: ['./details-collaborator.component.css']
})
export class DetailsCollaboratorComponent implements OnInit {

  collaboratorList : Collaborator[];
  collaborator : Collaborator|undefined;

  constructor( private route: ActivatedRoute , private router: Router) { }

  ngOnInit()  {
    this.collaboratorList=Collaborators;
    const CollaboratorId : string|null = this.route.snapshot.paramMap.get('id');
    if(CollaboratorId){
      this.collaborator = this.collaboratorList.find(collaborator => collaborator.id == +CollaboratorId);
    }

  }
   goToCollaboratorList(){
    this.router.navigate(['/collaborators']);

   }
}
