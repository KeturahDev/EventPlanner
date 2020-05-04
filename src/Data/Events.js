import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();
const id3 = v4();


const Events = {
  [id1]: {
    title: "Nascar",
    host: "Billy",
    date: "May 1st"
  },
  [id2]: {
    title: "Beach Party",
    host: "Keturah",
    date: "July 4th"
  },
  [id3]: {
    title: "Starship",
    host: "Z",
    date: "April 11th"
  }
}

export default Events;