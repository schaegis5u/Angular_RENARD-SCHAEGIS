import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {

  constructor() { }

    lundi : any[] = [];
    mardi : any[] = [];
    mercredi : any[] = [];
    jeudi : any[] = [];
    vendredi : any[] = [];
    samedi : any[] = [];
    dimanche : any[] = [];
    classifie : any[] = [];

  ngOnInit(): void {

    /*
    let chaine = ['test','lol','OMEGALUL','BONJOUR','TUPEUXMARCHERSTP'];
    localStorage.setItem('lundi', JSON.stringify(chaine));
    */

    this.lundi=JSON.parse(localStorage.getItem('lundi') || '[]');
    this.mardi=JSON.parse(localStorage.getItem('mardi') || '[]');
    this.mercredi=JSON.parse(localStorage.getItem('mercredi') || '[]');
    this.jeudi=JSON.parse(localStorage.getItem('jeudi') || '[]');
    this.vendredi=JSON.parse(localStorage.getItem('vendredi') || '[]');
    this.samedi=JSON.parse(localStorage.getItem('samedi') || '[]');
    this.dimanche=JSON.parse(localStorage.getItem('dimanche') || '[]');
    this.classifie=JSON.parse(localStorage.getItem('classifie') || '[]');

  }

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }

      let tabprevious = JSON.parse(localStorage.getItem(event.previousContainer.id) || '[]');
      let tabactuel = JSON.parse(localStorage.getItem(event.container.id) || '[]');

      if(event.previousContainer == event.container && event.previousIndex == event.currentIndex ){

      }
      else if(event.previousContainer == event.container){
        tabactuel.splice(event.previousIndex, 1, tabprevious[event.currentIndex]);
        tabactuel.splice(event.currentIndex, 1, tabprevious[event.previousIndex]);
        localStorage.setItem(event.container.id,JSON.stringify(tabactuel));
      }
      else{
        console.log("current"+ event.currentIndex, "; previous "+event.previousIndex)
        tabactuel.splice(event.currentIndex, 0, tabprevious[event.previousIndex]);
        localStorage.setItem(event.container.id,JSON.stringify(tabactuel));
        console.log(tabactuel);

        tabprevious.splice(event.previousIndex,1)
        console.log(tabprevious);
        localStorage.setItem(event.previousContainer.id,JSON.stringify(tabprevious))
      }
    }

}

