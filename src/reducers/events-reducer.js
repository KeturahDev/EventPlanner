// export default (state = {}, action) => {
//   const { title, host, date, yes, maybe, no, col } = action;
//   switch(action.type) {
//     case 'ADD_EVENT':
//       return {...state, [id]: {title, host, date,  yes, maybe, no}};
//     case 'DELETE_EVENT':
//       const newState = { ...state };
//       delete newState[id];
//       return newState;
//     case 'INCREMENT_VOTE':
//       if(action.col === 'yes') {
//         const newState = { ...state, [id]: {
//           title,
//           host,
//           date,
//           // id,
//           yes: yes++,
//           maybe,
//           no 
//         }};
//         return newState;
//       } else if(action.col === 'maybe') {
//         const newState = { ...state, [id]: {
//           title,
//           host,
//           date,
//           // id,
//           yes,
//           maybe: maybe++,
//           no 
//         }};
//         return newState;
//       } else if(action.col === 'no') {
//         const newState = { ...state, [id]: {
//           title,
//           host,
//           date,
//           // id,
//           yes,
//           maybe,
//           no: no++ 
//         }};
//         return newState;
//       }
//     default:
//       return state;
//   }
// };