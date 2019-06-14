import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-add-place-dialog',
  templateUrl: 'add-place-dialog.component.html'
})
export class AddPlaceDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddPlaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
