import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Dipipe'
})
export class Dipipe implements PipeTransform {

  transform(value: String, ...args: any[]): any {
    if (value){
      return value+"DI"
    }else{
      return value
    }
    }

}
