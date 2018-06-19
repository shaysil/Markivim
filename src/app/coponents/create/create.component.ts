
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormBuilder, FormControl, FormArray, FormGroup ,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  fieldArray: FormArray;
  Types: any[];
  Difficulty: any[];
  newAttribute: any = {};
  angForm: FormGroup;
  

  ngOnInit() {
    this.angForm = this.fb.group({
      itemRows: this.fb.array([this.initItemRows()]) // here
    });
    this.Types = ["עוגות","עוגיות","סלטים","מאפים","תבשילים","פשטידות","עוף","דגים","דיאטטים","פיצה","תוספות","קינוחי כוסות","אורז","ירקות","לחמים","קינוחים","פסטה","ללא גלוטן","ראשונות","לילדים","גלידות","ריבות","בשר","משקאות","מרקים"];
    this.Difficulty = ["קל מאוד","קל","בינוני","קשה","קשה מאוד"];
    
  }
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
     
   });
  }
  initItemRows() {
    return this.fb.group({
        // list all your form controls here, which belongs to your form array
        itemname: ['']
    });
}
 addNewRow() {
   debugger
        const control = <FormArray>this.angForm.controls['itemRows'];
        control.push(this.initItemRows());
        this.fieldArray=control
    }

    deleteRow(index: number) {
        const control = <FormArray>this.angForm.controls['itemRows'];
        control.removeAt(index);
        this.fieldArray=control
    }

  addRecipe(name, Category,Difficult,PreparationSteps) {
    debugger
    this.newAttribute = this.angForm.controls['itemRows'].value;
     const dataObj = {
      DBname: name.value,
      DBCategoryId : Category.value,
      DBDifficulty : Difficult.value,
      DBprepSteps:PreparationSteps.value,
      ingrid:this.newAttribute
    };
    this.shareservice.addRecipe(dataObj);
  }

}