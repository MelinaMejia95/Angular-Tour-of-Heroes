import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Wolverine'},
      {id: 12, name: 'Hulk'},
      {id: 13, name: 'Iron Man'},
      {id: 14, name: 'Thor'},
      {id: 15, name: 'Captain America'},
      {id: 16, name: 'Spider Man'},
      {id: 17, name: 'Doctor Strange'},
      {id: 18, name: 'Black Panther'},
      {id: 19, name: 'Storm'},
      {id: 20, name: 'Professor X'}
    ];
    return {heroes};
  }
}
