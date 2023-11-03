import { Pipe, PipeTransform } from '@angular/core';
import { Enseignant } from '../Models/Enseignant';

@Pipe({
  name: 'enseignant'
})
export class EnseignantPipe implements PipeTransform {

  transform(items: Enseignant[], filter: string): Enseignant[] {
    if (!items || !filter) {
      return items;
    }

    filter = filter.toLowerCase();

    return items.filter((item: Enseignant) =>
      item.email.toLowerCase().includes(filter) ||
      item.nom.toLowerCase().includes(filter) ||
      item.prenom.toLowerCase().includes(filter) ||
      item.adresse.toLowerCase().includes(filter) ||
      item.matiere.toLowerCase().includes(filter)
    );
  }

}
