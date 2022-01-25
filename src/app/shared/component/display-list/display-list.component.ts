import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Router, RouterModule, Routes } from '@angular/router';
import { DialogDisplayComponent } from '../dialog-display/dialog-display.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss'],
})
export class DisplayListComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  lundi: any[] = [];
  mardi: any[] = [];
  mercredi: any[] = [];
  jeudi: any[] = [];
  vendredi: any[] = [];
  samedi: any[] = [];
  dimanche: any[] = [];
  classifie: any[] = [];
  supprime: any[] = [];

  tailleL: any = 0;
  tailleM: any = 0;
  tailleMe: any = 0;
  tailleJ: any = 0;
  tailleV: any = 0;
  tailleSa: any = 0;
  tailleD: any = 0;
  tailleC: any = 0;
  tailleS: any = 0;

  ngOnInit(): void {
    /*
    let chaine = ['test','lol','OMEGALUL','BONJOUR','TUPEUXMARCHERSTP'];
    localStorage.setItem('lundi', JSON.stringify(chaine));
    */

    this.lundi = JSON.parse(localStorage.getItem('lundi') || '[]');
    this.tailleL = this.lundi.length;
    this.mardi = JSON.parse(localStorage.getItem('mardi') || '[]');
    this.tailleM = this.mardi.length;
    this.mercredi = JSON.parse(localStorage.getItem('mercredi') || '[]');
    this.tailleMe = this.mercredi.length;
    this.jeudi = JSON.parse(localStorage.getItem('jeudi') || '[]');
    this.tailleJ = this.jeudi.length;
    this.vendredi = JSON.parse(localStorage.getItem('vendredi') || '[]');
    this.tailleV = this.vendredi.length;
    this.samedi = JSON.parse(localStorage.getItem('samedi') || '[]');
    this.tailleSa = this.samedi.length;
    this.dimanche = JSON.parse(localStorage.getItem('dimanche') || '[]');
    this.tailleD = this.dimanche.length;
    this.classifie = JSON.parse(localStorage.getItem('classifie') || '[]');
    this.tailleC = this.classifie.length;
    this.supprime = JSON.parse(localStorage.getItem('supprime') || '[]');
    this.tailleS = this.supprime.length;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    let tabprevious = JSON.parse(
      localStorage.getItem(event.previousContainer.id) || '[]'
    );
    let tabactuel = JSON.parse(
      localStorage.getItem(event.container.id) || '[]'
    );

    if (
      event.previousContainer == event.container &&
      event.previousIndex == event.currentIndex
    ) {
    } else if (event.previousContainer == event.container) {
      tabactuel.splice(event.previousIndex, 1, tabprevious[event.currentIndex]);
      tabactuel.splice(event.currentIndex, 1, tabprevious[event.previousIndex]);
      localStorage.setItem(event.container.id, JSON.stringify(tabactuel));
    } else {
      console.log(
        'current' + event.currentIndex,
        '; previous ' + event.previousIndex
      );
      tabactuel.splice(event.currentIndex, 0, tabprevious[event.previousIndex]);
      localStorage.setItem(event.container.id, JSON.stringify(tabactuel));
      console.log(tabactuel);

      tabprevious.splice(event.previousIndex, 1);
      console.log(tabprevious);
      localStorage.setItem(
        event.previousContainer.id,
        JSON.stringify(tabprevious)
      );
    }

    this.tailleL = this.lundi.length;
    this.tailleM = this.mardi.length;
    this.tailleMe = this.mercredi.length;
    this.tailleJ = this.jeudi.length;
    this.tailleV = this.vendredi.length;
    this.tailleSa = this.samedi.length;
    this.tailleD = this.dimanche.length;
    this.tailleC = this.classifie.length;
    this.tailleS = this.supprime.length;
  }

  supprimer(): void {
    const dialogRef = this.dialog.open(DialogDisplayComponent, {
      width: "300px",
    });
  }


  ajouter(): void {
    this.router.navigate(['/list/add']);
  }
}
