import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notreUPPERCASE'
})
export class NotreUPPERCASEPipe implements PipeTransform {

  transform(value: String, ...args: any[]): any {
    if (value){
      return value.toUpperCase()
    }else{
      return value
    }
    }

}
