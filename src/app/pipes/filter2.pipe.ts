import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultFilter2 = [];
    for( const locations of value ){
      if(locations.id.indexOf(arg) > -1){
        
        resultFilter2.push(locations);
      }else if(locations.name.indexOf(arg) > -1){
        resultFilter2.push(locations);
      }else if(locations.type.indexOf(arg) > -1){
        resultFilter2.push(locations);
      }else if(locations.dimension.indexOf(arg) > -1){
        resultFilter2.push(locations);
      }
    };
    return resultFilter2;
    
  }

}
