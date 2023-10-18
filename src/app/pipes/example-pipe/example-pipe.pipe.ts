import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example',
})
export class ExamplePipe implements PipeTransform {
  transform(str: string): string {
    return `EXAMPLE: ${str}`;
  }
}
