import { Component, OnInit, Input } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { Router } from "@angular/router";
import { List } from 'src/app/models/Lista';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input() public finished = true;
  constructor(public todoServices: TodoService, private router: Router) {}

  public listSelected(item) {
    if (this.finished) {
      this.router.navigate(["/tabs/tab2/add/", item.id]);
    } else {
      this.router.navigate(["/tabs/tab1/add/", item.id]);
    }
  }

  public deleteList(item: List) {
    this.todoServices.deleteList(item);
  }

  ngOnInit() {}
}
