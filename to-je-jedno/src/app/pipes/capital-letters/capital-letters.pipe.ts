import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters'
})
export class CapitalLettersPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ret: string = '';

    let i = 0;
    for(let c in value){
      if (i % 2 === 0) {
        ret = ret.concat(value[i].toUpperCase());
      } else {
       ret = ret.concat(value[i]);
      }
      i++;
    }

    return ret;
  }

}
