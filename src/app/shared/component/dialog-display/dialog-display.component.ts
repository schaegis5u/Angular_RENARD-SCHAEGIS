import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-display',
  templateUrl: './dialog-display.component.html',
  styleUrls: ['./dialog-display.component.scss']
})
export class DialogDisplayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDisplayComponent>) { }

  ngOnInit(): void {
  }

  onYesClick() : void {
    this.dialogRef.close();
    localStorage.removeItem('supprime');
    location.reload();
  }
  onNoClick() : void {
    this.dialogRef.close();
  }


}
