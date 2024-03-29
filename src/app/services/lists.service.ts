import { Injectable } from '@angular/core';
import { List } from './../models/list.model';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists:List[] =[];

  constructor() { 
    this.chargeStorage();
    // const listOne=new List("Developper mon appli");
    // const listTwo=new List("Sortir le chien");
    // this.lists.push(listOne,listTwo);   
  }

  createList(title:string):number{
    const list=new List(title);
    this.lists.push(list);
    this.saveStorage();
    return list.id;
  }

  getList(id:string | number):List{
    id=Number(id);
    return this.lists.find(list=>list.id===id);
  }
  
  deleteList(id:number):void{
    this.lists=this.lists.filter(list=>list.id!=id);
    this.saveStorage();
  }

  saveStorage(){
    localStorage.setItem("lists",JSON.stringify(this.lists));
  }

  chargeStorage(){
    if(localStorage.getItem("lists")){
    this.lists=JSON.parse(localStorage.getItem("lists"));
    }
  }
 
}
