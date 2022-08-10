import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_QUESTION,
} from '../actions/questions_actions';

export const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      newState = Object.assign({}, action.questions)
      return newState;
    case RECEIVE_QUESTION:
      newState = Object.assign({}, { [action.question.question.id]: action.question });
      return newState;
    case REMOVE_QUESTION:
      newState = Object.assign({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  };
}
