import { UnknownAction } from "redux"

export const INCREMENT_ATTEMPTS = "INCREMENT_ATTEMPTS"

export interface IncrementAttemptsAction extends UnknownAction {
  type: typeof INCREMENT_ATTEMPTS
}

export type AttemptsActionTypes = IncrementAttemptsAction

export const incrementAttempts = (): AttemptsActionTypes => ({
  type: INCREMENT_ATTEMPTS,
})
