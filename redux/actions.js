export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_FIVE = 'INCREMENT_FIVE';
export const DECREMENT_FIVE = 'DECREMENT_FIVE';


export function increment(value) {
  return {
    type: INCREMENT,
    value,
  }
}

export function decrement(value) {
  return {
    type: DECREMENT,
    value
  }
}