// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, RESET_FORM, INPUT_CHANGE } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      if (state === 5) {
        return 0
      } else {
      return state + 1
      }
      //or:
      // const nextIndex = state + 1
      // return nextIndex > 5 ? 0 : nextIndex
    case MOVE_COUNTERCLOCKWISE:
      if (state === 0) {
        return 5
      } else {
      return state - 1
      }
      //or:
      // const nextIndex = state - 1
      // return nextIndex < 0 ? 5 : nextIndex
    default:
      return state
}
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload
    case SET_SELECTED_ANSWER:
      return ''
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function form(state = initialFormState, action) {
  switch (action.type) {
    case RESET_FORM:
      return initialFormState
    case INPUT_CHANGE:
      return { ...state, [action.payload.inputId]: action.payload.value }
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })