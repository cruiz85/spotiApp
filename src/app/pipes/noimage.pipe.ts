import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    let result = 'assets/img/noimage.png';
    if (images && images.length > 0) {
      result = images[0].url;
    }
    return result;
  }

}
