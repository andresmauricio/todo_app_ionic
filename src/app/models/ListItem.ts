export class ListItem {
    public desciption: string;
    public completed: boolean;

    constructor(desciption: string) {
        this.desciption = desciption;
        this.completed = false;
    }
}