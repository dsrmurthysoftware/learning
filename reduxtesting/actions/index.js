import { SAVE_COMMENT } from './types';

export function saveComment(comment) {
  // make ajax call here Fetch/ Axios/$.ajax
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}
