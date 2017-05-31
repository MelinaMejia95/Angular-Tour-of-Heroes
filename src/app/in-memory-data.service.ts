import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Wolverine', img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/00/537bcb1133fd7.jpg'},
      {id: 12, name: 'Hulk', img: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg'},
      {id: 13, name: 'Iron Man', img: 'https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg'},
      {id: 14, name: 'Thor', img: 'https://i.annihil.us/u/prod/marvel/i/mg/7/10/537bc71e9286f.jpg'},
      {id: 15, name: 'Captain America', img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/80/537ba5b368b7d.jpg'},
      {id: 16, name: 'Spider Man', img: 'https://i.annihil.us/u/prod/marvel/i/mg/6/60/538cd3628a05e.jpg'},
      {id: 17, name: 'Doctor Strange', img: 'https://i.annihil.us/u/prod/marvel/i/mg/1/30/537ba85979532.jpg'},
      {id: 18, name: 'Black Panther', img: 'https://i.annihil.us/u/prod/marvel/i/mg/9/03/537ba26276348.jpg'},
      {id: 19, name: 'Storm', img: 'https://i.annihil.us/u/prod/marvel/i/mg/c/b0/537bc5f8a8df0.jpg'},
      {id: 20, name: 'Quicksilver', img: 'https://i.annihil.us/u/prod/marvel/i/mg/b/e0/537bc02b0fee5.jpg'}
    ];
    return {heroes};
  }
}
