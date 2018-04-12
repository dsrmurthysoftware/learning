
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
  describe('saveComment', () => {
    //Action has correct type or not
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).toBe(SAVE_COMMENT);
    });
   // Action is able to handle payload or not
    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).toBe('new comment');
    });
  });
});
