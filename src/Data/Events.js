import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();


const Events = {
  [id1]: {
    title: "Nascar",
    host: "Billy",
    date: "May 1st",
    id: id1
  },
  [id2]: {
    title: "Beach Party",
    host: "Keturah",
    date: "July 4th",
    id: id2
  },
  [id3]: {
    title: "Starship",
    host: "Z",
    date: "April 11th",
    id: id3
  }
}

export default Events;