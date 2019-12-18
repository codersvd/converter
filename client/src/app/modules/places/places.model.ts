export class PlacesModel {
    public id: number;
    public name: string;
    public user: number;
    public alias: string;

    constructor(
        id: number,
        name: string,
        user: number = 1,
        alias: string = ''
    ) {
        this.id = id;
        this.name = name;
        this.user = user;
        this.alias = alias;
    }
}
