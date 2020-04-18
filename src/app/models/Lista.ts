import { ListItem } from './ListItem';

export class List {
    public id: number;
    public title: string;
    public createAt: Date;
    public finishedAt: Date;
    public finish: boolean;
    public items: ListItem[];

    constructor(title: string) {
        this.id = new Date().getTime();
        this.title = title;
        this.createAt = new Date();
        this.finish = false;
        this.items = [];
    }
}