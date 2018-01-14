

export const UPDATE_TOPICS = 'UPDATE_TOPICS'

export default (topic) => {
  return {
    type: UPDATE_TOPICS,
    payload: topic
  }
}
