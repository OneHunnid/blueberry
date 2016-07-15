export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data
  }
}

// export const fetchData = (data) => {
//   return {
//     type: 'FETCH_DATA_REJECTED',
//     data
//   }
// }
//
// export const fetchData = (data) => {
//   return {
//     type: 'FETCH_DATA_SUCCESS',
//     data
//   }
// }
