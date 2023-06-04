import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {
  transform(date: string): string {
    const currentDate = new Date();
    const startDate = new Date(date);
    let getMonth = Math.floor(currentDate.getMonth() - startDate.getMonth());
    if (getMonth < 0) {
      getMonth += 12;
    }
    const yearsOfExperience = Math.floor(currentDate.getFullYear() - startDate.getFullYear());

    return yearsOfExperience.toString() +" . "+ getMonth.toString();
  }
}
