import { schema } from 'normalizr';

const person = new schema.Entity('people');
const people = new schema.Array(person);

export { person, people };