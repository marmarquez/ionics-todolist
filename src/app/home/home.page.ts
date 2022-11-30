import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [
    {
    itemName: 'Programar',
    itemDeuDate: '11/27/22',
    itemPriority: 'alta',
    itemCategory: 'proyecto'
  },
  {
    itemName: 'Disenar',
    itemDeuDate: '11/22/22',
    itemPriority: 'media',
    itemCategory: 'proyecto'
  },
  {
    itemName: 'Comprar',
    itemDeuDate: '11/23/22',
    itemPriority: 'media',
    itemCategory: 'personal'
  },
]
  today: number = Date.now()
  constructor(public modalCtrl: ModalController) {}

  async AddTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj=>{
      console.log(newTaskObj.data)
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

  delete(index:number){
    this.todoList.splice(index,1)
  }
}
