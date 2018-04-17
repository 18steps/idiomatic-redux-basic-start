import * as v4 from 'uuid/v4';


const delay = (ms) =>
  new Promise(resolve =>
    setTimeout(resolve, ms));

const people = [
  {
    id: v4(),
    name: 'Yoda',
    faction: 'Rebels',
  },

  {
    id: v4(),
    name: 'Darth Vader',
    faction: 'Empire',
  },
];
const fetchStarWars = () =>
  delay(500).then(() => people);

export { fetchStarWars };