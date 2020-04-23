import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/Lista';
import { ListItem } from 'src/app/models/ListItem';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private idList: number | string;
  public list: List;
  public nameItem: string;

  constructor(private todoServices: TodoService, private activedRoute: ActivatedRoute) {
    this.getId();
    this.getList();
  }

  private getList() {
    this.list = this.todoServices.getList(this.idList);
  }

  private getId() {
    this.idList = this.activedRoute.snapshot.paramMap.get('id');
  }

  public deleteTask(index: number) {
    this.list.items.splice(index, 1);
    this.todoServices.setStorage();
  } 

  public addItem() {
    if (this.nameItem.length === 0) return;

    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.todoServices.setStorage();
    this.nameItem = "";
  }

  public changeCheck(item: ListItem) {
    console.log(this.list);
    
    const pending = this.list.items
      .filter(itemList => {
        return !itemList.completed;
      })
      .length;

    if (pending === 0) {
      this.list.finishedAt = new Date();
      this.list.finish = true;
    } else {
      this.list.finishedAt = null;
      this.list.finish = false;
    }
     this.todoServices.setStorage();
  }

  ngOnInit() {
  }

}
