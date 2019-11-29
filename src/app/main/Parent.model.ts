import { Person } from './Person.model';
import { Child } from './Child.model';

export interface Parent {
    person: Person;
    role: string;
    children: number;
    workStart: string;
    workEnd: string;
    childrenDetails: Child[];
}
