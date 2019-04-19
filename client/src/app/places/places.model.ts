export class PlacesModel {
  id: number;
  name: string;
  user: number;

  constructor(id: number, name: string, user: number = 1) {
    this.id = id;
    this.name = name;
    this.user = user;
  }
}
