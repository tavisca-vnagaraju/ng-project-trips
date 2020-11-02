import {AbstractControl} from '@angular/forms';
export class CustomValidator {
  static CheckDOB(control: AbstractControl): any {
     // tslint:disable-next-line: radix
     let date = new Date(control.value);
     if(date > new Date() || date.getFullYear() > 2015 ){
        return {valid : false};
     }
  }
}
