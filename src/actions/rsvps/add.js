
export const ADD_RSVP = 'ADD_RSVP'

export default (newRsvp) => {
  return {
    type: ADD_RSVP,
    payload: newRsvp
  }
}
