import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public todoServices: TodoService,
    public alertController: AlertController,
    private router: Router) { }

  public async addList() {
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log('Cancelar')
          }
        },
        {
          text: "Crear",
          handler: (data: any) => {
            if (data.title.length === 0) return;
            const id = this.todoServices.createList(data.title);
            this.router.navigate(['/tabs/tab1/add/', id]);

          }
        }
      ]
    });
    await alert.present();
  }
}
