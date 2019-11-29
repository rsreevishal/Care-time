import { Person } from './Person.model';

export interface Teacher {
    person: Person;
    gender: string;
    education: string;
    studied: string;
}
