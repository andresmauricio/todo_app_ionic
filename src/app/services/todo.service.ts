import { Injectable } from '@angular/core';
import { List } from '../models/Lista';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public lista: List[] = [];

  constructor() {
    this.getStorage();
    // const listOne = new List('Recolectar piedras');
    // const listTwo = new List('Destruir');
    // this.lista.push(listOne, listTwo);
   }

   public createList(title: string): number {
    const newList = new List(title);
    this.lista.push(newList);
    this.setStorage();
    return newList.id;
   }

   public getList(id: string | number): List {
     id = Number(id);
     return this.lista.find(lista => {
       return lista.id === id;
     })
   }

   public deleteList(list :List) {
     this.lista = this.lista.filter(dataList => {
       return dataList.id !== list.id;   
     });
     this.setStorage();
   }

   public setStorage(): void {
    localStorage.setItem('data', JSON.stringify(this.lista));
   }

   private getStorage(): void {
     const data = localStorage.getItem('data');
     if (data) {
       this.lista = JSON.parse(data);
     }
   }

}
