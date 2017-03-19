import {Pipe, PipeTransform} from "@angular/core";

/* pass in a map and code,
 * Map must contain a code string and a name string for this to work as intended
 * return full name of the code
 */
@Pipe({name: "lookupNameByCode"})
export class LookupNameByCodePipe implements PipeTransform {
  transform(code: string, lookupMap: Map<String, String>): string {
   return lookupMap[code];
  }
}
