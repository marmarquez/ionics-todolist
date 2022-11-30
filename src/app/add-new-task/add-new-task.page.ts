import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categorias = ['trabjo','personal','hogar','estudio']

  newTaskObj={}

  NombreTarea = ""
  FechaTarea = ""
  PrioridadTarea = ""
  CategoriaTarea = ""

  tareaObjeto = {}

  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {

    // this.categorias.push('trabajo')
    // this.categorias.push('personal')
    // this.categorias.push('hogar')
    // this.categorias.push('estudio')

  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.tareaObjeto)
  }

  catSelected (index:number){
    this.CategoriaTarea = this.categorias[index]
  }

  newTask(){
    this.tareaObjeto = ({itemName: this.NombreTarea, 
                        itemDeuDate:this.FechaTarea, 
                        itemPriority:this.PrioridadTarea, 
                        itemCategory:this.CategoriaTarea
                      })
    this.dismiss()
  }
}
