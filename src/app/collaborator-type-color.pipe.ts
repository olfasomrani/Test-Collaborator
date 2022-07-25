import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collaboratorTypeColor'
})
export class CollaboratorTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Connecté':
        color = "green lighten-1";
        break;
      case 'Déconnecté':
        color = 'red lighten-1';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
