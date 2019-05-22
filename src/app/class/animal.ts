import {AnimalClass} from '../enum/animal-class.enum';

export class Animal {
    name: string;
    printName: string;
    class: AnimalClass;
    childrenName?: string;
    femaleName?: string;
    soundName?: string;
}
