import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import { IItem } from '../../model/item.model';

// const GET_ITEMS = gql`
//   {
//     human(id: 1000) {
//       name
//       homePlanet
//       height
//       mass
//       appearsIn
//     }
//   }
// `;

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {
  items: Observable<any>;
  data: IItem[] = [
    {
      id: 11231243253422,
      title: 'Lorem 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Cras eleifend libero sed magna porttitor fermentum.' +
        'Nulla sodales nisl velit, sed dapibus lectus efficitur sed.' +
        'Pellentesque venenatis urna lacinia, blandit orci et, facilisis erat. Sed et porta nisl.' +
        'Nunc urna neque, iaculis in mollis sed, aliquam in quam. Aenean erat neque, vestibulum eget erat vel, pulvinar varius sem.' +
        'Etiam at nibh metus. Nunc et laoreet arcu. Proin eget sem vehicula, dignissim elit vitae, egestas mauris.',
      isVisible: true
    },
    {
      id: 56788762567833,
      title: 'Lorem 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Cras eleifend libero sed magna porttitor fermentum.' +
        'Nulla sodales nisl velit, sed dapibus lectus efficitur sed.' +
        'Pellentesque venenatis urna lacinia, blandit orci et, facilisis erat. Sed et porta nisl.' +
        'Nunc urna neque, iaculis in mollis sed, aliquam in quam. Aenean erat neque, vestibulum eget erat vel, pulvinar varius sem.' +
        'Etiam at nibh metus. Nunc et laoreet arcu. Proin eget sem vehicula, dignissim elit vitae, egestas mauris.',
      isVisible: true
    },
    {
      id: 90987687656789,
      title: 'Lorem 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Cras eleifend libero sed magna porttitor fermentum.' +
        'Nulla sodales nisl velit, sed dapibus lectus efficitur sed.' +
        'Pellentesque venenatis urna lacinia, blandit orci et, facilisis erat. Sed et porta nisl.' +
        'Nunc urna neque, iaculis in mollis sed, aliquam in quam. Aenean erat neque, vestibulum eget erat vel, pulvinar varius sem.' +
        'Etiam at nibh metus. Nunc et laoreet arcu. Proin eget sem vehicula, dignissim elit vitae, egestas mauris.',
      isVisible: true
    },
    {
      id: 11231222253422,
      title: 'Lorem 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Cras eleifend libero sed magna porttitor fermentum.' +
        'Nulla sodales nisl velit, sed dapibus lectus efficitur sed.' +
        'Pellentesque venenatis urna lacinia, blandit orci et, facilisis erat. Sed et porta nisl.' +
        'Nunc urna neque, iaculis in mollis sed, aliquam in quam. Aenean erat neque, vestibulum eget erat vel, pulvinar varius sem.' +
        'Etiam at nibh metus. Nunc et laoreet arcu. Proin eget sem vehicula, dignissim elit vitae, egestas mauris.',
      isVisible: true
    },
    {
      id: 11231240003422,
      title: 'Lorem 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Cras eleifend libero sed magna porttitor fermentum.' +
        'Nulla sodales nisl velit, sed dapibus lectus efficitur sed.' +
        'Pellentesque venenatis urna lacinia, blandit orci et, facilisis erat. Sed et porta nisl.' +
        'Nunc urna neque, iaculis in mollis sed, aliquam in quam. Aenean erat neque, vestibulum eget erat vel, pulvinar varius sem.' +
        'Etiam at nibh metus. Nunc et laoreet arcu. Proin eget sem vehicula, dignissim elit vitae, egestas mauris.',
      isVisible: true
    },
  ];

  constructor(
    private apollo: Apollo
  ) { }

  getData() {
    // this.items = this.apollo
    //   .watchQuery({
    //     query: GET_ITEMS
    //   })
    //   .valueChanges.pipe(map(result => result.data && result.data )); // make me trouble
    return this.data;
  }

  createData(newItem: IItem) {
    this.data.push(newItem);
  }

  deleteItem(item: IItem) {
    this.data.map(one => {
      if(one.id === item.id) one.isVisible = false;
    })
  }

  addItem(item: IItem) {
    this.data.push(item)
  }
}
