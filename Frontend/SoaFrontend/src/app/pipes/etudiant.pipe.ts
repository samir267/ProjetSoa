import { Pipe, PipeTransform } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';

@Pipe({
  name: 'etudiant'
})
export class EtudiantPipe implements PipeTransform {

  transform(items: Etudiant[], filter: string): Etudiant[] {
    if (!items || !filter) {
      return items;
    }

    filter = filter.toLowerCase();

    return items.filter((item: Etudiant) =>
      item.email.toLowerCase().includes(filter) ||
      item.nom.toLowerCase().includes(filter) ||
      item.prenom.toLowerCase().includes(filter) ||
      item.adresse.toLowerCase().includes(filter)
    );
  }
}
