import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stdDegress'
})
export class StdDegressPipe implements PipeTransform {

    transform(value: number):string {
      if (value < 0 && value > 100){
        return 'not valid degree'
      }
      if(value <50&& value > 0){
          return 'D'
      }else if(value < 60 && value > 50){
          return 'C'
      }else if (value <75 && value > 60){
          return 'B'
      }else if(value <100 && value > 75){
          return 'A'
      }
      return '';
      
  }

}
