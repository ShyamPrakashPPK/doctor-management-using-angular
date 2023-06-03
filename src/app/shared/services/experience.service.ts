import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {
  transform(date: string): string {
    const currentDate = new Date();
    const startDate = new Date(date);
    const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();

    return yearsOfExperience.toString();
  }
}
