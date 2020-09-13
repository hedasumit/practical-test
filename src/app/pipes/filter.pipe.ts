import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], search: string): any {
        search = search.toLowerCase()
        // I am unsure what id is here. did you mean title?
        return items.filter(item => 
            {
                let tempTitle = item.title.toLowerCase();
                return tempTitle.indexOf(search) !== -1 ;
            });
    }
}