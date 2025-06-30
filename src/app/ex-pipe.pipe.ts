import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exPipe'
})
export class ExPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
