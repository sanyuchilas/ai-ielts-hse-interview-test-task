import { INCREMENT_ATTEMPTS, AttemptsActionTypes } from "./actions"

export interface AttemptsState {
  attemptsCount: number
}

const initialState: AttemptsState = {
  attemptsCount: 0,
}

export const attemptsReducer = (
  state = initialState,
  action: AttemptsActionTypes
): AttemptsState => {
  switch (action.type) {
    case INCREMENT_ATTEMPTS:
      // добавлю спред для фьючерпруфа
      return { ...state, attemptsCount: state.attemptsCount + 1 }
    default:
      return state
  }
}
