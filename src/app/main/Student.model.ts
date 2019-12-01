import { Person } from './Person.model';

export interface Student {
    person: Person;
    gender: string;
    education: string;
    studied: string;
}
