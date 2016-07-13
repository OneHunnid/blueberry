export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

export const changePosition = (position) => {
  return {
    type: 'CHANGE_POSITION',
    position
  }
}

export const changeContact = (contact) => {
  return {
    type: 'CHANGE_CONTACT',
    contact
  }
}
